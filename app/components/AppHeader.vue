<script setup lang="ts">
import { motion } from 'motion-v'
import type { VariantType } from 'motion-v'

const route = useRoute()
const activeSection = ref<string>()

// The dropdown is generated from the solutions collection rather than written
// out here, so adding a page adds its nav entry and the two cannot drift.
const { data: solutions } = await useAsyncData('solutions-nav', () =>
  queryCollection('solutions')
    .order('order', 'ASC')
    .select('path', 'navLabel', 'tagline', 'icon')
    .all()
)

const items = computed(() => [
  {
    label: 'Solutions',
    active: route.path.startsWith('/solutions'),
    children: (solutions.value ?? []).map(solution => ({
      label: solution.navLabel,
      description: solution.tagline,
      icon: solution.icon,
      to: solution.path
    }))
  },
  {
    // Absolute, because this anchor only exists on the landing page and the
    // solution pages need to travel back to it.
    label: 'Why Rysmaan',
    to: '/#results',
    active: activeSection.value === 'results'
  }
])

let observer: IntersectionObserver | undefined

function observeSections() {
  observer?.disconnect()
  activeSection.value = undefined

  const sections = document.querySelectorAll('#services, #results')
  if (!sections.length) {
    return
  }

  observer = new IntersectionObserver((entries) => {
    const visible = entries.find(e => e.isIntersecting)
    if (visible) {
      activeSection.value = visible.target.id
    } else if (entries.every(e => !e.isIntersecting)) {
      activeSection.value = undefined
    }
  }, { rootMargin: '-50% 0px -50% 0px' })

  sections.forEach(el => observer!.observe(el))
}

// Re-attached on every navigation: the header outlives the page, and the
// sections it watches only exist on the landing page.
onMounted(async () => {
  await nextTick()
  observeSections()
})

watch(() => route.path, async () => {
  await nextTick()
  observeSections()
})

onBeforeUnmount(() => observer?.disconnect())

const variants: Record<string, VariantType | ((custom: unknown) => VariantType)> = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1
  },
  close: (custom: unknown) => {
    const c = custom as number
    return {
      rotate: c === 1 ? 45 : c === 3 ? -45 : 0,
      y: c === 1 ? 6 : c === 3 ? -6 : 0,
      opacity: c === 2 ? 0 : 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  }
}
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink
        to="/"
        class="focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1"
      >
        <AppLogo />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      content-orientation="vertical"
      :ui="{
        // Reka never sets --reka-navigation-menu-viewport-width here, so the
        // panel falls back to w-full of its wrapper — the width of the nav
        // itself, which truncates every label. Sizing the wrapper is what the
        // viewport actually follows.
        viewportWrapper: 'w-80',
        content: 'w-80',
        childLinkDescription: 'text-xs leading-relaxed text-muted'
      }"
    />

    <template #right>
      <UButton
        label="Contact"
        color="neutral"
        variant="ghost"
        class="hidden lg:flex"
        to="mailto:hello@rysmaan.com"
      />
      <UButton
        label="Book a demo"
        class="hidden lg:flex"
        to="/#contact"
      />
    </template>

    <template #toggle="{ open, toggle, ui }">
      <UButton
        size="sm"
        variant="ghost"
        color="neutral"
        square
        :aria-label="open ? 'Close navigation' : 'Open navigation'"
        :aria-expanded="open"
        :class="ui.toggle({ toggleSide: 'right' })"
        @click="toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <motion.line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="1"
            tabindex="-1"
          />
          <motion.line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="2"
            tabindex="-1"
          />
          <motion.line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            :variants="variants"
            :animate="open ? 'close' : 'normal'"
            :custom="3"
            tabindex="-1"
          />
        </svg>
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />

      <div class="mt-4 flex flex-col gap-2">
        <UButton
          label="Contact"
          color="neutral"
          variant="soft"
          to="mailto:hello@rysmaan.com"
          block
        />
        <UButton
          label="Book a demo"
          to="/#contact"
          block
        />
      </div>
    </template>
  </UHeader>
</template>
