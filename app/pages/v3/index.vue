<script setup lang="ts">
definePageMeta({ layout: 'v3', colorMode: 'light' })
const { v3: site } = useAppConfig()

useSeoMeta({
  title: 'Rysmaan — Your project history. Finally connected.',
  description: 'Rysmaan turns engineering project files from file systems and SharePoint into checked, connected records for Power BI and AI assistants.',
  ogTitle: 'Your project history. Finally connected.',
  ogDescription: 'Connect the project knowledge in your file systems and SharePoint. Checked records for clearer reports and more useful AI answers.',
  ogImage: '/v3/video/rysmaan-overview-poster.jpg',
  twitterImage: '/v3/video/rysmaan-overview-poster.jpg',
  robots: 'noindex, nofollow'
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
      <V3YourData />
      <V3FaqList />
      <V3FinalCall />
    </main>
    <V3SiteFooter />
  </div>
</template>
