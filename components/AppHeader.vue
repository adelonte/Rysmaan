<script setup lang="ts">
const { isModalOpen: isEarlyAccessOpen } = useEarlyAccess()

// The header only earns a border and a background once content is behind it.
const isScrolled = ref(false)

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 8
  }

  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b transition-[background-color,border-color] duration-200 ease-out"
    :class="
      isScrolled
        ? 'border-gray-200/80 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80'
        : 'border-transparent bg-white dark:bg-gray-900'
    "
  >
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:rounded-full focus:bg-primary-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
    >
      Skip to content
    </a>

    <nav class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
      <div class="flex h-16 items-center justify-between md:h-[72px]">
        <NuxtLink
          to="/"
          class="press -m-2 flex items-center rounded-lg p-2"
          aria-label="Rysmaan home"
        >
          <AppLogo />
        </NuxtLink>

        <UButton color="primary" class="press px-4" @click="isEarlyAccessOpen = true">
          Get Early Access
        </UButton>
      </div>
    </nav>
  </header>
</template>
