<script setup lang="ts">
withDefaults(defineProps<{ id?: string, title: string, kicker?: string, center?: boolean }>(), {
  id: undefined,
  kicker: undefined,
  center: true
})
</script>

<template>
  <div :class="center ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'">
    <p
      v-if="kicker"
      class="eyebrow mb-5"
      :class="{ 'justify-center': center }"
    >
      {{ kicker }}
    </p>
    <h2
      :id="id"
      class="section-title"
    >
      {{ title }}
    </h2>
    <div
      v-if="$slots.default"
      class="mt-5 text-base leading-relaxed text-muted sm:text-lg"
    >
      <slot />
    </div>
  </div>
</template>
