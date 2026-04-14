<template>
  <div
    ref="containerRef"
    class="w-full h-full min-h-[240px] md:min-h-[320px] lg:min-h-[380px] bg-gray-100 dark:bg-gray-800"
  >
    <video
      v-if="shouldLoad"
      ref="videoRef"
      :src="src"
      class="w-full h-full min-h-[240px] md:min-h-[320px] lg:min-h-[380px] object-cover object-top"
      muted
      loop
      playsinline
      preload="none"
      :aria-label="ariaLabel"
      @canplay="tryPlay"
      @loadeddata="tryPlay"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  ariaLabel: string
}>()

const containerRef = ref<HTMLElement | null>(null)
const videoRef = ref<HTMLVideoElement | null>(null)
const shouldLoad = ref(false)
const isVisible = ref(false)

function tryPlay() {
  if (!isVisible.value) return
  const el = videoRef.value
  if (!el) return
  el.play().catch(() => {})
}

onMounted(() => {
  const el = containerRef.value
  if (!el || typeof IntersectionObserver === 'undefined') {
    shouldLoad.value = true
    isVisible.value = true
    nextTick(() => tryPlay())
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry) return
      isVisible.value = entry.isIntersecting
      if (entry.isIntersecting) {
        shouldLoad.value = true
        nextTick(() => tryPlay())
      } else {
        videoRef.value?.pause()
      }
    },
    { root: null, rootMargin: '160px 0px', threshold: 0.08 }
  )

  observer.observe(el)
  onBeforeUnmount(() => observer.disconnect())
})
</script>
