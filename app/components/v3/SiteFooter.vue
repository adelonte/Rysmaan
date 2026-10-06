<script setup lang="ts">
const { v3: site } = useAppConfig()
</script>

<template>
  <footer class="section-shell pb-8">
    <div
      class="flex flex-col gap-6 border-t border-default pt-8 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <NuxtLink
          to="/v3#top"
          class="flex items-center gap-2"
        ><V3RysmaanMark class="size-6" /><span class="text-lg font-semibold tracking-[-0.05em]">rysmaan</span></NuxtLink>
        <p class="mt-2 text-xs text-muted">
          Company knowledge from your file systems, SharePoint or drives.
        </p>
      </div>
      <nav
        aria-label="Footer"
        class="flex flex-wrap items-center gap-6 text-xs text-muted"
      >
        <NuxtLink to="/v3#pilot">Founding pilot</NuxtLink><NuxtLink to="/v3#faq">FAQ</NuxtLink><NuxtLink to="/about">About</NuxtLink><a :href="`mailto:${site.email}`">Contact</a><span>© {{ new Date().getFullYear() }} Rysmaan</span>
      </nav>
    </div>
  </footer>
</template>
