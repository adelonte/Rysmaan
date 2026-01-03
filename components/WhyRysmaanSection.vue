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
    :ui="{ wrapper: 'py-8', title: 'text-3xl sm:text-4xl', description: 'text-lg sm:text-xl' }"
  >
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-32 max-w-7xl mx-auto">
      <!-- Project Managers -->
      <div class="space-y-12">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-briefcase" class="w-10 h-10 text-primary" />
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ painPoints.pm.title }}</h3>
        </div>
        <div class="grid sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-10">
          <div v-for="item in painPoints.pm.items" :key="item.title" class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <UIcon :name="item.icon" class="w-7 h-7 text-primary" />
              </div>
              <h4 class="font-bold text-lg text-gray-900 dark:text-white leading-tight min-h-[3.5rem] flex items-center">{{ item.title }}</h4>
            </div>
            <div>
              <p class="text-gray-500 dark:text-gray-400 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Vendors -->
      <div class="space-y-12">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-building-office" class="w-10 h-10 text-primary" />
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ painPoints.vendor.title }}</h3>
        </div>
        <div class="grid sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-10">
          <div v-for="item in painPoints.vendor.items" :key="item.title" class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <UIcon :name="item.icon" class="w-7 h-7 text-primary" />
              </div>
              <h4 class="font-bold text-lg text-gray-900 dark:text-white leading-tight min-h-[3.5rem] flex items-center">{{ item.title }}</h4>
            </div>
            <div>
              <p class="text-gray-500 dark:text-gray-400 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ULandingSection>
</template>
