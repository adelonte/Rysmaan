<script setup lang="ts">
const painPoints = {
  pm: {
    title: "Project Managers",
    items: [
      {
        title: "Finding Available Qualified Vendors",
        description: "Identifying vendors who are qualified, compliant, and available for your project can delay startup.",
        icon: "i-heroicons-magnifying-glass-20-solid"
      },
      {
        title: "Comparing Quotes",
        description: "Reviewing multiple proposals manually can slow decisions and increase the chance of mistakes.",
        icon: "i-heroicons-chart-bar-20-solid"
      },
      {
        title: "Managing Multiple Communications",
        description: "Emails, calls, and messages across multiple vendors make coordination difficult.",
        icon: "i-heroicons-chat-bubble-left-right-20-solid"
      },
      {
        title: "Tracking Project Progress",
        description: "Following RFQs from submission to award and completion requires constant follow-up.",
        icon: "i-heroicons-clock-20-solid"
      }
    ]
  },
  vendor: {
    title: "Vendors",
    items: [
      {
        title: "Finding the Right Opportunities",
        description: "Projects that match a vendor’s expertise, qualifications, and compliance are often hard to discover, limiting growth.",
        icon: "i-heroicons-light-bulb-20-solid"
      },
      {
        title: "Showcasing Your Qualifications/Compliance",
        description: "Updating and showcasing certifications, services, and compliance to the right project managers requires effort.",
        icon: "i-heroicons-star-20-solid"
      },
      {
        title: "Managing Multiple Quotes",
        description: "Handling multiple submissions manually increases the risk of errors or missed deadlines.",
        icon: "i-heroicons-pencil-square-20-solid"
      },
      {
        title: "Building Strong Reputation",
        description: "Tracking performance and feedback from completed projects is often inconsistent, limiting visibility to new clients.",
        icon: "i-heroicons-trophy-20-solid"
      }
    ]
  }
}
</script>

<template>
  <ULandingSection
    title="Why Rysmaan Matters"
    description="Addressing the core challenges connecting the right projects with the right partners"
    :ui="{ wrapper: 'py-20 sm:py-24', title: 'text-3xl sm:text-4xl', description: 'text-lg sm:text-xl' }"
    v-bind="$attrs"
  >
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
      <!-- Project Managers -->
      <div class="bg-white dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
        <div class="flex items-center gap-3 mb-8">
          <UIcon name="i-heroicons-briefcase" class="w-8 h-8 text-primary" />
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ painPoints.pm.title }}</h3>
        </div>
        <div class="grid sm:grid-cols-2 gap-6">
          <div v-for="item in painPoints.pm.items" :key="item.title" class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <UIcon :name="item.icon" class="w-5 h-5 text-primary shrink-0" />
              <h4 class="font-bold text-base text-gray-900 dark:text-white leading-tight">{{ item.title }}</h4>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- Vendors -->
      <div class="bg-white dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
        <div class="flex items-center gap-3 mb-8">
          <UIcon name="i-heroicons-building-office" class="w-10 h-10 text-primary" />
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ painPoints.vendor.title }}</h3>
        </div>
        <div class="grid sm:grid-cols-2 gap-6">
          <div v-for="item in painPoints.vendor.items" :key="item.title" class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <UIcon :name="item.icon" class="w-5 h-5 text-primary shrink-0" />
              <h4 class="font-bold text-base text-gray-900 dark:text-white leading-tight">{{ item.title }}</h4>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </ULandingSection>
</template>
