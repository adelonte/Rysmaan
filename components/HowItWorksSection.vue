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

      <div class="space-y-24">
        <!-- PM Workflow -->
        <div class="relative">
          <div class="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 hidden lg:block -translate-y-12"></div>
          <h3 class="mb-12 text-center text-2xl font-bold relative inline-block left-1/2 -translate-x-1/2 px-4 bg-white dark:bg-gray-900">
            {{ howItWorks.pm.title }}
          </h3>
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
            <div
              v-for="(step, index) in howItWorks.pm.steps"
              :key="index"
              class="relative flex flex-col items-center text-center group"
            >
              <div class="flex w-16 h-16 items-center justify-center rounded-2xl bg-primary-50 dark:bg-primary-900/50 group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors z-10 border border-primary-100 dark:border-primary-800">
                <UIcon :name="step.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div class="mt-6">
                <div class="mb-1 text-[10px] font-bold uppercase tracking-wider text-primary-500">
                  Step 0{{ index + 1 }}
                </div>
                <h4 class="text-lg font-bold mb-2">
                  {{ step.title }}
                </h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-snug">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Vendor Workflow -->
        <div class="relative">
          <div class="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 hidden lg:block -translate-y-12"></div>
          <h3 class="mb-12 text-center text-2xl font-bold relative inline-block left-1/2 -translate-x-1/2 px-4 bg-white dark:bg-gray-900">
            {{ howItWorks.vendor.title }}
          </h3>
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
            <div
              v-for="(step, index) in howItWorks.vendor.steps"
              :key="index"
              class="relative flex flex-col items-center text-center group"
            >
              <div class="flex w-16 h-16 items-center justify-center rounded-2xl bg-primary-50 dark:bg-primary-900/50 group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors z-10 border border-primary-100 dark:border-primary-800">
                <UIcon :name="step.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div class="mt-6">
                <div class="mb-1 text-[10px] font-bold uppercase tracking-wider text-primary-500">
                  Step 0{{ index + 1 }}
                </div>
                <h4 class="text-lg font-bold mb-2">
                  {{ step.title }}
                </h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-snug">
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
