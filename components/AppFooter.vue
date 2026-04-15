<script setup lang="ts">
const links = [];
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
    <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto">
      <div class="py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <div class="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2026 Rysmaan. All rights reserved.
        </div>
        
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Rysmaan Logo" class="h-28 w-auto dark:hidden" />
          <img src="/logo.png" alt="Rysmaan Logo" class="hidden dark:block h-28 w-auto invert brightness-200" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
