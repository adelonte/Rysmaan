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
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          How It Works
        </h2>
      </div>

      <div class="mt-16 space-y-16">
        <!-- PM Workflow -->
        <div>
          <h3 class="mb-8 text-center text-2xl font-bold">
            {{ howItWorks.pm.title }}
          </h3>
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="(step, index) in howItWorks.pm.steps"
              :key="index"
              class="relative flex flex-col items-center text-center"
            >
              <div class="flex w-16 h-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <UIcon :name="step.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div class="mt-4">
                <div class="mb-2 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  Step {{ index + 1 }}
                </div>
                <h4 class="text-xl font-semibold">
                  {{ step.title }}
                </h4>
                <p class="mt-2 text-base text-gray-600 dark:text-gray-400">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Vendor Workflow -->
        <div>
          <h3 class="mb-8 text-center text-2xl font-bold">
            {{ howItWorks.vendor.title }}
          </h3>
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="(step, index) in howItWorks.vendor.steps"
              :key="index"
              class="relative flex flex-col items-center text-center"
            >
              <div class="flex w-16 h-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <UIcon :name="step.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div class="mt-4">
                <div class="mb-2 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  Step {{ index + 1 }}
                </div>
                <h4 class="text-xl font-semibold">
                  {{ step.title }}
                </h4>
                <p class="mt-2 text-base text-gray-600 dark:text-gray-400">
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
