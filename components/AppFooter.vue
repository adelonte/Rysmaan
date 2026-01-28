<script setup lang="ts">
const links = [];
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
    <UContainer>
      <div class="py-12 flex flex-col items-center justify-center gap-6">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Rysmaan Logo" class="h-8 w-auto mix-blend-multiply brightness-[1.1] contrast-[1.1] dark:hidden" />
          <img src="/logo.png" alt="Rysmaan Logo" class="hidden dark:block h-8 w-auto mix-blend-screen brightness-200 contrast-200" />
        </NuxtLink>
        
        <div class="text-sm text-gray-500 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} VendorGate (Rysmaan). All rights reserved.
        </div>
      </div>
    </UContainer>
  </footer>
</template>
