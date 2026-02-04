<script setup lang="ts">
const isSignInOpen = ref(false)
const { isModalOpen: isEarlyAccessOpen } = useEarlyAccess()
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
    <nav class="container px-4 md:px-8 xl:px-16 sm:mx-auto">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img src="/logo.png" alt="Rysmaan Logo" class="h-8 mix-blend-multiply brightness-[1.1] contrast-[1.1] dark:hidden" />
            <img src="/logo.png" alt="Rysmaan Logo" class="hidden dark:block h-8 mix-blend-screen brightness-200 contrast-200" />
          </NuxtLink>
        </div>

        <div class="flex items-center gap-4">
          <UButton variant="ghost" color="gray" size="sm" class="font-medium" @click="isSignInOpen = true">
            Sign In
          </UButton>
          <UButton color="primary" size="sm" class="font-semibold px-4 rounded-full" @click="isEarlyAccessOpen = true">
            Get Early Access
          </UButton>
          <UColorModeButton size="sm" />
        </div>
      </div>
    </nav>
    <SignInModal v-model:is-open="isSignInOpen" />
  </header>
</template>
