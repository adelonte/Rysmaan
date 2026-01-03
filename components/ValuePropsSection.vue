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
    <div class="py-24 sm:py-32">
      <div class="text-center mb-16">
        <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
          An intuitive platform to discover vendors, showcase qualifications, and streamline your RFQ process
        </p>
      </div>
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2 mb-0">
        <div v-for="(prop, index) in valueProps" :key="index" class="flex flex-col">
          <div class="flex items-center gap-x-3">
            <UIcon :name="prop.icon" class="w-8 h-8 text-primary-500" />
            <h2 class="text-3xl font-bold">
              {{ prop.title }}
            </h2>
          </div>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {{ prop.description }}
          </p>
          <ul class="mt-8 space-y-3 flex-grow">
            <li v-for="(feature, idx) in prop.features" :key="idx" class="flex items-start gap-x-3">
              <UIcon name="i-heroicons-check" class="w-5 h-5 shrink-0 text-primary-500" />
              <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
            </li>
          </ul>
          
          <div class="mt-10">
            <UButton
              v-if="index === 0"
              size="lg"
              color="primary"
              @click="isModalOpen = true"
            >
              Get Started as Project Manager
            </UButton>
            <UButton
              v-else
              size="lg"
              variant="outline"
              color="primary"
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
