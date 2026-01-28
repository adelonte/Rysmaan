<script setup lang="ts">
interface Step {
  title: string
  description: string
  icon: string
}

interface WorkflowData {
  title: string
  steps: Step[]
}

interface HowItWorksData {
  pm: WorkflowData
  vendor: WorkflowData
}

const props = defineProps<{
  howItWorks: HowItWorksData
}>()
</script>

<template>
  <UContainer>
    <div>
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          How It Works
        </h2>
      </div>

      <div class="space-y-16">
        <!-- PM Workflow -->
        <div class="relative">
          <h3 class="mb-10 text-center text-2xl font-bold text-gray-900 dark:text-white">
            {{ howItWorks.pm.title }}
          </h3>
          <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 relative">
            <div
              v-for="(step, index) in howItWorks.pm.steps"
              :key="index"
              class="relative flex flex-col items-center text-center group"
            >
              <div class="flex w-14 h-14 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors z-10 border border-gray-100 dark:border-gray-800 group-hover:border-primary-100 dark:group-hover:border-primary-800">
                <UIcon :name="step.icon" class="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </div>
              <div class="mt-6">
                <h4 class="text-lg font-bold mb-2">
                  {{ step.title }}
                </h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Vendor Workflow -->
        <div class="relative">
          <h3 class="mb-10 text-center text-2xl font-bold text-gray-900 dark:text-white">
            {{ howItWorks.vendor.title }}
          </h3>
          <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 relative">
            <div
              v-for="(step, index) in howItWorks.vendor.steps"
              :key="index"
              class="relative flex flex-col items-center text-center group"
            >
              <div class="flex w-14 h-14 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors z-10 border border-gray-100 dark:border-gray-800 group-hover:border-primary-100 dark:group-hover:border-primary-800">
                <UIcon :name="step.icon" class="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </div>
              <div class="mt-6">
                <h4 class="text-lg font-bold mb-2">
                  {{ step.title }}
                </h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
