<script setup lang="ts">
const items = [
  {
    label: 'Does our team need to learn a new app?',
    content:
      'No. Your team keeps working in its folders and SharePoint. Rysmaan connects the project history in those documents, and the results appear in Power BI and your AI assistant.'
  },
  {
    label: 'Which sources do you work with?',
    content:
      'We focus on file systems (local folders and shared drives) and SharePoint document libraries. We work with project documents such as project briefs, project sheets, reports and CVs. We agree on the folders and file types to include before starting your pilot.'
  },
  {
    label: 'How is this different from searching our files?',
    content:
      'Searching helps you find a document. Rysmaan connects differently named files to the same project, joins related information, and flags conflicting details for your team to confirm.'
  },
]
</script>

<template>
  <section
    id="faq"
    aria-labelledby="faq-title"
    class="section-space"
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
