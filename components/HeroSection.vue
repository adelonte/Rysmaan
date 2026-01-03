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
  <ULandingHero :title="title" class="pb-0 mb-0">
    <template #title>
      <h1 class="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 dark:text-white">
        {{ title }}
      </h1>
    </template>
    <template #description>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {{ description }}
      </p>
    </template>
    <template #default>
      <div class="flex flex-col items-center gap-2 text-center mt-8">
      </div>
    </template>
  </ULandingHero>
</template>
