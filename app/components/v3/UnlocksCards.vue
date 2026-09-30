<script setup lang="ts">
const projectCounts = [
  { line: 'Buildings', count: 168 },
  { line: 'Transportation', count: 112 },
  { line: 'Healthcare', count: 76 },
  { line: 'Water', count: 56 }
]

const answer = [
  {
    person: 'Dana Whitford',
    project: 'Foothills Water Treatment Upgrade, 2022',
    sources: ['Project brief', 'CV']
  },
  {
    person: 'Marc Tremblay',
    project: 'Red Deer Water Treatment Plant, 2021',
    sources: ['Project sheet', 'CV']
  },
  {
    person: 'Aisha Rahman',
    project: 'Cochrane Wastewater Treatment Upgrade, 2023',
    sources: ['Project report, p. 9', 'CV']
  }
]
</script>

<template>
  <section
    id="unlocks"
    aria-labelledby="unlocks-title"
    class="section-space bg-muted"
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
          Put the knowledge in your folders and SharePoint to work in reports and AI answers.
          Every record points back to its source document.
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
            See your past projects by sector, client, location or project lead. Build a picture of
            your firm’s experience from the documents you already have.
          </p>
          <figure class="mt-8 rounded-lg bg-muted p-5 ring-1 ring-default">
            <figcaption>
              <span class="block text-sm font-semibold">Project experience by sector</span>
              <span class="text-xs text-muted">Projects completed 2019 to 2024</span>
            </figcaption>
            <div class="tnum mt-4 grid grid-cols-2 gap-3">
              <div class="rounded-md bg-default px-3 py-2.5">
                <span class="block text-xs text-muted">Projects</span>
                <span class="display text-2xl">412</span>
              </div>
              <div class="rounded-md bg-default px-3 py-2.5">
                <span class="block text-xs text-muted">Sectors</span>
                <span class="display text-2xl">4</span>
              </div>
            </div>
            <ul class="tnum mt-5 space-y-3.5">
              <li
                v-for="(project, index) in projectCounts"
                :key="project.line"
                class="grid grid-cols-[7rem_1fr_2.5rem] items-center gap-3 text-sm"
              >
                <span class="text-toned">{{ project.line }}</span>
                <span class="h-2 rounded-sm bg-elevated">
                  <span
                    v-v3-reveal="{ preset: 'bar', delay: index * 70 }"
                    class="chart-bar block h-full rounded-sm bg-primary"
                    :style="{ width: `${(project.count / 180) * 100}%` }"
                  />
                </span>
                <span class="text-right font-semibold">{{ project.count }}</span>
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
            Find relevant projects and people for your next project. Ask your AI assistant about
            your project history, with source documents you can open.
          </p>
          <figure class="mt-8 rounded-lg bg-muted p-5 ring-1 ring-default">
            <figcaption class="sr-only">
              A sample question and answer in Claude
            </figcaption>
            <p
              v-v3-reveal
              class="ml-auto max-w-xs rounded-lg rounded-br-none bg-inverted px-4 py-2.5 text-sm text-white"
            >
              Who has led water treatment projects in Alberta since 2019?
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
