<script setup lang="ts">
/**
 * Standalone shell for the v2 site. It shares nothing with the default layout
 * — no AppHeader, no AppFooter — so v2 can be reshaped, or deleted, without
 * touching the live site.
 *
 * v2 is full-bleed scene-first, so the shell only sets the base ink colour and
 * gets out of the way; each section paints its own background.
 */
</script>

<template>
  <div class="min-h-screen bg-[#04222a] text-[#14161a] antialiased selection:bg-ocean-500 selection:text-[#04222a]">
    <slot />
  </div>
</template>
