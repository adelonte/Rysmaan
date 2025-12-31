<script setup lang="ts">
const painPoints = {
  pm: {
    title: "Project Managers",
    items: [
      {
        title: "Finding available qualified vendors is challenging",
        description: "Identifying vendors who are qualified, compliant, and available for your project can delay startup.",
        icon: "i-heroicons-magnifying-glass-20-solid"
      },
      {
        title: "Comparing quotes is time-consuming",
        description: "Reviewing multiple proposals manually can slow decisions and increase the chance of mistakes.",
        icon: "i-heroicons-chart-bar-20-solid"
      },
      {
        title: "Managing communications is scattered",
        description: "Emails, calls, and messages across multiple vendors make coordination difficult.",
        icon: "i-heroicons-chat-bubble-left-right-20-solid"
      },
      {
        title: "Tracking project progress is complicated",
        description: "Following RFQs from submission to award and completion requires constant follow-up.",
        icon: "i-heroicons-clock-20-solid"
      }
    ]
  },
  vendor: {
    title: "Vendors",
    items: [
      {
        title: "Opportunities are hard to discover",
        description: "Finding relevant projects that match your expertise can be a challenge",
        icon: "i-heroicons-light-bulb-20-solid"
      },
      {
        title: "Showcase your capabilities is difficult",
        description: "Demonstrating qualifications and compliance to the right PMs is time-consuming",
        icon: "i-heroicons-star-20-solid"
      },
      {
        title: "Responding and tracking quotes is messy",
        description: "Handling multiple RFQs manually leads to errors and missed opportunities",
        icon: "i-heroicons-pencil-square-20-solid"
      },
      {
        title: "Building a reputation is slow",
        description: "Performance and feedback are often not captured or visible to PMs",
        icon: "i-heroicons-trophy-20-solid"
      }
    ]
  }
}
</script>

<template>
  <ULandingSection
    title="Why Rysmaan Matters"
    description="Addressing the core challenges in project procurement and vendor management"
  >
    <div class="grid lg:grid-cols-2 gap-16">
      <!-- Project Managers -->
      <div class="space-y-8">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-briefcase" class="w-6 h-6 text-primary" />
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ painPoints.pm.title }}</h3>
        </div>
        <div class="grid sm:grid-cols-2 gap-6">
          <div v-for="item in painPoints.pm.items" :key="item.title" class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <UIcon :name="item.icon" class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">{{ item.title }}</h4>
              <p class="text-gray-500 dark:text-gray-400 mt-1">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Vendors -->
      <div class="space-y-8">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-building-office" class="w-6 h-6 text-primary" />
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ painPoints.vendor.title }}</h3>
        </div>
        <div class="grid sm:grid-cols-2 gap-6">
          <div v-for="item in painPoints.vendor.items" :key="item.title" class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <UIcon :name="item.icon" class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">{{ item.title }}</h4>
              <p class="text-gray-500 dark:text-gray-400 mt-1">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ULandingSection>
</template>
