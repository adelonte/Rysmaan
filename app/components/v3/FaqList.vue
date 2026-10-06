<script setup lang="ts">
const items = [
  {
    label: 'Does our team need to learn a new app?',
    content:
      'No. Your team keeps working exactly as they do today. Rysmaan runs quietly in the background as a searchable knowledge base. Depending on their role and needs, team members can use it to instantly pull past data for everything from preparing proposals and SOQs to researching technical questions and supporting day-to-day work.'
  },
  {
    label: 'Which databases and files do you work with?',
    content:
      'We connect to your existing server folders, SharePoint libraries, email archives, and cloud-based software databases like Autodesk. We focus strictly on relevant project documentation without requiring you to change how you store your files.'
  },
  {
    label: 'How is this different from standard file searching?',
    content:
      'Standard searching only looks for individual files based on keywords. Rysmaan uses a specialized technical pipeline to extract, tag, and organize all your disconnected data silos into a structured, referenceable knowledge hub.'
  },
  {
    label: 'How is our data secured?',
    content:
      'Security is built into our core architecture. Rysmaan operates as a read-only metadata overlay inside an isolated, single-tenant cloud environment for your firm. Your files are completely sandboxed, your data is never used to train public AI models, and we enforce strict access filters so employees can only surface files they have active permission to see.'
  }
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
