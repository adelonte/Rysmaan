<script setup lang="ts">
/**
 * A product screenshot in the same window chrome as HeroActivity, so the real
 * screens and the illustrative one read as one system.
 *
 * `crop` trims the foot of the image by rendering it into a box wider than the
 * source — used where a screenshot has scratch data at the bottom of the page.
 */
withDefaults(defineProps<{
  src: string
  alt: string
  label?: string
  width: number
  height: number
  crop?: boolean
}>(), { label: undefined, crop: false })
</script>

<template>
  <figure class="overflow-hidden rounded-xl border border-default bg-default shadow-sm">
    <figcaption
      v-if="label"
      class="flex items-center gap-3 border-b border-default p-3 sm:px-4"
    >
      <div class="flex items-center gap-1.5">
        <span class="size-2.5 rounded-full border border-default bg-muted" />
        <span class="size-2.5 rounded-full border border-default bg-muted" />
        <span class="size-2.5 rounded-full border border-default bg-muted" />
      </div>

      <span class="min-w-0 flex-1 truncate text-xs text-muted">{{ label }}</span>
    </figcaption>

    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      loading="lazy"
      decoding="async"
      class="w-full"
      :class="crop ? 'aspect-2/1 object-cover object-top' : undefined"
    >
  </figure>
</template>
