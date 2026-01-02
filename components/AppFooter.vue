<script setup lang="ts">
const links = [];
</script>

<template>
  <UFooter :links="links">
    <template #left>
    </template>

    <template #right>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} Rysmaan. All rights reserved.
      </p>
    </template>
  </UFooter>
</template>
