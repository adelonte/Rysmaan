<script setup lang="ts">
interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  quote: string
}

const props = defineProps<{
  testimonials: Testimonial[]
}>()
</script>

<template>
  <UContainer>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted by Project Managers and Vendors
        </h2>
      </div>
      <div class="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <template #header>
            <p class="text-gray-700 dark:text-gray-300">
              "{{ testimonial.quote }}"
            </p>
          </template>

          <div class="flex items-center gap-3">
            <UAvatar :src="testimonial.avatar" :alt="testimonial.name" size="md" />
            <div>
              <div class="font-semibold">
                {{ testimonial.name }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ testimonial.role }}, {{ testimonial.company }}
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
