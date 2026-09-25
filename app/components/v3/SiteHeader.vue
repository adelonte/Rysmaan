<script setup lang="ts">
const { v3: site } = useAppConfig()
const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement>()
function closeMenu() {
  menuOpen.value = false
  menuButton.value?.focus()
}
const links = [
  { label: 'Overview', to: '#overview' },
  { label: 'Results', to: '#unlocks' },
  { label: 'Your data', to: '#data' }
]
</script>

<template>
  <header
    class="site-header"
    @keydown.esc.prevent="closeMenu"
  >
    <div class="section-shell flex h-18 items-center justify-between gap-4">
      <a
        href="#top"
        aria-label="Rysmaan home"
        class="flex items-center gap-2.5"
        @click="menuOpen = false"
      >
        <V3RysmaanMark class="size-8" />
        <span class="text-[23px] font-semibold tracking-[-0.06em]">rysmaan</span>
      </a>
      <nav
        aria-label="Main navigation"
        class="hidden md:block"
      >
        <ul class="flex items-center gap-7 text-sm text-toned">
          <li
            v-for="link in links"
            :key="link.to"
          >
            <a
              :href="link.to"
              class="nav-link"
            >{{ link.label }}</a>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-2">
        <UButton
          :to="site.bookingUrl"
          label="Discuss a pilot"
          trailing-icon="i-lucide-arrow-up-right"
          color="neutral"
          variant="outline"
          class="secondary-button hidden bg-default text-default hover:bg-muted sm:inline-flex"
        />
        <button
          ref="menuButton"
          type="button"
          class="flex size-11 items-center justify-center rounded-lg md:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-navigation"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <UIcon
            :name="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            class="size-5"
          />
        </button>
      </div>
    </div>
    <nav
      v-show="menuOpen"
      id="mobile-navigation"
      aria-label="Mobile navigation"
      class="border-t border-default bg-default px-5 py-3 md:hidden"
    >
      <a
        v-for="link in links"
        :key="link.to"
        :href="link.to"
        class="block rounded-lg px-2 py-3 text-sm text-toned"
        @click="menuOpen = false"
      >{{ link.label }}</a>
      <V3GradientButton
        :to="site.bookingUrl"
        label="Discuss a pilot"
        class="mt-2 w-full justify-center sm:hidden"
        @click="menuOpen = false"
      />
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgb(255 255 255 / 0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--ui-border);
}
.nav-link {
  transition: color 160ms ease;
}
@media (hover: hover) and (pointer: fine) {
  .nav-link:hover {
    color: var(--color-brand-600);
  }
}
</style>
