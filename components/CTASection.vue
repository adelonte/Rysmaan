<script setup lang="ts">
const { isModalOpen } = useEarlyAccess()
</script>

<template>
  <AppSection>
    <AppReveal :y="20">
      <div
        class="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-accent-400/20 blur-3xl"
        />

        <h2 class="mx-auto max-w-2xl text-h2 text-balance text-white">
          Ready to take your company to the next level?
        </h2>
        <p class="mx-auto mt-5 max-w-xl text-lead text-pretty text-primary-100">
          Join project managers and service providers who are modernizing their workflows
          with Rysmaan.
        </p>
        <UButton
          size="lg"
          color="white"
          class="press mt-9 px-6"
          trailing-icon="i-heroicons-arrow-right-20-solid"
          @click="isModalOpen = true"
        >
          Request Early Access
        </UButton>
      </div>
    </AppReveal>
  </AppSection>
</template>
