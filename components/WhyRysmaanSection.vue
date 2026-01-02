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
        title: "Finding the right opportunities is demanding",
        description: "Projects that match a vendor’s expertise, qualifications, and compliance are often hard to discover, limiting growth.",
        icon: "i-heroicons-light-bulb-20-solid"
      },
      {
        title: "Showcase your qualifications and compliance is tedious",
        description: "Updating and showcasing certifications, services, and compliance to the right project managers requires effort.",
        icon: "i-heroicons-star-20-solid"
      },
      {
        title: "Managing quotes and responses is challenging",
        description: "Handling multiple submissions manually increases the risk of errors or missed deadlines.",
        icon: "i-heroicons-pencil-square-20-solid"
      },
      {
        title: "Building a strong reputation takes time",
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
    description="Addressing the core challanges connecting the right projects with the right partners"
  >
    <div class="grid lg:grid-cols-2 gap-24 max-w-7xl mx-auto">
      <!-- Project Managers -->
      <div class="space-y-12">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-briefcase" class="w-7 h-7 text-primary" />
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white">{{ painPoints.pm.title }}</h3>
        </div>
        <div class="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          <div v-for="item in painPoints.pm.items" :key="item.title" class="flex flex-col gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <UIcon :name="item.icon" class="w-7 h-7 text-primary" />
            </div>
            <div>
              <h4 class="font-bold text-lg text-gray-900 dark:text-white leading-tight mb-2">{{ item.title }}</h4>
              <p class="text-gray-500 dark:text-gray-400 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Vendors -->
      <div class="space-y-12">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-building-office" class="w-7 h-7 text-primary" />
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white">{{ painPoints.vendor.title }}</h3>
        </div>
        <div class="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          <div v-for="item in painPoints.vendor.items" :key="item.title" class="flex flex-col gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <UIcon :name="item.icon" class="w-7 h-7 text-primary" />
            </div>
            <div>
              <h4 class="font-bold text-lg text-gray-900 dark:text-white leading-tight mb-2">{{ item.title }}</h4>
              <p class="text-gray-500 dark:text-gray-400 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ULandingSection>
</template>
