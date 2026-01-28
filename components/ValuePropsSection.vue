<script setup lang="ts">
const { isModalOpen } = useEarlyAccess()

interface ValueProp {
  title: string
  description: string
  features: string[]
  icon: string
}

const props = defineProps<{
  valueProps: ValueProp[]
}>()
</script>

<template>
  <UContainer>
    <div>
      <div class="text-center mb-16">
        <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
          An intuitive platform to discover vendors, showcase qualifications, and streamline your RFQ process
        </p>
      </div>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div v-for="(prop, index) in valueProps" :key="index" class="flex flex-col p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-x-3 mb-6">
            <div class="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-xl">
              <UIcon :name="prop.icon" class="w-8 h-8 text-primary-500" />
            </div>
            <h2 class="text-3xl font-bold">
              {{ prop.title }}
            </h2>
          </div>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 font-medium">
            {{ prop.description }}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
            <div v-for="(feature, idx) in prop.features" :key="idx" class="flex items-start gap-x-3">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 shrink-0 text-primary-500 mt-0.5" />
              <span class="text-sm text-gray-700 dark:text-gray-300 leading-snug">{{ feature }}</span>
            </div>
          </div>
          
          <div class="mt-10 flex gap-4">
            <UButton
              v-if="index === 0"
              size="lg"
              color="primary"
              class="w-full justify-center"
              @click="isModalOpen = true"
            >
              Get Started as PM
            </UButton>
            <UButton
              v-else
              size="lg"
              variant="outline"
              color="primary"
              class="w-full justify-center"
              @click="isModalOpen = true"
            >
              Join as Vendor
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
