import type { ObjectDirective } from 'vue'

type RevealOptions = { delay?: number, preset?: 'rise' | 'bar' | 'settle' }

export default defineNuxtPlugin((nuxtApp) => {
  const pending = new Map<HTMLElement, RevealOptions>()
  const active = new Map<HTMLElement, Animation>()
  const elements = new Set<HTMLElement>()
  let observer: IntersectionObserver | undefined
  let preference: MediaQueryList | undefined
  let keyboard = false

  const stop = () => {
    // The underlying styles are always the final, visible state.
    for (const animation of active.values()) animation.cancel()
    active.clear()
  }
  const onPreference = () => {
    if (preference?.matches) stop()
  }
  const onKey = (event: KeyboardEvent) => {
    if (!['Tab', 'Enter', ' ', 'ArrowDown', 'ArrowUp', 'Home', 'End', 'Escape'].includes(event.key))
      return
    keyboard = true
    stop()
  }
  const onPointer = () => {
    keyboard = false
  }
  const onFocus = (event: FocusEvent) => {
    if (!(event.target instanceof Node)) return
    for (const [el, animation] of active) {
      if (el.contains(event.target)) animation.cancel()
    }
    for (const el of pending.keys()) {
      if (!el.contains(event.target)) continue
      observer?.unobserve(el)
      pending.delete(el)
    }
  }

  function initialize() {
    if (preference) return
    preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    preference.addEventListener('change', onPreference)
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer, { passive: true })
    document.addEventListener('focusin', onFocus)
    if (!('IntersectionObserver' in window)) return
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          const options = pending.get(el)
          observer?.unobserve(el)
          pending.delete(el)
          if (!options || preference?.matches || keyboard || typeof el.animate !== 'function')
            continue
          if (el.contains(document.activeElement)) continue
          const preset = options.preset ?? 'rise'
          const frames
            = preset === 'bar'
              ? [
                  { transform: 'scaleX(0)', transformOrigin: 'left' },
                  { transform: 'scaleX(1)', transformOrigin: 'left' }
                ]
              : [
                  {
                    opacity: 0,
                    transform: preset === 'settle' ? 'scale(.97)' : 'translateY(16px)'
                  },
                  { opacity: 1, transform: 'none' }
                ]
          const animation = el.animate(frames, {
            duration: preset === 'bar' ? 700 : 520,
            delay: Math.min(240, Math.max(0, options.delay ?? 0)),
            easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
            fill: 'both'
          })
          active.set(el, animation)
          animation.onfinish = () => {
            animation.cancel()
          }
          animation.oncancel = () => {
            active.delete(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -24px 0px' }
    )
  }

  function cleanup() {
    observer?.disconnect()
    observer = undefined
    stop()
    pending.clear()
    preference?.removeEventListener('change', onPreference)
    preference = undefined
    keyboard = false
    if (import.meta.client) {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('focusin', onFocus)
    }
  }

  const reveal: ObjectDirective<HTMLElement, RevealOptions | number | undefined> = {
    getSSRProps: () => ({}),
    mounted(el, binding) {
      elements.add(el)
      initialize()
      if (preference?.matches || !observer) return
      pending.set(
        el,
        typeof binding.value === 'number' ? { delay: binding.value } : (binding.value ?? {})
      )
      observer.observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
      pending.delete(el)
      active.get(el)?.cancel()
      active.delete(el)
      elements.delete(el)
      if (!elements.size) cleanup()
    }
  }
  nuxtApp.vueApp.directive('v3-reveal', reveal)
  nuxtApp.vueApp.onUnmount(cleanup)
})
