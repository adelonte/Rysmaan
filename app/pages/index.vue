<script setup lang="ts">
definePageMeta({ layout: 'v3', colorMode: 'light', alias: ['/v3'] })
const { v3: site } = useAppConfig()

useHead({
  link: [{ rel: 'canonical', href: 'https://rysmaan.com/' }]
})

useSeoMeta({
  title: 'Rysmaan — Your Entire Project History. Unified into a Single Source of Truth.',
  description: 'Rysmaan connects your firm’s fragmented archives, server folders, SharePoint, emails, and other databases into a single, searchable knowledge base—without changing how you store your documents.',
  ogTitle: 'Your Entire Project History. Unified into a Single Source of Truth.',
  ogDescription: 'Instantly extract historical metrics to accelerate non-billable tasks and day-to-day engineering work from a single, searchable knowledge base.',
  ogImage: '/v3/video/rysmaan-overview-poster.jpg',
  twitterImage: '/v3/video/rysmaan-overview-poster.jpg',
  ogUrl: 'https://rysmaan.com/'
})
</script>

<template>
  <div>
    <a
      href="#main-content"
      class="skip-link"
    >Skip to content</a>
    <V3SiteHeader />
    <main
      id="main-content"
      tabindex="-1"
    >
      <V3HeroPipeline />
      <template v-if="site.showChallengeSections">
        <V3FirmChallenges />
        <V3PipelineSteps />
      </template>
      <template v-if="site.showOverviewSections">
        <V3VideoOverview />
        <V3ProblemReconcile />
        <V3UnlocksCards />
      </template>
      <V3PilotApply />
      <V3FaqList />
      <V3FinalCall />
    </main>
    <V3SiteFooter />
  </div>
</template>
