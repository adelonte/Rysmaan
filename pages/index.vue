<template>
  <div class="flex flex-col gap-12 md:gap-20 lg:gap-32">
    <EarlyAccessModal v-model:is-open="isModalOpen" />

    <!-- 1. Intro Section -->
    <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto flex flex-col gap-20 md:gap-32 pt-8 md:pt-12">
      <div class="flex flex-col gap-6 text-left md:text-center max-w-5xl mx-auto">
        <h1 class="text-[32px] md:text-[48px] leading-[1.15] font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
          <span class="text-primary-500">Simplified</span> software for project managers in solo, small, and mid-sized firms, along with service providers across all engineering disciplines.
        </h1>
        <p class="text-[18px] leading-[1.6] text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
          Meet the next-generation system for modern project management and project discovery—designed to take your company to the next level.
        </p>
        <div class="flex justify-start md:justify-center mt-6">
          <UButton size="lg" color="primary" class="rounded-full px-6 py-2.5 font-medium text-[15px]" @click="isModalOpen = true">
            See it in action
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4 ml-1.5" />
          </UButton>
        </div>
      </div>
    </div>

    <!-- 2. Big Image Placeholder -->
    <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto">
      <div class="aspect-[16/9] bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden flex items-center justify-center group cursor-pointer hover:border-primary-300 dark:hover:border-primary-700 transition-all">
        <div class="text-center">
          <UIcon name="i-heroicons-play-circle" class="w-16 h-16 text-gray-300 dark:text-gray-600 group-hover:text-primary-500 transition-colors mb-4 mx-auto" />
          <p class="text-gray-400 dark:text-gray-500 font-medium">Main Product Interface Screenshot / Video</p>
        </div>
      </div>
    </div>

    <!-- 3. Core Value Text Section -->
    <div class="bg-gray-50 dark:bg-gray-950/50">
      <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto py-20 md:py-28">
        <div class="flex flex-col gap-6 text-left max-w-4xl">
          <h2 class="text-[28px] md:text-[40px] leading-[1.2] font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
            Made for Project Managers and Service Providers
          </h2>
          <p class="text-[18px] leading-[1.6] text-gray-500 dark:text-gray-400">
            Rysmaan is built by engineers who have managed real-world projects and faced the challenge of finding qualified vendors. It provides practical tools that effectively streamline workflows and strengthen your teams.
          </p>
        </div>
      </div>
    </div>

    <!-- 4. Triple Feature Cards -->
    <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        <!-- Card 1 -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
              <UIcon name="i-heroicons-briefcase" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-[16px] font-bold text-gray-900 dark:text-white">
              Purpose-built for Project Managers
            </h3>
          </div>
          <p class="text-[15px] text-gray-500 dark:text-gray-400 leading-[1.6]">
            Rysmaan was developed to empower project managers in small- to mid-sized firms to do their best work. Every feature is intentionally designed to help teams focus on what they do best: building on budget/schedule projects.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
              <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-[16px] font-bold text-gray-900 dark:text-white">
              Purpose-built for Service Providers
            </h3>
          </div>
          <p class="text-[15px] text-gray-500 dark:text-gray-400 leading-[1.6]">
            Rysmaan enables you to showcase your expertise and capabilities to those who looking for it at the right time. It is designed to help your team to focus on what really matters: delivering quality work.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
              <UIcon name="i-heroicons-cpu-chip" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-[16px] font-bold text-gray-900 dark:text-white">
              Meticulously crafted
            </h3>
          </div>
          <p class="text-[15px] text-gray-500 dark:text-gray-400 leading-[1.6]">
            Gone are the days of clunky, slow, and bloated tools. Rysmaan is snappy, speedy, and a pleasure to use. It's intuitive and easy to learn, but flexible enough to adapt to your team's unique way of working.
          </p>
        </div>
      </div>
    </div>

    <!-- 5. All Features Section (Scroll Snap) -->
    <div class="bg-gray-50 dark:bg-gray-950/50">
      <!-- Mobile: Regular stacked layout -->
      <div class="md:hidden py-20">
        <div class="container px-4 sm:mx-auto flex flex-col gap-16">
          <div v-for="(feature, index) in detailedFeatures" :key="index" class="flex flex-col gap-6">
            <div class="flex flex-col gap-4">
              <h2 class="text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
                {{ feature.title }}
              </h2>
              <p class="text-[16px] leading-[1.6] text-gray-500 dark:text-gray-400">
                {{ feature.description }}
              </p>
            </div>
            <div class="aspect-[16/10] bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg flex items-center justify-center p-8">
              <div class="text-center">
                <UIcon :name="feature.icon" class="w-14 h-14 text-gray-200 dark:text-gray-700 mb-4 mx-auto" />
                <p class="text-sm text-gray-400 dark:text-gray-500 font-medium">Visual for {{ feature.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop: Full-screen feature sections with JS scroll lock -->
      <div 
        ref="featureContainerRef"
        class="hidden md:block"
      >
        <div 
          v-for="(feature, index) in detailedFeatures" 
          :key="index"
          :ref="el => featureRefs[index] = el"
          class="h-screen flex items-center pt-16"
        >
          <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto">
            <div class="grid grid-cols-5 gap-10 items-start w-full">
              <!-- Text Content (2 cols for better fit) -->
              <div class="col-span-2" :class="index % 2 === 0 ? 'order-1' : 'order-2'">
                <div class="flex flex-col gap-4">
                  <h2 class="text-[22px] lg:text-[26px] leading-[1.25] font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
                    {{ feature.title }}
                  </h2>
                  <p class="text-[14px] lg:text-[15px] leading-[1.6] text-gray-500 dark:text-gray-400">
                    {{ feature.description }}
                  </p>
                  <!-- Progress indicators -->
                  <div class="flex gap-2 mt-4">
                    <button 
                      v-for="(_, idx) in detailedFeatures" 
                      :key="idx"
                      @click="scrollToFeature(idx)"
                      class="w-2 h-2 rounded-full transition-all duration-300"
                      :class="idx === activeFeatureIndex ? 'bg-primary-500 w-6' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'"
                    />
                  </div>
                </div>
              </div>
              
              <!-- Image Placeholder (prominent - 3 cols, tall) -->
              <div class="col-span-3" :class="index % 2 === 0 ? 'order-2' : 'order-1'">
                <div class="h-[65vh] bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl flex items-center justify-center">
                  <div class="text-center">
                    <UIcon :name="feature.icon" class="w-28 h-28 text-gray-200 dark:text-gray-700 mb-6 mx-auto" />
                    <p class="text-base text-gray-400 dark:text-gray-500 font-medium">Visual for {{ feature.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6. Footer CTA -->
    <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto pb-20 md:pb-28">
      <div class="flex flex-col gap-6 text-left md:text-center max-w-4xl mx-auto">
        <h2 class="text-[28px] md:text-[40px] leading-[1.2] font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
          Ready to take your company to the next level?
        </h2>
        <p class="text-[18px] leading-[1.6] text-gray-500 dark:text-gray-400">
          Join project managers and service providers who are modernizing their workflows with Rysmaan.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-start md:justify-center mt-6">
          <UButton size="lg" color="primary" class="rounded-full px-6 py-2.5 font-medium text-[15px]" @click="isModalOpen = true">
            Request Early Access
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isModalOpen } = useEarlyAccess()

const detailedFeatures = [
  {
    title: "Project-Centric Platform",
    description: "An all-in-one place to procure your projects, with a level of detail tailored to your needs.",
    icon: "i-heroicons-rectangle-stack"
  },
  {
    title: "Tender and Vendor Management",
    description: "Create RFQs, deliver them to your trusted vendors, receive quotes, communicate, compare proposals, evaluate vendors, and award services within a single platform. No more buried and scattered emails or messages.",
    icon: "i-heroicons-document-check"
  },
  {
    title: "Vendors Visibility",
    description: "Let your preferred vendors keep their services and qualifications up to date. Project managers always have real-time visibility into the most current vendor information.",
    icon: "i-heroicons-eye"
  },
  {
    title: "Risk Identification",
    description: "Don't worry about missing deadlines to send out RFQs, submit quotes, or award contracts. Rysmaan has your back, helping both project managers and service providers stay on track while managing multiple projects.",
    icon: "i-heroicons-exclamation-triangle"
  },
  {
    title: "Central Repository",
    description: "Gone are the days of storing contracts and important documents across a web of emails, shared drives, or project servers. Rysmaan enables you to centrally store contracts and supporting documents in one place.",
    icon: "i-heroicons-folder-open"
  }
]

const featureRefs = ref<(HTMLElement | null)[]>([])
const featureContainerRef = ref<HTMLElement | null>(null)
const activeFeatureIndex = ref(0)
const scrollAccumulator = ref(0)
const isTransitioning = ref(false)
const SCROLL_THRESHOLD = 500

const scrollToFeature = (index: number) => {
  if (index < 0 || index >= detailedFeatures.length) return
  activeFeatureIndex.value = index
  const element = featureRefs.value[index]
  if (element) {
    isTransitioning.value = true
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => {
      isTransitioning.value = false
      scrollAccumulator.value = 0
    }, 600)
  }
}

// Check if we're on desktop (for mobile, allow normal scrolling)
const isDesktop = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(min-width: 768px)').matches
}

// Real-time check if we're in the feature lock zone
const isInLockZone = () => {
  // Mobile should have normal scrolling - never lock
  if (!isDesktop()) {
    return { isLocked: false, mostVisibleIndex: -1, maxVisibility: 0 }
  }
  
  // First check if container is substantially in viewport
  if (featureContainerRef.value) {
    const containerRect = featureContainerRef.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    
    // Calculate how much of the container is visible
    const visibleTop = Math.max(0, containerRect.top)
    const visibleBottom = Math.min(viewportHeight, containerRect.bottom)
    const visibleHeight = Math.max(0, visibleBottom - visibleTop)
    const containerVisibility = containerRect.height > 0 ? visibleHeight / viewportHeight : 0
    
    // Container must occupy at least 50% of viewport to engage lock
    if (containerVisibility < 0.5) {
      return { isLocked: false, mostVisibleIndex: -1, maxVisibility: 0 }
    }
  }
  
  // Find the most visible feature using bounding rects
  let maxVisibility = 0
  let mostVisibleIndex = -1
  
  featureRefs.value.forEach((ref, index) => {
    if (ref) {
      const rect = ref.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Calculate visible portion of this feature
      const visibleTop = Math.max(0, rect.top)
      const visibleBottom = Math.min(viewportHeight, rect.bottom)
      const visibleHeight = Math.max(0, visibleBottom - visibleTop)
      const visibility = rect.height > 0 ? visibleHeight / rect.height : 0
      
      if (visibility > maxVisibility) {
        maxVisibility = visibility
        mostVisibleIndex = index
      }
    }
  })
  
  return { isLocked: maxVisibility > 0.5, mostVisibleIndex, maxVisibility }
}

// State refs for scroll locking
const lastScrollY = ref(0)
const hasSnappedOnEntry = ref(false)
const isExitingSection = ref(false) // Prevents snap logic during exit
const isBodyLocked = ref(false) // Tracks if body overflow is hidden
const touchStartY = ref(0) // For touch scroll handling

// Lock/unlock body scroll to prevent any native scrolling
const lockBody = () => {
  if (!isBodyLocked.value && process.client) {
    document.body.style.overflow = 'hidden'
    isBodyLocked.value = true
  }
}

const unlockBody = () => {
  if (isBodyLocked.value && process.client) {
    document.body.style.overflow = ''
    isBodyLocked.value = false
  }
}

const handleFeatureWheel = (event: WheelEvent) => {
  // If we're in exiting mode, allow all scroll until we leave the section
  if (isExitingSection.value) {
    const { isLocked } = isInLockZone()
    if (!isLocked) {
      // Successfully exited, reset state
      isExitingSection.value = false
      hasSnappedOnEntry.value = false
      unlockBody() // Release body lock on exit
    }
    return // Allow native scroll during exit
  }
  
  // Real-time check: are we in the lock zone?
  const { isLocked, mostVisibleIndex } = isInLockZone()
  
  if (!isLocked) {
    scrollAccumulator.value = 0
    unlockBody() // Not in lock zone, release body lock
    return // Not in lock zone, allow normal scroll
  }
  
  // ENGAGE BODY LOCK when in lock zone
  lockBody()
  
  // Update active feature index in real-time
  if (mostVisibleIndex !== -1) {
    activeFeatureIndex.value = mostVisibleIndex
  }
  
  if (isTransitioning.value) {
    event.preventDefault()
    return
  }
  
  const atFirstFeature = activeFeatureIndex.value === 0
  const atLastFeature = activeFeatureIndex.value === detailedFeatures.length - 1
  const scrollingUp = event.deltaY < 0
  const scrollingDown = event.deltaY > 0
  
  // At boundaries, enter exit mode and unlock body for exit
  if ((atFirstFeature && scrollingUp) || (atLastFeature && scrollingDown)) {
    scrollAccumulator.value = 0
    isExitingSection.value = true // Enter exit mode
    unlockBody() // Release lock to allow exit
    return // Allow native scroll to exit
  }
  
  // In lock zone (mid-section), block native scrolling
  event.preventDefault()
  scrollAccumulator.value += event.deltaY
  
  if (Math.abs(scrollAccumulator.value) >= SCROLL_THRESHOLD) {
    const accumulatedDown = scrollAccumulator.value > 0
    const accumulatedUp = scrollAccumulator.value < 0
    
    if (accumulatedDown && !atLastFeature) {
      scrollToFeature(activeFeatureIndex.value + 1)
    } else if (accumulatedUp && !atFirstFeature) {
      scrollToFeature(activeFeatureIndex.value - 1)
    }
    scrollAccumulator.value = 0
  }
}

// Touch event handlers for mobile scroll lock
const handleTouchStart = (event: TouchEvent) => {
  touchStartY.value = event.touches[0].clientY
}

const handleTouchMove = (event: TouchEvent) => {
  // If exiting, check if we've left the lock zone
  if (isExitingSection.value) {
    const { isLocked } = isInLockZone()
    if (!isLocked) {
      isExitingSection.value = false
      hasSnappedOnEntry.value = false
      unlockBody()
    }
    return // Allow native touch during exit
  }
  
  const { isLocked, mostVisibleIndex } = isInLockZone()
  
  if (!isLocked) {
    unlockBody()
    return // Not in lock zone, allow native touch
  }
  
  // ENGAGE BODY LOCK when in lock zone
  lockBody()
  
  // Update active index
  if (mostVisibleIndex !== -1) {
    activeFeatureIndex.value = mostVisibleIndex
  }
  
  const touchY = event.touches[0].clientY
  const deltaY = touchStartY.value - touchY
  
  const atFirstFeature = activeFeatureIndex.value === 0
  const atLastFeature = activeFeatureIndex.value === detailedFeatures.length - 1
  const scrollingUp = deltaY < 0
  const scrollingDown = deltaY > 0
  
  // At boundaries, enter exit mode and unlock for exit
  if ((atFirstFeature && scrollingUp) || (atLastFeature && scrollingDown)) {
    isExitingSection.value = true
    unlockBody()
    return // Allow native touch to exit
  }
  
  // In lock zone, prevent touch scrolling and accumulate
  event.preventDefault()
  scrollAccumulator.value += deltaY
  touchStartY.value = touchY // Update for continuous scroll
  
  const threshold = 100 // Lower threshold for touch
  
  if (Math.abs(scrollAccumulator.value) >= threshold && !isTransitioning.value) {
    if (scrollAccumulator.value > 0 && activeFeatureIndex.value < detailedFeatures.length - 1) {
      scrollToFeature(activeFeatureIndex.value + 1)
    } else if (scrollAccumulator.value < 0 && activeFeatureIndex.value > 0) {
      scrollToFeature(activeFeatureIndex.value - 1)
    }
    scrollAccumulator.value = 0
  }
}

// Keyboard event handler for PageUp/PageDown/Arrow keys
const handleKeydown = (event: KeyboardEvent) => {
  const { isLocked, mostVisibleIndex } = isInLockZone()
  
  if (!isLocked || isExitingSection.value) return
  
  // Update active index
  if (mostVisibleIndex !== -1) {
    activeFeatureIndex.value = mostVisibleIndex
  }
  
  const navigationKeys = ['PageUp', 'PageDown', 'ArrowUp', 'ArrowDown', ' ', 'Home', 'End']
  if (!navigationKeys.includes(event.key)) return
  
  const atFirstFeature = activeFeatureIndex.value === 0
  const atLastFeature = activeFeatureIndex.value === detailedFeatures.length - 1
  const scrollingUp = event.key === 'PageUp' || event.key === 'ArrowUp' || event.key === 'Home' || (event.key === ' ' && event.shiftKey)
  const scrollingDown = event.key === 'PageDown' || event.key === 'ArrowDown' || event.key === 'End' || (event.key === ' ' && !event.shiftKey)
  
  // At boundaries, enter exit mode and allow default behavior for leaving
  if ((atFirstFeature && scrollingUp) || (atLastFeature && scrollingDown)) {
    isExitingSection.value = true
    unlockBody()
    return // Allow native keyboard scroll to exit
  }
  
  // Not at boundary - prevent default and engage lock
  event.preventDefault()
  lockBody()
  
  if (isTransitioning.value) return
  
  // Navigate between features
  if (scrollingDown && !atLastFeature) {
    scrollToFeature(activeFeatureIndex.value + 1)
  } else if (scrollingUp && !atFirstFeature) {
    scrollToFeature(activeFeatureIndex.value - 1)
  }
}

// Store observers as refs for cleanup in onUnmounted
const featureObserverRef = ref<IntersectionObserver | null>(null)
const containerObserverRef = ref<IntersectionObserver | null>(null)

const snapToFeature = (index: number) => {
  // Don't snap if we're exiting the section
  if (isExitingSection.value) return
  
  const element = featureRefs.value[index]
  if (element && !isTransitioning.value) {
    isTransitioning.value = true
    activeFeatureIndex.value = index
    scrollAccumulator.value = 0
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => {
      isTransitioning.value = false
    }, 600)
  }
}

// Scroll listener to handle non-wheel scroll (trackpad momentum, touch, etc.)
// Also enforces lock behavior by snapping back if user drifts within lock zone
const handleScroll = () => {
  const { isLocked, mostVisibleIndex } = isInLockZone()
  
  // Handle exit mode
  if (isExitingSection.value) {
    if (!isLocked) {
      // Successfully exited via non-wheel scroll
      isExitingSection.value = false
      hasSnappedOnEntry.value = false
      unlockBody()
    }
    // Don't enforce lock during exit mode - let momentum carry user out
    return
  }
  
  // Manage body lock state based on lock zone
  if (isLocked) {
    lockBody()
  } else {
    unlockBody()
    return // Not in lock zone, nothing to enforce
  }
  
  // During transitions, keep lock active but don't snap (let smooth scroll complete)
  if (isTransitioning.value) return
  
  // If in lock zone via non-wheel scroll (momentum), snap to nearest feature
  if (mostVisibleIndex !== -1) {
    // Debounce: only snap if we've drifted significantly from active feature
    const activeRef = featureRefs.value[activeFeatureIndex.value]
    if (activeRef) {
      const rect = activeRef.getBoundingClientRect()
      const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)
      
      // If active feature is more than 20% off-center, snap to most visible
      if (distanceFromCenter > window.innerHeight * 0.2) {
        if (mostVisibleIndex !== activeFeatureIndex.value) {
          activeFeatureIndex.value = mostVisibleIndex
          scrollAccumulator.value = 0
          snapToFeature(mostVisibleIndex)
        }
      }
    }
  }
}

onMounted(() => {
  // Add scroll listener for non-wheel scrolling
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Add touch event listeners for mobile
  window.addEventListener('touchstart', handleTouchStart, { passive: true })
  window.addEventListener('touchmove', handleTouchMove, { passive: false })

  // Feature observer is now PASSIVE - no state mutations
  // It only serves to track which features exist for intersection debugging
  // All lock/index decisions are made in wheel handler's isInLockZone()
  featureObserverRef.value = new IntersectionObserver(
    () => {
      // Passive - no state changes
      // Lock state is computed in real-time by wheel handler
    },
    { threshold: [0.5] }
  )

  containerObserverRef.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Only use this to reset exit mode when we've LEFT the section entirely
        if (!entry.isIntersecting) {
          isExitingSection.value = false
          hasSnappedOnEntry.value = false
          unlockBody() // Ensure body is unlocked when leaving section
        }
        lastScrollY.value = window.scrollY
      })
    },
    { threshold: 0 }
  )

  // Add wheel event listener at window level with passive: false to enable preventDefault()
  window.addEventListener('wheel', handleFeatureWheel, { passive: false })
  
  // Add keyboard event listener for PageUp/PageDown/Arrow navigation
  window.addEventListener('keydown', handleKeydown)
  
  nextTick(() => {
    featureRefs.value.forEach((ref) => {
      if (ref) {
        featureObserverRef.value?.observe(ref)
      }
    })
    if (featureContainerRef.value) {
      containerObserverRef.value?.observe(featureContainerRef.value)
    }
  })
})

onUnmounted(() => {
  featureObserverRef.value?.disconnect()
  containerObserverRef.value?.disconnect()
  // Clean up event listeners
  window.removeEventListener('wheel', handleFeatureWheel)
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
  window.removeEventListener('keydown', handleKeydown)
  // Ensure body is unlocked
  unlockBody()
})
</script>
