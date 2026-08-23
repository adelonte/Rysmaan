<script setup lang="ts">
const links = [
  { label: 'Platform', to: '#services' },
  { label: 'Why Rysmaan', to: '#results' },
  { label: 'Contact', to: 'mailto:hello@rysmaan.com' },
  { label: 'Privacy', to: '#' },
  { label: 'Terms', to: '#' }
]
</script>

<template>
  <UFooter
    :ui="{
      container: 'border-t border-default lg:py-8',
      right: 'gap-x-0 flex-wrap'
    }"
  >
    <template #left>
      <p class="text-sm text-muted">
        © {{ new Date().getFullYear() }} Rysmaan. All rights reserved.
      </p>
    </template>

    <template #right>
      <UButton
        v-for="link in links"
        :key="link.label"
        :label="link.label"
        :to="link.to"
        color="neutral"
        variant="link"
        class="font-light"
        size="sm"
      />
    </template>
  </UFooter>
</template>
