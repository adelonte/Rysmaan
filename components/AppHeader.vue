<script setup lang="ts">
const links = [
  { label: 'Features', to: '#features' },
  { label: 'How It Works', to: '#how-it-works' },
  { label: 'Testimonials', to: '#testimonials' }
]
</script>

<template>
  <header class="h-32 flex items-center bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
    <nav class="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8">
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Rysmaan Logo" class="h-24 w-auto mix-blend-multiply brightness-[1.1] contrast-[1.1] dark:hidden" />
          <img src="/logo.png" alt="Rysmaan Logo" class="hidden dark:block h-24 w-auto mix-blend-screen brightness-200 contrast-200" />
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <UButton to="/auth/login" variant="ghost" color="gray">
          Sign In
        </UButton>
        <UButton to="/auth/signup" color="primary">
          Get Started
        </UButton>
        <UColorModeButton />
      </div>
    </nav>
  </header>
</template>
