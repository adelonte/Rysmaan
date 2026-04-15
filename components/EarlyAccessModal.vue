<script setup lang="ts">
const isOpen = defineModel<boolean>('isOpen', { default: false })

const state = reactive({
  name: '',
  company: '',
  email: ''
})

const validate = (state: any) => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Name is required' })
  if (!state.company) errors.push({ path: 'company', message: 'Company is required' })
  if (!state.email) {
    errors.push({ path: 'email', message: 'Email is required' })
  }
  return errors
}

const isSubmitted = ref(false)
const loading = ref(false)
const submitError = ref<string | null>(null)

watch(isOpen, (open) => {
  if (open) {
    submitError.value = null
    return
  }
  isSubmitted.value = false
  loading.value = false
  Object.assign(state, { name: '', company: '', email: '' })
})

async function onSubmit() {
  submitError.value = null
  loading.value = true
  try {
    await $fetch('/api/early-access', {
      method: 'POST',
      body: {
        name: state.name.trim(),
        company: state.company.trim(),
        email: state.email.trim().toLowerCase()
      }
    })
    isSubmitted.value = true
  } catch (err: unknown) {
    const e = err as {
      status?: number
      statusCode?: number
      response?: { status?: number }
      data?: { statusCode?: number }
    }
    const status =
      e.status ?? e.statusCode ?? e.response?.status ?? e.data?.statusCode ?? 0
    if (status === 409) {
      submitError.value = 'This email is already on the list.'
    } else if (status === 503) {
      submitError.value = 'Sign-up is not configured yet. Please try again later.'
    } else {
      submitError.value = 'Something went wrong. Please try again in a moment.'
    }
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
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ isSubmitted ? 'Request Sent' : 'Request Early Access' }}
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark" class="-my-1" @click="isOpen = false" />
        </div>
      </template>

      <div v-if="!isSubmitted">
        <UForm :state="state" :validate="validate" class="space-y-4 p-4" @submit="onSubmit">
          <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" placeholder="John Doe" size="lg" />
          </UFormGroup>

          <UFormGroup label="Company" name="company">
            <UInput v-model="state.company" placeholder="ACME Inc." size="lg" />
          </UFormGroup>

          <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" type="email" placeholder="you@example.com" size="lg" />
          </UFormGroup>

          <UAlert v-if="submitError" color="red" variant="soft" :title="submitError" />

          <div class="pt-4">
            <UButton type="submit" block size="xl" color="primary" :loading="loading">
              Submit Request
            </UButton>
          </div>
        </UForm>
      </div>

      <div v-else class="p-8 text-center">
        <UIcon name="i-heroicons-check-circle" class="w-16 h-16 text-green-500 mx-auto mb-4" />
        <p class="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Request Received
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Thank you for your interest! We'll review your request and get back to you shortly via email.
        </p>
        <UButton class="mt-6" color="primary" block size="lg" @click="isOpen = false">
          Close
        </UButton>
      </div>
    </UCard>
  </UModal>
</template>
