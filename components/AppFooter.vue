<script setup lang="ts">
const links = [];
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
    <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto">
      <div class="py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <div class="text-sm text-gray-500 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} VendorGate (Rysmaan). All rights reserved.
        </div>
        
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Rysmaan Logo" class="h-28 w-auto mix-blend-multiply brightness-[1.1] contrast-[1.1] dark:hidden" />
          <img src="/logo.png" alt="Rysmaan Logo" class="hidden dark:block h-28 w-auto mix-blend-screen brightness-200 contrast-200" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
