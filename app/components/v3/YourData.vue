<script setup lang="ts">
const commitments = [
  {
    title: 'Read-only access',
    icon: 'i-lucide-eye',
    body: 'We work from your exports and files. Your existing systems stay as they are.'
  },
  {
    title: 'Private to your firm',
    icon: 'i-lucide-shield-check',
    body: 'Your records live in a separate database. Access and confidentiality are agreed before you share files.'
  },
  {
    title: 'Yours to keep',
    icon: 'i-lucide-key-round',
    body: 'You own the database and Power BI model, even if you stop working with us.'
  }
]
</script>

<template>
  <section
    id="data"
    aria-labelledby="data-title"
    class="section-space border-y border-default bg-muted"
  >
    <div class="section-shell">
      <div
        v-v3-reveal
        class="data-heading"
      >
        <V3SectionHeading
          id="data-title"
          kicker="Built on trust"
          title="Your data stays yours."
          :center="false"
        />
        <p class="max-w-sm text-base leading-relaxed text-muted">
          Clear ownership and agreed access, from the start.
        </p>
      </div>
      <dl class="commitments">
        <div
          v-for="(c, index) in commitments"
          :key="c.title"
          v-v3-reveal="(index % 3) * 70"
          class="commitment"
        >
          <UIcon
            :name="c.icon"
            class="size-5 text-primary"
            aria-hidden="true"
          />
          <dt class="mt-5 text-base font-medium">
            {{ c.title }}
          </dt>
          <dd class="mt-2 text-sm leading-relaxed text-muted">
            {{ c.body }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.data-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
}
.commitments {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 48px;
  gap: 32px 48px;
}
.commitment {
  border-top: 1px solid var(--ui-border);
  padding-top: 24px;
}
@media (max-width: 767px) {
  .data-heading {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .commitments {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
}
@media (max-width: 420px) {
  .commitments {
    grid-template-columns: 1fr;
  }
}
</style>
