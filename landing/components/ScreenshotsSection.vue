<script setup lang="ts">
interface Screenshot {
  src: string
  alt: string
  title: string
  description: string
}

const screenshots: Screenshot[] = [
  {
    src: '/screenshots/pm-dashboard.png',
    alt: 'Project Manager Dashboard',
    title: 'Dashboard Overview',
    description: 'Get a complete view of your RFQs, quotes, and activities at a glance'
  },
  {
    src: '/screenshots/rfqs-list.png',
    alt: 'RFQ List View',
    title: 'Manage All Your RFQs',
    description: 'Filter, search, and organize your quote requests with powerful tools'
  },
  {
    src: '/screenshots/rfq-detail.png',
    alt: 'RFQ Detail Page',
    title: 'Detailed RFQ View',
    description: 'Track quotes, manage deadlines, and award projects with ease'
  }
]
</script>

<template>
  <UContainer>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          See Rysmaan in Action
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          A powerful, intuitive platform designed to streamline your procurement process
        </p>
      </div>

      <div class="space-y-24">
        <div
          v-for="(screenshot, index) in screenshots"
          :key="index"
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
        >
          <div :class="index % 2 === 1 ? 'lg:order-2' : ''">
            <h3 class="text-2xl font-bold mb-4">{{ screenshot.title }}</h3>
            <p class="text-lg text-gray-600 dark:text-gray-400">
              {{ screenshot.description }}
            </p>
          </div>
          <div :class="index % 2 === 1 ? 'lg:order-1' : ''">
            <img
              :src="screenshot.src"
              :alt="screenshot.alt"
              class="rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
