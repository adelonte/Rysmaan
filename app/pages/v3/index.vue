<script setup lang="ts">
definePageMeta({ layout: 'v3', colorMode: 'light' })

useSeoMeta({
  title: 'Rysmaan — Your project history. Finally connected.',
  description: 'Rysmaan turns an engineering firm’s accounting exports and project files into one set of checked records for Power BI and AI assistants.',
  ogTitle: 'Your project history. Finally connected.',
  ogDescription: 'Connected project records for clearer reports and more useful AI answers. Built for engineering firms.',
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
      <V3VideoOverview />
      <V3ProblemReconcile />
      <V3UnlocksCards />
      <V3PilotApply />
      <V3YourData />
      <V3FaqList />
      <V3FinalCall />
    </main>
    <V3SiteFooter />
  </div>
</template>
