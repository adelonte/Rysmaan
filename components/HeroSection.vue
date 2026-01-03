<script setup lang="ts">
const { isModalOpen } = useEarlyAccess()

const props = defineProps<{
  title: string
  description: string
  cta: {
    primary: { label: string; to: string }
    secondary: { label: string; to: string }
  }
}>()
</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 dark:text-white mb-4">
        {{ title }}
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {{ description }}
      </p>
    </div>
  </div>
</template>
