<script setup lang="ts">
import '~/assets/css/v3.css'

useHead({
  htmlAttrs: { class: 'v3-page', lang: 'en-CA' },
  meta: [{ key: 'theme-color', name: 'theme-color', content: '#172e3d' }],
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/v3/favicon.svg' }]
})
</script>

<template>
  <div class="v3-site">
    <UTheme :ui="{ button: { base: 'font-medium transition-colors duration-150' } }">
      <slot />
    </UTheme>
  </div>
</template>
