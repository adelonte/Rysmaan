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
        title: "Finding the right opportunities is challenging and expensive",
        description: "Projects that match a vendor’s expertise, qualifications, and compliance are often hard to discover, limiting growth.",
        icon: "i-heroicons-light-bulb-20-solid"
      },
      {
        title: "Showcase your qualifications and compliance and keeping them updated is tedious",
        description: "Presenting certifications, services, and compliance consistently to the right project managers takes extra effort.",
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
