<script setup lang="ts">
const isOpen = defineModel<boolean>('isOpen', { default: false })

const state = reactive({
  name: '',
  company: '',
  email: ''
})

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const validate = (values: typeof state) => {
  const errors: { path: string; message: string }[] = []

  if (!values.name.trim()) errors.push({ path: 'name', message: 'Name is required' })
  if (!values.company.trim()) {
    errors.push({ path: 'company', message: 'Company is required' })
  }
  if (!values.email.trim()) {
    errors.push({ path: 'email', message: 'Email is required' })
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.push({ path: 'email', message: 'Enter a valid email address' })
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
  <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-md' }">
    <div class="p-6 sm:p-7">
      <div class="flex items-start justify-between gap-4">
        <h2 class="text-h4 text-gray-900 dark:text-white">
          {{ isSubmitted ? 'Request received' : 'Request early access' }}
        </h2>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          size="xs"
          class="press -m-1"
          aria-label="Close"
          @click="isOpen = false"
        />
      </div>

      <!-- Blur bridges the two states so the swap reads as one object changing,
           rather than two panels crossing over each other. -->
      <Transition name="swap" mode="out-in">
        <!-- novalidate: the browser's native bubble would fire before the form's
             own validation and swallow it. Inline, styled errors instead. -->
        <UForm
          v-if="!isSubmitted"
          key="form"
          novalidate
          :state="state"
          :validate="validate"
          :validate-on="['submit']"
          class="mt-6 space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" placeholder="Jane Doe" size="lg" autofocus />
          </UFormGroup>

          <UFormGroup label="Company" name="company">
            <UInput v-model="state.company" placeholder="ACME Inc." size="lg" />
          </UFormGroup>

          <UFormGroup label="Email" name="email">
            <UInput
              v-model="state.email"
              type="email"
              autocomplete="email"
              placeholder="you@example.com"
              size="lg"
            />
          </UFormGroup>

          <UAlert
            v-if="submitError"
            color="red"
            variant="soft"
            icon="i-heroicons-exclamation-triangle"
            :title="submitError"
          />

          <UButton
            type="submit"
            block
            size="lg"
            color="primary"
            class="press !mt-6"
            :loading="loading"
          >
            {{ loading ? 'Sending' : 'Submit request' }}
          </UButton>
        </UForm>

        <div v-else key="done" class="mt-6 text-center">
          <span
            class="mx-auto flex size-12 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400"
          >
            <UIcon name="i-heroicons-check-20-solid" class="size-6" />
          </span>
          <p class="mt-5 text-body text-pretty text-gray-500 dark:text-gray-400">
            Thank you for your interest. We'll review your request and get back to you
            shortly via email.
          </p>
          <UButton
            block
            size="lg"
            color="gray"
            variant="soft"
            class="press mt-6"
            @click="isOpen = false"
          >
            Close
          </UButton>
        </div>
      </Transition>
    </div>
  </UModal>
</template>

<style scoped>
.swap-enter-active {
  transition:
    opacity 200ms var(--ease-out),
    filter 200ms var(--ease-out);
}

.swap-leave-active {
  transition:
    opacity 120ms var(--ease-out),
    filter 120ms var(--ease-out);
}

.swap-enter-from,
.swap-leave-to {
  opacity: 0;
  filter: blur(3px);
}

@media (prefers-reduced-motion: reduce) {
  .swap-enter-from,
  .swap-leave-to {
    filter: none;
  }
}
</style>
