<script setup lang="ts">
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
  <ULandingHero :title="title" :description="description">
    <template #links>
      <UButton :to="cta.primary.to" size="xl" color="primary">
        {{ cta.primary.label }}
      </UButton>
      <UButton :to="cta.secondary.to" size="xl" variant="outline" color="gray">
        {{ cta.secondary.label }}
      </UButton>
    </template>
    <template #default>
      <div class="relative w-full max-w-5xl mx-auto mt-12">
        <img
          src="/screenshots/landing-hero.png"
          alt="Rysmaan RFQ Platform"
          class="w-full h-auto rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800"
        />
      </div>
    </template>
  </ULandingHero>
</template>
