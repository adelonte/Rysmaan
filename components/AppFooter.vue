<script setup lang="ts">
const { isModalOpen: isEarlyAccessOpen } = useEarlyAccess()

const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="border-t border-gray-200/80 bg-white dark:border-gray-800 dark:bg-gray-900"
  >
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
      <div
        class="flex flex-col items-center gap-8 py-12 sm:flex-row sm:justify-between sm:gap-6"
      >
        <NuxtLink to="/" class="press -m-2 rounded-lg p-2" aria-label="Rysmaan home">
          <AppLogo />
        </NuxtLink>

        <div class="flex flex-col items-center gap-4 sm:items-end">
          <UButton
            color="primary"
            variant="soft"
            class="press px-4"
            @click="isEarlyAccessOpen = true"
          >
            Request Early Access
          </UButton>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            &copy; {{ year }} Rysmaan. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
