<script setup lang="ts">
const isSignInOpen = ref(false)
const { isModalOpen: isEarlyAccessOpen } = useEarlyAccess()

const links = [
  { label: 'Features', to: '#features' },
  { label: 'How It Works', to: '#how-it-works' },
  { label: 'Testimonials', to: '#testimonials' }
]
</script>

<template>
  <header class="h-20 flex items-center bg-white border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-50">
    <nav class="flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/logo.png" alt="Rysmaan Logo" class="h-14 w-auto mix-blend-multiply brightness-[1.1] contrast-[1.1] dark:hidden" />
          <img src="/logo.png" alt="Rysmaan Logo" class="hidden dark:block h-14 w-auto mix-blend-screen brightness-200 contrast-200" />
        </NuxtLink>
      </div>

      <div class="flex items-center gap-6">
        <UButton variant="ghost" color="gray" size="md" class="font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" @click="isSignInOpen = true">
          Sign In
        </UButton>
        <UButton color="primary" size="md" class="font-semibold px-6 rounded-full" @click="isEarlyAccessOpen = true">
          Get Early Access
        </UButton>
        <UColorModeButton />
      </div>
    </nav>
    <SignInModal v-model:is-open="isSignInOpen" />
  </header>
</template>
