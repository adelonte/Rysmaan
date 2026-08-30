<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020617' : '#ffffff')

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
    { name: 'apple-mobile-web-app-title', content: 'Rysmaan' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', type: 'application/manifest+json', href: '/site.webmanifest' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogSiteName: 'Rysmaan',
  ogType: 'website',
  ogImage: '/screenshots/Dashboard.png',
  twitterImage: '/screenshots/Dashboard.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>
