<script setup lang="ts">
const { isModalOpen } = useEarlyAccess()

interface CTAData {
  title: string
  description: string
  primary: { label: string }
  secondary?: { label: string; to: string }
}

const props = defineProps<{
  cta: CTAData
}>()
</script>

<template>
  <ULandingCTA :title="cta.title" :description="cta.description" :ui="{ title: 'text-3xl sm:text-4xl', description: 'text-lg sm:text-xl' }">
    <template #links>
      <UButton size="xl" color="primary" @click="isModalOpen = true">
        {{ cta.primary.label }}
      </UButton>
      <UButton v-if="cta.secondary" :to="cta.secondary.to" size="xl" variant="outline" color="gray">
        {{ cta.secondary.label }}
      </UButton>
    </template>
  </ULandingCTA>
</template>
