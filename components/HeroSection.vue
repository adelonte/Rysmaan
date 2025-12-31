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
    <template #default>
      <div class="flex flex-col items-center gap-2 text-center -mt-8">
        <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>
    </template>
  </ULandingHero>
</template>
