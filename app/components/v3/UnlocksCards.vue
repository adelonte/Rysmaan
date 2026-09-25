<script setup lang="ts">
const overruns = [
  { line: 'Buildings', pct: 18 },
  { line: 'Transportation', pct: 11 },
  { line: 'Healthcare', pct: 7 },
  { line: 'Water', pct: 4 }
]

const answer = [
  {
    person: 'Dana Whitford',
    project: 'Foothills Water Treatment Upgrade, $860,000',
    sources: ['Accounting export', 'Project sheet']
  },
  {
    person: 'Marc Tremblay',
    project: 'Red Deer Intake Pump Station, $620,000',
    sources: ['Contract, p. 3']
  },
  {
    person: 'Aisha Rahman',
    project: 'Cochrane Lagoon Upgrade, $540,000',
    sources: ['Proposal, p. 9', 'CV']
  }
]
</script>

<template>
  <section
    id="unlocks"
    aria-labelledby="unlocks-title"
    class="section-space bg-muted border-y border-default"
  >
    <div class="section-shell">
      <div
        v-v3-reveal
        class="unlocks-heading"
      >
        <V3SectionHeading
          id="unlocks-title"
          kicker="Put your history to work"
          title="Better inputs. More useful answers."
          :center="false"
        />
        <p class="max-w-sm text-base leading-relaxed text-muted">
          The same checked records power your reports and AI assistants. Every answer has somewhere
          to point back to.
        </p>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-2">
        <article class="surface result-card flex flex-col p-6 sm:p-8">
          <div
            v-v3-reveal
            class="flex items-center gap-2.5"
          >
            <UIcon
              name="i-logos-microsoft-power-bi"
              class="size-6"
              aria-hidden="true"
            />
            <h3 class="text-xl font-medium tracking-tight">
              Reports in Power BI
            </h3>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            Budget against actual by phase, service line, client or project manager. The totals hold
            up in a partners’ meeting because the records already agree with each other.
          </p>
          <figure class="mt-8 rounded-lg bg-muted p-5 ring-1 ring-default">
            <figcaption>
              <span class="block text-sm font-semibold">Fee overrun by service line</span>
              <span class="text-xs text-muted">Projects completed 2019 to 2024</span>
            </figcaption>
            <div class="tnum mt-4 grid grid-cols-2 gap-3">
              <div class="rounded-md bg-default px-3 py-2.5">
                <span class="block text-xs text-muted">Projects</span>
                <span class="display text-2xl">412</span>
              </div>
              <div class="rounded-md bg-default px-3 py-2.5">
                <span class="block text-xs text-muted">Average overrun</span>
                <span class="display text-2xl">9%</span>
              </div>
            </div>
            <ul class="tnum mt-5 space-y-3.5">
              <li
                v-for="(o, index) in overruns"
                :key="o.line"
                class="grid grid-cols-[7rem_1fr_2.5rem] items-center gap-3 text-sm"
              >
                <span class="text-toned">{{ o.line }}</span>
                <span class="h-2 rounded-sm bg-elevated">
                  <span
                    v-v3-reveal="{ preset: 'bar', delay: index * 70 }"
                    class="chart-bar block h-full rounded-sm bg-primary"
                    :style="{ width: `${(o.pct / 20) * 100}%` }"
                  />
                </span>
                <span class="text-right font-semibold">{{ o.pct }}%</span>
              </li>
            </ul>
            <p class="mt-5 text-xs text-muted">
              Sample data.
            </p>
          </figure>
        </article>

        <article class="surface result-card flex flex-col p-6 sm:p-8">
          <div
            v-v3-reveal
            class="flex items-center gap-2.5"
          >
            <UIcon
              name="i-logos-claude-icon"
              class="size-6"
              aria-hidden="true"
            />
            <UIcon
              name="i-logos-microsoft-icon"
              class="size-5"
              aria-hidden="true"
            />
            <h3 class="text-xl font-medium tracking-tight">
              Answers in Claude or Copilot
            </h3>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            Ask questions across your project history. We connect your AI assistant to your records
            through MCP, so answers come with sources you can open.
          </p>
          <figure class="mt-8 rounded-lg bg-muted p-5 ring-1 ring-default">
            <figcaption class="sr-only">
              A sample question and answer in Claude
            </figcaption>
            <p
              v-v3-reveal
              class="ml-auto max-w-xs rounded-lg rounded-br-none bg-inverted px-4 py-2.5 text-sm text-white"
            >
              Who has led water treatment projects over $500K in Alberta since 2019?
            </p>
            <div class="mt-4 text-sm leading-relaxed">
              <p>Three people have:</p>
              <ul class="mt-2 space-y-2.5">
                <li
                  v-for="(a, index) in answer"
                  :key="a.person"
                  v-v3-reveal="{ delay: 80 + index * 80 }"
                >
                  <span class="font-semibold">{{ a.person }}</span>, {{ a.project }}
                  <span class="mt-1 flex flex-wrap gap-1.5">
                    <span
                      v-for="s in a.sources"
                      :key="s"
                      class="inline-flex items-center gap-1 rounded bg-default px-1.5 py-0.5 text-[10px] font-medium text-toned ring-1 ring-default"
                    >
                      <UIcon
                        name="i-lucide-link"
                        class="size-3"
                        aria-hidden="true"
                      />{{ s }}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <p class="mt-5 text-xs text-muted">
              Sample data.
            </p>
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.unlocks-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
}
@media (max-width: 767px) {
  .unlocks-heading {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
.result-card {
  transition: border-color 180ms ease;
}
@media (hover: hover) and (pointer: fine) {
  .result-card:hover {
    border-color: var(--color-brand-200);
  }
}
</style>
