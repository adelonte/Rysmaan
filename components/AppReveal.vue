<script setup lang="ts">
/**
 * Reveals its content once, when it first scrolls into view.
 *
 * Uses a CSS transition rather than a keyframe animation so a reveal that is
 * interrupted (fast scrolling past, then back) retargets from where it is
 * instead of restarting from zero.
 */
const props = withDefaults(
  defineProps<{
    /** Stagger offset in ms. Keep siblings 60-90ms apart. */
    delay?: number
    /** Element to render as. */
    as?: string
    /** Distance travelled, in px. Small: the movement is a hint, not a journey. */
    y?: number
  }>(),
  { delay: 0, as: 'div', y: 14 }
)

const root = ref<HTMLElement | null>(null)
const shown = ref(false)

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') {
    shown.value = true
    return
  }

  const node = root.value
  if (!node) {
    shown.value = true
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        shown.value = true
        observer.disconnect()
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  )

  observer.observe(node)
  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <component
    :is="as"
    ref="root"
    class="reveal"
    :data-shown="shown || undefined"
    :style="{ '--reveal-delay': `${props.delay}ms`, '--reveal-y': `${props.y}px` }"
  >
    <slot />
  </component>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(var(--reveal-y, 14px));
  transition:
    opacity var(--duration-reveal, 560ms) var(--ease-out) var(--reveal-delay, 0ms),
    transform var(--duration-reveal, 560ms) var(--ease-out) var(--reveal-delay, 0ms);
}

.reveal[data-shown] {
  opacity: 1;
  transform: none;
}

/* Reduced motion means gentler, not absent: keep the fade, drop the travel. */
@media (prefers-reduced-motion: reduce) {
  .reveal {
    transform: none;
    transition: opacity 240ms ease var(--reveal-delay, 0ms);
  }
}
</style>
