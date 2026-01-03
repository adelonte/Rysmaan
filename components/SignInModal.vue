<script setup lang="ts">
const isOpen = defineModel<boolean>('isOpen', { default: false })
const { isModalOpen: isEarlyAccessOpen } = useEarlyAccess()

const form = reactive({
  email: '',
  password: ''
})

const loading = ref(false)

const handleSignIn = async () => {
  loading.value = true
  // Simulate sign in
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert('Sign in functionality will be connected later.')
  loading.value = false
  isOpen.value = false
}
</script>

<template>
  <UModal v-model="isOpen">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Sign In
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
        </div>
      </template>

      <form @submit.prevent="handleSignIn" class="space-y-4">
        <UFormGroup label="Email" name="email" required>
          <UInput v-model="form.email" type="email" placeholder="you@example.com" icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required>
          <UInput v-model="form.password" type="password" placeholder="••••••••" icon="i-heroicons-lock-closed" />
        </UFormGroup>

        <div class="flex items-center justify-between">
          <UCheckbox label="Remember me" />
          <UButton variant="link" color="primary" size="xs">
            Forgot password?
          </UButton>
        </div>

        <UButton type="submit" color="primary" block :loading="loading">
          Sign In
        </UButton>
      </form>

      <template #footer>
        <p class="text-sm text-center text-gray-500 dark:text-gray-400">
          Don't have an account?
          <UButton variant="link" color="primary" size="sm" @click="isOpen = false; isEarlyAccessOpen = true">
            Request Early Access
          </UButton>
        </p>
      </template>
    </UCard>
  </UModal>
</template>