import type Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/** Keep the scroll controller inside the alternate page's lifecycle. */
export function useV2SmoothScroll() {
  const reducedMotion = usePreferredReducedMotion()
  const desktopPointer = useMediaQuery('(min-width: 768px) and (pointer: fine)')
  let controller: Lenis | undefined

  onMounted(() => {
    watch(
      () => desktopPointer.value && reducedMotion.value !== 'reduce',
      async (enabled, _, onCleanup) => {
        let disposed = false
        onCleanup(() => {
          disposed = true
          controller?.destroy()
          controller = undefined
        })
        if (!enabled) return

        const { default: Lenis } = await import('lenis')
        if (disposed) return
        controller = new Lenis({
          autoRaf: true,
          lerp: 0.14,
          smoothWheel: true,
          syncTouch: false,
          stopInertiaOnNavigate: true,
          prevent: node => !!node.closest('[data-lenis-prevent]')
        })
      },
      { immediate: true }
    )
  })

  // Preserve real URLs, modifier clicks and keyboard focus for anchor navigation.
  useEventListener('click', (event: MouseEvent) => {
    if (!controller || event.defaultPrevented || event.button !== 0
      || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const link = event.target instanceof Element ? event.target.closest('a') : null
    if (!link || link.target || link.hasAttribute('download')) return
    const url = new URL(link.href, window.location.href)
    if (url.origin !== location.origin || url.pathname !== location.pathname
      || url.search !== location.search || !url.hash) return

    let id: string
    try {
      id = decodeURIComponent(url.hash.slice(1))
    } catch {
      return
    }
    const target = document.getElementById(id)
    if (!target) return
    event.preventDefault()
    if (location.hash !== url.hash) history.pushState(history.state, '', url.hash)
    controller.scrollTo(target, {
      // Section scroll margins already account for the fixed header.
      offset: id === 'main-content' ? -88 : 0,
      lerp: 0,
      duration: 0.85,
      easing: t => 1 - Math.pow(1 - t, 4),
      immediate: id === 'main-content',
      onComplete: () => {
        const hadTabindex = target.hasAttribute('tabindex')
        if (!hadTabindex) target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
        if (!hadTabindex) {
          target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true })
        }
      }
    })
  }, { capture: true })

  // Keyboard input and browser history immediately take control from inertia.
  useEventListener('keydown', (event: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Escape'].includes(event.key)) {
      controller?.scrollTo(window.scrollY, { immediate: true })
    }
  })
  useEventListener('popstate', () => controller?.scrollTo(window.scrollY, { immediate: true }))
}
