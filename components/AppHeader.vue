<script setup lang="ts">
const links = [
  { label: 'Features', to: '#features' },
  { label: 'How It Works', to: '#how-it-works' },
  { label: 'Testimonials', to: '#testimonials' }
]
</script>

<template>
  <UHeader>
    <template #logo>
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="/logo.png" alt="Rysmaan Logo" class="h-8 w-auto" />
      </NuxtLink>
    </template>

    <template #right>
      <UButton to="/auth/login" variant="ghost" color="gray">
        Sign In
      </UButton>
      <UButton to="/auth/signup" color="primary">
        Get Started
      </UButton>
      <UColorModeButton />
    </template>
  </UHeader>
</template>
