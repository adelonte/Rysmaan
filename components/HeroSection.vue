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
  <div class="py-20 sm:py-28 lg:py-32">
    <div class="text-center max-w-5xl mx-auto px-4">
      <h1 class="text-2xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white mb-6 leading-[1.2]">
        {{ title }}
      </h1>
      <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>
