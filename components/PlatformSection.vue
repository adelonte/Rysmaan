<script setup lang="ts">
const features = [
  {
    title: 'Project-Centric Platform',
    description:
      'An all-in-one place to procure your projects, with a level of detail tailored to your needs.',
    videoSrc: '/videos/Projects.mp4',
    width: 1280,
    height: 716
  },
  {
    title: 'Request for Quotations',
    description:
      'Create RFQs, deliver them to your trusted vendors, receive quotes, communicate, compare proposals, evaluate vendors, and award services within a single platform. No more buried and scattered emails or messages.',
    videoSrc: '/videos/RFQ.mp4',
    width: 1280,
    height: 716
  },
  {
    title: 'Vendors Visibility',
    description:
      'Let your preferred vendors keep their services and qualifications up to date. Project managers always have real-time visibility into the most current vendor information.',
    videoSrc: '/videos/Preferred_Vendors.mp4',
    width: 1280,
    height: 716
  },
  {
    title: 'Risk Identification',
    description:
      "Don't worry about missing deadlines to send out RFQs, submit quotes, or award contracts. Rysmaan has your back, helping both project managers and service providers stay on track while managing multiple projects.",
    videoSrc: '/videos/Schedule.mp4',
    width: 1280,
    height: 732
  },
  {
    title: 'Central Repository',
    description:
      'Gone are the days of storing contracts and important documents across a web of emails, shared drives, or project servers. Rysmaan enables you to centrally store contracts and supporting documents in one place.',
    videoSrc: '/videos/Contracts.mp4',
    width: 1280,
    height: 788
  }
]
</script>

<template>
  <AppSection id="platform" class="scroll-mt-20">
    <div class="flex flex-col gap-24 lg:gap-32">
      <div
        v-for="(feature, index) in features"
        :key="feature.title"
        class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
      >
        <AppReveal
          class="lg:col-span-5"
          :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
        >
          <div class="flex items-center gap-3">
            <span class="text-eyebrow tabular-nums">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span class="h-px w-8 bg-primary-500/25 dark:bg-primary-400/25" />
          </div>
          <h2 class="mt-5 text-h3 text-balance text-gray-900 dark:text-white">
            {{ feature.title }}
          </h2>
          <p class="mt-4 text-body text-pretty text-gray-500 dark:text-gray-400">
            {{ feature.description }}
          </p>
        </AppReveal>

        <AppReveal
          :delay="90"
          class="lg:col-span-7"
          :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
        >
          <!-- The recordings already carry their own window chrome and shadow;
               a second frame around them would only fight the content. -->
          <div
            class="overflow-hidden rounded-2xl"
            :style="{ aspectRatio: `${feature.width} / ${feature.height}` }"
          >
            <FeaturePreviewVideo
              :src="feature.videoSrc"
              :label="`Product preview: ${feature.title}`"
            />
          </div>
        </AppReveal>
      </div>
    </div>
  </AppSection>
</template>
