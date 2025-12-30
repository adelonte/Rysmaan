<script setup lang="ts">
const isOpen = defineModel<boolean>('isOpen', { default: false })

const state = reactive({
  name: '',
  email: '',
  company: '',
  location: '',
  role: '',
  interestType: '',
  phone: ''
})

const isSubmitted = ref(false)
const loading = ref(false)

async function onSubmit() {
  loading.value = true
  try {
    await $fetch('/api/early-access', {
      method: 'POST',
      body: state
    })
    isSubmitted.value = true
  } catch (error) {
    console.error('Submission failed', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UModal v-model="isOpen">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ isSubmitted ? 'Registration Successful' : 'Get Early Access' }}
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
        </div>
      </template>

      <div v-if="!isSubmitted" class="p-4">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Fill out the form below to join our early access program.
        </p>

        <UForm :state="state" @submit="onSubmit">
          <UFormGroup label="Name" name="name" required class="mb-4">
            <UInput v-model="state.name" placeholder="John Doe" required />
          </UFormGroup>

          <UFormGroup label="Email" name="email" required class="mb-4">
            <UInput v-model="state.email" type="email" placeholder="john@example.com" required />
          </UFormGroup>

          <UFormGroup label="Company/Organization" name="company" required class="mb-4">
            <UInput v-model="state.company" placeholder="ACME Inc." required />
          </UFormGroup>

          <UFormGroup label="Location" name="location" required class="mb-4">
            <UInput v-model="state.location" placeholder="City, Country" required />
          </UFormGroup>

          <UFormGroup label="Role/Position (Optional)" name="role" class="mb-4">
            <UInput v-model="state.role" placeholder="Product Manager" />
          </UFormGroup>

          <UFormGroup label="Interest Type (Optional)" name="interestType" class="mb-4">
            <USelect v-model="state.interestType" :options="['Individual', 'Small Business', 'Enterprise', 'Partner']" placeholder="Select interest" />
          </UFormGroup>

          <UFormGroup label="Phone (Optional)" name="phone" class="mb-4">
            <UInput v-model="state.phone" type="tel" placeholder="+1 (555) 000-0000" />
          </UFormGroup>

          <div class="flex justify-end gap-3 mt-6">
            <UButton variant="ghost" color="gray" @click="isOpen = false">Cancel</UButton>
            <UButton type="submit" color="primary" :loading="loading">Submit</UButton>
          </div>
        </UForm>
      </div>

      <div v-else class="p-8 text-center">
        <UIcon name="i-heroicons-check-circle" class="w-16 h-16 text-green-500 mx-auto mb-4" />
        <p class="text-lg font-medium text-gray-900 dark:text-white mb-2">
          Thank you for your interest!
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          We’ll keep you updated with the latest news and opportunities. We respect your privacy. Your information will never be shared and you can unsubscribe anytime.
        </p>
        <UButton class="mt-6" color="primary" @click="isOpen = false">Close</UButton>
      </div>
    </UCard>
  </UModal>
</template>