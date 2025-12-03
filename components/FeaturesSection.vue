<script setup lang="ts">
interface Feature {
  title: string
  description: string
  icon: string
}

interface FeaturesData {
  title: string
  description: string
  items: Feature[]
}

const props = defineProps<{
  features: FeaturesData
}>()
</script>

<template>
  <UContainer>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          {{ features.title }}
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          {{ features.description }}
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ULandingCard
          v-for="(feature, index) in features.items"
          :key="index"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </div>
  </UContainer>
</template>
