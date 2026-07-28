<script setup lang="ts">
/**
 * The page's single source of horizontal rhythm. Every section shares one
 * container width and one gutter scale, so nothing drifts out of alignment.
 */
withDefaults(
  defineProps<{
    /** `muted` paints a full-bleed band behind the content. */
    tone?: 'default' | 'muted'
    /** Drop the built-in vertical padding when a section owns its own. */
    flush?: boolean
    as?: string
  }>(),
  { tone: 'default', flush: false, as: 'section' }
)
</script>

<template>
  <component
    :is="as"
    :class="tone === 'muted' ? 'bg-gray-50 dark:bg-gray-950/40' : undefined"
  >
    <div
      class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12"
      :class="flush ? undefined : 'py-20 sm:py-24 lg:py-28'"
    >
      <slot />
    </div>
  </component>
</template>
