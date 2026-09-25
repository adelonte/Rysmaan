<script setup lang="ts">
const items = [
  {
    label: 'Does our team need to learn a new app?',
    content:
      'No. Your team keeps using its accounting and project tools. Rysmaan connects the history behind them, and the results appear in Power BI and your AI assistant.'
  },
  {
    label: 'Which systems do you work with?',
    content:
      'We start with exports from Deltek, BQE CORE, QuickBooks or spreadsheets, plus project files from SharePoint, OneDrive or a shared drive. Tell us what you use when you apply.'
  },
  {
    label: 'How is this different from searching our files?',
    content:
      'Searching helps you find a document. Rysmaan connects differently named files to the same project, joins related information, and flags conflicting details for your team to confirm.'
  },
  {
    label: 'What does it cost?',
    content:
      'Pricing is on application. After a conversation about your sources and history, we quote a fixed setup fee. Monthly updates are optional.'
  },
  {
    label: 'What happens if we stop?',
    content:
      'You keep your database and Power BI model. We agree on the handover and deletion of our copy with you.'
  }
]
</script>

<template>
  <section
    id="faq"
    aria-labelledby="faq-title"
    class="section-space border-t border-default"
  >
    <div class="section-shell faq-layout">
      <div v-v3-reveal>
        <V3SectionHeading
          id="faq-title"
          kicker="A little more clarity"
          title="A few common questions."
          :center="false"
        />
        <p class="mt-5 text-sm text-muted">
          Something else on your mind?
          <a
            href="#pilot"
            class="text-primary underline underline-offset-4"
          >Let’s talk.</a>
        </p>
      </div>
      <UAccordion
        :items="items"
        type="multiple"
        trailing-icon="i-lucide-plus"
        :ui="{
          item: 'border-b border-default last:border-b',
          trigger: 'py-5 text-[15px] font-medium gap-4 cursor-pointer',
          trailingIcon: 'size-4 group-data-[state=open]:rotate-45',
          body: 'pb-5 text-sm leading-relaxed text-muted'
        }"
      />
    </div>
  </section>
</template>

<style scoped>
.faq-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: 100px;
}
@media (max-width: 767px) {
  .faq-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
