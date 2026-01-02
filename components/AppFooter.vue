<script setup lang="ts">
const links = [];
</script>

<template>
  <UFooter :links="links">
    <template #left>
      <div class="flex flex-col gap-4">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Streamline your RFQ process and connect with the right partners.
        </p>
      </div>
    </template>

    <template #right>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} Rysmaan. All rights reserved.
      </p>
    </template>
  </UFooter>
</template>
