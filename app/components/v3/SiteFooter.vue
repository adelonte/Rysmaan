<script setup lang="ts">
const { v3: site } = useAppConfig()
</script>

<template>
  <footer class="section-shell pb-8">
    <div
      class="flex flex-col gap-6 border-t border-default pt-8 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <a
          href="#top"
          class="flex items-center gap-2"
        ><V3RysmaanMark class="size-6" /><span class="text-lg font-semibold tracking-[-0.05em]">rysmaan</span></a>
        <p class="mt-2 text-xs text-muted">
          A connected foundation for what comes next.
        </p>
      </div>
      <nav
        aria-label="Footer"
        class="flex flex-wrap items-center gap-6 text-xs text-muted"
      >
        <a href="#pilot">Founding pilot</a><a href="#faq">FAQ</a><a :href="`mailto:${site.email}`">Contact</a><span>© 2026 Rysmaan</span>
      </nav>
    </div>
  </footer>
</template>
