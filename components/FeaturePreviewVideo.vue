<script setup lang="ts">
const props = defineProps<{
  src: string
  label: string
}>()

const container = ref<HTMLElement | null>(null)
const video = ref<HTMLVideoElement | null>(null)

const shouldLoad = ref(false)
const isVisible = ref(false)
const isReady = ref(false)

// Autoplaying loops are motion. Honour the OS setting: load the clip, but let
// the user start it with native controls instead of playing it at them.
const prefersReducedMotion = ref(false)

function tryPlay() {
  isReady.value = true
  if (!isVisible.value || prefersReducedMotion.value) return
  video.value?.play().catch(() => {})
}

onMounted(() => {
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReducedMotion.value = motionQuery.matches

  const onMotionChange = (event: MediaQueryListEvent) => {
    prefersReducedMotion.value = event.matches
    if (event.matches) video.value?.pause()
    else tryPlay()
  }
  motionQuery.addEventListener('change', onMotionChange)
  onBeforeUnmount(() => motionQuery.removeEventListener('change', onMotionChange))

  const node = container.value
  if (!node || typeof IntersectionObserver === 'undefined') {
    shouldLoad.value = true
    isVisible.value = true
    nextTick(tryPlay)
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry) return

      isVisible.value = entry.isIntersecting
      if (entry.isIntersecting) {
        shouldLoad.value = true
        nextTick(tryPlay)
      } else {
        video.value?.pause()
      }
    },
    { root: null, rootMargin: '160px 0px', threshold: 0.08 }
  )

  observer.observe(node)
  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <div ref="container" class="size-full min-h-0 bg-gray-50 dark:bg-gray-800/60">
    <video
      v-if="shouldLoad"
      ref="video"
      :src="props.src"
      class="block size-full object-cover object-center transition-opacity duration-500 ease-out"
      :class="isReady ? 'opacity-100' : 'opacity-0'"
      muted
      loop
      playsinline
      preload="none"
      :controls="prefersReducedMotion"
      :aria-label="props.label"
      @canplay="tryPlay"
      @loadeddata="tryPlay"
    />
  </div>
</template>
