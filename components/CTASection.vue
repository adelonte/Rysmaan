<script setup lang="ts">
interface CTAData {
  title: string
  description: string
  primary: { label: string; to: string }
  secondary?: { label: string; to: string }
}

const props = defineProps<{
  cta: CTAData
}>()
</script>

<template>
  <ULandingCTA :title="cta.title" :description="cta.description">
    <template #links>
      <UButton :to="cta.primary.to" size="xl" color="primary">
        {{ cta.primary.label }}
      </UButton>
      <UButton v-if="cta.secondary" :to="cta.secondary.to" size="xl" variant="outline" color="gray">
        {{ cta.secondary.label }}
      </UButton>
    </template>
  </ULandingCTA>
</template>
