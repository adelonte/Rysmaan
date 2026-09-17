<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'day' | 'dusk' }>(), {
  variant: 'day'
})
</script>

<template>
  <div
    aria-hidden="true"
    class="overflow-hidden bg-[#233d3d]"
  >
    <img
      src="/images/calgary-painted-v1.webp"
      alt=""
      width="1672"
      height="941"
      :loading="variant === 'day' ? 'eager' : 'lazy'"
      :fetchpriority="variant === 'day' ? 'high' : 'auto'"
      decoding="async"
      class="h-full w-full object-cover object-[62%_center] sm:object-center"
      :class="{ 'brightness-65 saturate-75': variant === 'dusk' }"
    >
    <div
      class="absolute inset-0"
      :class="variant === 'dusk'
        ? 'bg-[linear-gradient(180deg,rgba(10,28,40,0.25),rgba(10,28,40,0.4)_55%,rgba(5,18,26,0.8))]'
        : 'bg-[linear-gradient(180deg,rgba(8,25,30,0.18),transparent_25%,transparent_50%,rgba(8,25,30,0.4))]'"
    />
  </div>
</template>
