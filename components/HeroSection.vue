<script setup lang="ts">
const { isModalOpen } = useEarlyAccess()
</script>

<template>
  <AppSection flush class="relative isolate overflow-hidden">
    <!-- Brand wash behind the product shot. Static: it exists to give the
         screenshot something to sit on, not to attract attention. -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-56 -z-10 mx-auto h-[420px] w-full max-w-5xl rounded-[50%] bg-gradient-to-r from-primary-500/15 via-accent-500/15 to-primary-500/15 blur-3xl dark:from-primary-500/20 dark:via-accent-500/10 dark:to-primary-500/20"
    />

    <div class="pt-16 sm:pt-20 lg:pt-24">
      <div class="mx-auto max-w-3xl text-center">
        <AppReveal>
          <span
            class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-[13px] font-medium text-gray-600 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70 dark:text-gray-300"
          >
            <span class="size-1.5 rounded-full bg-accent-500" />
            Early access is open
          </span>
        </AppReveal>

        <AppReveal
          :delay="60"
          as="h1"
          class="mt-6 text-display text-balance text-gray-900 dark:text-white"
        >
          <span class="text-primary-500 dark:text-primary-400">Streamlined</span>
          Procurement Platform for Engineering Firms and Service Providers
        </AppReveal>

        <AppReveal
          :delay="120"
          as="p"
          class="mx-auto mt-6 max-w-2xl text-lead text-pretty text-gray-500 dark:text-gray-400"
        >
          Meet the next-generation system for modern project management and project
          discovery—designed to take your company to the next level.
        </AppReveal>

        <AppReveal
          :delay="180"
          class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <UButton
            size="lg"
            color="primary"
            class="press w-full justify-center px-6 sm:w-auto"
            trailing-icon="i-heroicons-arrow-right-20-solid"
            @click="isModalOpen = true"
          >
            See it in action
          </UButton>
          <UButton
            size="lg"
            color="white"
            to="#platform"
            class="press w-full justify-center px-5 sm:w-auto"
          >
            Explore the platform
          </UButton>
        </AppReveal>
      </div>

      <AppReveal :delay="260" :y="28" class="mt-16 sm:mt-20">
        <div
          class="mx-auto max-w-6xl rounded-2xl border border-gray-200/80 bg-white/60 p-1.5 shadow-frame backdrop-blur dark:border-gray-800 dark:bg-gray-900/60"
        >
          <img
            src="/screenshots/Dashboard.png"
            alt="The Rysmaan dashboard, showing active projects and their procurement status"
            class="block w-full rounded-xl"
            width="3254"
            height="1936"
            fetchpriority="high"
            decoding="async"
          >
        </div>
      </AppReveal>
    </div>
  </AppSection>
</template>
