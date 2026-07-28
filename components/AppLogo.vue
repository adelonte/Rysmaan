<script setup lang="ts">
/**
 * The source logo is a stacked lockup with generous whitespace baked in, which
 * reads tiny in a 72px header. These are the same artwork cropped to its ink,
 * recomposed horizontally — so the wordmark can be set at a legible size.
 */
withDefaults(defineProps<{ size?: 'sm' | 'md' }>(), { size: 'md' })
</script>

<template>
  <span class="flex items-center" :class="size === 'sm' ? 'gap-2' : 'gap-2.5'">
    <img
      src="/logo-mark.png"
      alt=""
      aria-hidden="true"
      class="w-auto dark:brightness-0 dark:invert"
      :class="size === 'sm' ? 'h-7' : 'h-8'"
      width="381"
      height="367"
    >
    <img
      src="/logo-word.png"
      alt="Rysmaan"
      class="w-auto dark:brightness-0 dark:invert"
      :class="size === 'sm' ? 'h-[13px]' : 'h-[15px]'"
      width="852"
      height="122"
    >
  </span>
</template>
