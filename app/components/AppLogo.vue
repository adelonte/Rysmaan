<script setup lang="ts">
/**
 * The source artwork is a stacked lockup with generous whitespace baked in,
 * which reads tiny in a header. These are the same files cropped to their ink
 * and recomposed horizontally, so the wordmark can sit at a legible size.
 *
 * The artwork is navy-on-transparent, so it is knocked out to white in dark
 * mode rather than shipping a second set of files.
 */
withDefaults(defineProps<{ size?: 'sm' | 'md' }>(), { size: 'md' })
</script>

<template>
  <span
    class="flex items-center"
    :class="size === 'sm' ? 'gap-2' : 'gap-2.5'"
  >
    <img
      src="/logo-mark.png"
      alt=""
      aria-hidden="true"
      class="w-auto dark:brightness-0 dark:invert"
      :class="size === 'sm' ? 'h-6' : 'h-7'"
      width="381"
      height="367"
    >
    <img
      src="/logo-word.png"
      alt="Rysmaan"
      class="w-auto dark:brightness-0 dark:invert"
      :class="size === 'sm' ? 'h-[11px]' : 'h-[13px]'"
      width="852"
      height="122"
    >
  </span>
</template>
