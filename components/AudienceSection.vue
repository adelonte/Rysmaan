<script setup lang="ts">
const cards = [
  {
    icon: 'i-heroicons-briefcase',
    title: 'Purpose-built for Project Managers',
    description:
      "Rysmaan was developed to empower project managers in small- to mid-sized firms to do their best work. Every feature is intentionally designed to help teams focus on what they do best: building on budget/schedule projects."
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Purpose-built for Service Providers',
    description:
      'Rysmaan enables you to showcase your expertise and capabilities to those who looking for it at the right time. It is designed to help your team to focus on what really matters: delivering quality work.'
  },
  {
    icon: 'i-heroicons-cpu-chip',
    title: 'Meticulously crafted',
    description:
      "Gone are the days of clunky, slow, and bloated tools. Rysmaan is snappy, speedy, and a pleasure to use. It's intuitive and easy to learn, but flexible enough to adapt to your team's unique way of working."
  }
]
</script>

<template>
  <AppSection tone="muted">
    <!-- Heading and supporting copy sit side by side so the section header
         spans the same measure as the cards beneath it. -->
    <div class="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
      <div class="lg:col-span-6">
        <AppReveal as="p" class="text-eyebrow">
          Who it's for
        </AppReveal>
        <AppReveal
          :delay="60"
          as="h2"
          class="mt-4 text-h2 text-balance text-gray-900 dark:text-white"
        >
          Made for Project Managers and Service Providers
        </AppReveal>
      </div>
      <AppReveal
        :delay="120"
        as="p"
        class="text-lead text-pretty text-gray-500 lg:col-span-6 dark:text-gray-400"
      >
        Rysmaan is built by engineers who have managed real-world projects and faced the
        challenge of finding qualified vendors. It provides practical tools that
        effectively streamline workflows and strengthen your teams.
      </AppReveal>
    </div>

    <ul class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      <AppReveal
        v-for="(card, index) in cards"
        :key="card.title"
        as="li"
        :delay="index * 70"
        class="flex"
      >
        <div
          class="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/60"
        >
          <span
            class="flex size-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400"
          >
            <UIcon :name="card.icon" class="size-5" />
          </span>
          <h3 class="mt-5 text-h4 text-gray-900 dark:text-white">
            {{ card.title }}
          </h3>
          <p class="mt-3 text-body text-pretty text-gray-500 dark:text-gray-400">
            {{ card.description }}
          </p>
        </div>
      </AppReveal>
    </ul>
  </AppSection>
</template>
