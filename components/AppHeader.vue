<script setup lang="ts">
const links = [
  { label: 'Features', to: '#features' },
  { label: 'How It Works', to: '#how-it-works' },
  { label: 'Testimonials', to: '#testimonials' }
]
</script>

<template>
  <UHeader :ui="{ wrapper: 'h-32 flex items-center', container: 'flex items-center justify-between gap-3 h-full max-w-full px-4' }">
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="/logo.png" alt="Rysmaan Logo" class="h-24 w-auto" />
      </NuxtLink>
    </template>

    <template #center>
      <!-- Empty template to override default centering -->
      <div />
    </template>

    <template #right>
      <div class="flex items-center gap-3">
        <UButton to="/auth/login" variant="ghost" color="gray">
          Sign In
        </UButton>
        <UButton to="/auth/signup" color="primary">
          Get Started
        </UButton>
        <UColorModeButton />
      </div>
    </template>
  </UHeader>
</template>
