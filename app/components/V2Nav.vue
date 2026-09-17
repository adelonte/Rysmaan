<script setup lang="ts">
withDefaults(defineProps<{ onPaper?: boolean, activeSection?: string }>(), {
  onPaper: false,
  activeSection: ''
})

const links = [
  { label: 'About', to: '#about', section: 'about' },
  { label: 'Calgary', to: '#calgary', section: 'calgary' },
  { label: 'Contact', to: 'mailto:hello@rysmaan.com', section: 'contact' }
]
const time = ref('')
const menuOpen = ref(false)
const navigation = useTemplateRef('navigation')
const menuButton = useTemplateRef('menuButton')
const isDesktop = useMediaQuery('(min-width: 768px)')

onClickOutside(navigation, () => {
  menuOpen.value = false
})
watch(isDesktop, () => {
  menuOpen.value = false
})

function closeWithEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) {
    menuOpen.value = false
    menuButton.value?.focus()
  }
}

function tick() {
  time.value = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Edmonton',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(new Date()).replace(/\./g, '').toUpperCase()
}

let clockInterval: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  tick()
  clockInterval = setInterval(tick, 10_000)
})
onBeforeUnmount(() => clearInterval(clockInterval))
</script>

<template>
  <header
    class="v2-header"
    :class="{ 'is-paper': onPaper }"
  >
    <a
      href="#main-content"
      class="skip-link"
    >Skip to content</a>
    <nav
      ref="navigation"
      aria-label="Main navigation"
      class="glass-nav"
      :class="{ 'is-open': menuOpen }"
      @keydown="closeWithEscape"
    >
      <div class="nav-row">
        <a
          href="#top"
          class="nav-brand"
          aria-label="Rysmaan — back to top"
          @click="menuOpen = false"
        >
          <img
            src="/logo-mark.png"
            alt=""
            width="381"
            height="367"
            class="nav-logo"
          >
        </a>
        <div class="desktop-links">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.to"
            :aria-current="activeSection === link.section ? 'location' : undefined"
            class="nav-link"
          >{{ link.label }}</a>
        </div>
        <a
          href="mailto:hello@rysmaan.com"
          class="nav-cta"
        >
          Get in touch <span
            aria-hidden="true"
            class="cta-arrow"
          >↗</span>
        </a>
        <button
          ref="menuButton"
          type="button"
          class="menu-toggle"
          :aria-expanded="menuOpen"
          aria-controls="v2-mobile-menu"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <span /><span />
        </button>
      </div>
      <Transition name="nav-menu">
        <div
          v-if="menuOpen"
          id="v2-mobile-menu"
          class="mobile-menu"
        >
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.to"
            :aria-current="activeSection === link.section ? 'location' : undefined"
            @click="menuOpen = false"
          >{{ link.label }} <span aria-hidden="true">↗</span></a>
          <p>Calgary, Alberta <span>{{ time }} YYC</span></p>
        </div>
      </Transition>
    </nav>
    <p
      class="city-clock"
      aria-label="Current time in Calgary"
    >
      <span
        class="clock-dot"
        aria-hidden="true"
      />
      <span>{{ time || '\u00a0' }}</span><span class="city-code">YYC</span>
    </p>
  </header>
</template>

<style scoped>
.v2-header {
  --nav-ink: #fff;
  --nav-hover: rgb(255 255 255 / 14%);
  position: fixed;
  inset: 16px 20px auto;
  z-index: 50;
  display: flex;
  justify-content: center;
  pointer-events: none;
  color: var(--nav-ink);
}
.glass-nav {
  pointer-events: auto;
  border: 1px solid rgb(255 255 255 / 28%);
  border-radius: 14px;
  background: linear-gradient(110deg, rgb(35 57 61 / 42%), rgb(60 79 83 / 30%));
  box-shadow: 0 2px 8px rgb(5 25 30 / 12%), inset 0 1px rgb(255 255 255 / 10%);
  backdrop-filter: blur(18px) saturate(130%);
  transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease;
}
.nav-row { display: flex; align-items: center; gap: 14px; padding: 6px; }
.nav-brand { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 8px; background: var(--nav-hover); }
.nav-logo { width: 22px; height: auto; filter: brightness(0) invert(1); }
.desktop-links { display: flex; align-items: center; gap: 4px; }
.nav-link { padding: 12px 10px; font-size: 14px; line-height: 20px; border-radius: 7px; transition: background-color 160ms ease; }
.nav-link:hover, .nav-link[aria-current], .nav-brand:hover { background: var(--nav-hover); }
.nav-cta { display: flex; align-items: center; justify-content: center; gap: 14px; min-height: 40px; padding: 0 13px; border: 1px solid rgb(255 255 255 / 16%); border-radius: 8px; background: linear-gradient(110deg, #092b34, #183c43); color: white; font-size: 14px; white-space: nowrap; box-shadow: 0 1px 3px rgb(0 0 0 / 12%); }
.cta-arrow { opacity: 0.8; transition: transform 180ms ease; }
.nav-cta:hover .cta-arrow { transform: translate(1px, -1px); }
.nav-cta:active { transform: scale(0.98); }
.city-clock { position: absolute; right: 8px; top: 19px; display: flex; align-items: center; gap: 9px; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.04em; font-variant-numeric: tabular-nums; }
.city-code { opacity: 0.7; }
.clock-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; opacity: 0.7; }
.is-paper { --nav-ink: #243639; --nav-hover: rgb(19 45 49 / 7%); }
.is-paper .glass-nav { background: rgb(249 248 243 / 90%); border-color: rgb(25 45 45 / 14%); }
.is-paper .nav-logo { filter: brightness(0); }
.menu-toggle { display: none; }
a:focus-visible, button:focus-visible { outline: 2px solid currentColor; outline-offset: 4px; }
.skip-link { position: absolute; left: 0; top: 0; padding: 12px 16px; background: #f5f2ea; color: #142c30; border-radius: 8px; transform: translateY(-150%); pointer-events: auto; }
.skip-link:focus { transform: translateY(0); }
.mobile-menu { display: none; }
@media (max-width: 1100px) { .city-clock { display: none; } }
@media (max-width: 767px) {
  .v2-header { inset: 12px 12px auto; }
  .glass-nav { width: 100%; }
  .nav-row { gap: 8px; }
  .nav-brand { margin-right: auto; }
  .desktop-links { display: none; }
  .menu-toggle { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; width: 44px; height: 44px; cursor: pointer; border-radius: 8px; }
  .menu-toggle:hover { background: var(--nav-hover); }
  .menu-toggle span { width: 16px; height: 1px; background: currentColor; transition: transform 180ms ease; }
  .is-open .menu-toggle span:first-child { transform: translateY(3px) rotate(45deg); }
  .is-open .menu-toggle span:last-child { transform: translateY(-3px) rotate(-45deg); }
  .is-open { background: rgb(25 49 54 / 96%); }
  .is-paper .is-open { background: rgb(249 248 243 / 98%); }
  .mobile-menu { display: block; padding: 8px 16px 16px; border-top: 1px solid rgb(128 145 145 / 25%); }
  .mobile-menu a { display: flex; justify-content: space-between; align-items: center; min-height: 52px; font-size: 16px; }
  .mobile-menu a span { opacity: 0.5; }
  .mobile-menu p { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; margin-top: 12px; font-size: 11px; opacity: 0.7; }
  .nav-menu-enter-active, .nav-menu-leave-active { transition: opacity 150ms ease, transform 150ms ease; }
  .nav-menu-enter-from, .nav-menu-leave-to { opacity: 0; transform: translateY(-4px); }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; }
}
@media (prefers-reduced-transparency: reduce), (prefers-contrast: more) {
  .glass-nav { background: #233d42; backdrop-filter: none; }
  .is-paper .glass-nav { background: #f5f2ea; }
}
</style>
