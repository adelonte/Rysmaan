<script setup lang="ts">
const { isModalOpen } = useEarlyAccess()
</script>

<template>
  <div>
    <EarlyAccessModal v-model:is-open="isModalOpen" />

    <HeroSection />
    <AudienceSection />
    <PlatformSection />
    <CTASection />
  </div>
</template>
