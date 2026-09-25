<script setup lang="ts">
const view = ref<'files' | 'record'>('files')
const instant = ref(false)
function selectView(value: string, event: MouseEvent) {
  instant.value = event.detail === 0
  view.value = value as 'files' | 'record'
}
const views = [
  { label: 'Before', value: 'files' },
  { label: 'After the pipeline', value: 'record' }
]

type Fact = { label: string, value: string, flag?: boolean }

const found: { source: string, icon: string, tint: string, name: string, facts: Fact[] }[] = [
  {
    source: 'Accounting export',
    icon: 'i-lucide-sheet',
    tint: 'bg-brand-50 text-brand-600',
    name: '2021-044',
    facts: [
      { label: 'Fee', value: '$1,310,000', flag: true },
      { label: 'Hours', value: '9,420', flag: true }
    ]
  },
  {
    source: 'Proposal (PDF)',
    icon: 'i-lucide-file-text',
    tint: 'bg-amber-50 text-amber-600',
    name: 'St. Mary’s Hospital Expansion',
    facts: [{ label: 'Fee', value: '$1,240,000', flag: true }]
  },
  {
    source: 'Timesheets',
    icon: 'i-lucide-clock',
    tint: 'bg-aqua-50 text-aqua-600',
    name: 'SMH Ph II',
    facts: [{ label: 'Hours', value: '9,386', flag: true }]
  },
  {
    source: 'Project sheet',
    icon: 'i-lucide-file-spreadsheet',
    tint: 'bg-violet-50 text-violet-600',
    name: 'St Marys Hosp. Phase 2',
    facts: [{ label: 'Lead', value: 'J. Okafor' }]
  },
  {
    source: 'CV, R. Singh',
    icon: 'i-lucide-user-round',
    tint: 'bg-rose-50 text-rose-600',
    name: 'Hospital expansion, Calgary (2021)',
    facts: [{ label: 'Role', value: 'Structural lead' }]
  }
]

const record = [
  { label: 'Number', value: '2021-044' },
  { label: 'Client', value: 'Bow River Health' },
  { label: 'Fee', value: '$1,310,000', confirm: 1 },
  { label: 'Hours', value: '9,420', confirm: 2 },
  { label: 'People', value: 'J. Okafor (project manager), R. Singh' },
  { label: 'Sources', value: '5 files, each linked' }
]
</script>

<template>
  <section
    id="difference"
    aria-labelledby="problem-title"
    class="section-space border-t border-default"
  >
    <div class="section-shell difference-layout">
      <div
        v-v3-reveal
        class="difference-copy"
      >
        <V3SectionHeading
          id="problem-title"
          kicker="The missing connection"
          title="One project. Five names. A familiar problem."
          :center="false"
        >
          <p>
            Your accounting system says 2021-044. The proposal says St. Mary’s. Your timesheets say
            SMH Ph II.
          </p>
          <p class="mt-4">
            Rysmaan connects the pieces, keeps the sources, and brings the disagreements to you.
          </p>
        </V3SectionHeading>
        <div class="difference-note">
          <UIcon
            name="i-lucide-git-merge"
            class="size-5 shrink-0"
            aria-hidden="true"
          /><span>One shared history for every report and answer.</span>
        </div>
      </div>
      <div
        v-v3-reveal="{ delay: 100, preset: 'settle' }"
        class="comparison surface"
        :class="{ 'is-instant': instant }"
      >
        <div class="comparison-toolbar">
          <div
            role="group"
            aria-label="Compare views"
            class="comparison-toggle"
          >
            <span
              class="comparison-indicator"
              :class="{ 'is-after': view === 'record' }"
              aria-hidden="true"
            />
            <button
              v-for="v in views"
              :key="v.value"
              type="button"
              :aria-pressed="view === v.value"
              @click="selectView(v.value, $event)"
            >
              {{ v.label }}
            </button>
          </div>
          <span class="sample-label">Illustrative example</span>
        </div>
        <div
          class="comparison-content"
          aria-live="polite"
        >
          <div
            class="comparison-panel"
            :class="{ 'is-inactive': view !== 'files' }"
            :inert="view !== 'files'"
            :aria-hidden="view !== 'files'"
          >
            <div class="comparison-column-labels">
              <span>Source</span><span>The same project, named differently</span>
            </div>
            <ul>
              <li
                v-for="f in found"
                :key="f.source"
                class="source-row"
              >
                <div class="source-label">
                  <UIcon
                    :name="f.icon"
                    class="size-4 shrink-0"
                    aria-hidden="true"
                  /><span>{{
                    f.source
                  }}</span>
                </div>
                <div>
                  <p class="text-sm font-medium leading-snug">
                    {{ f.name }}
                  </p>
                  <dl class="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                    <div
                      v-for="fact in f.facts"
                      :key="fact.label"
                      class="flex items-center gap-1.5"
                    >
                      <dt class="text-muted">
                        {{ fact.label }}
                      </dt>
                      <dd :class="fact.flag ? 'conflict-value' : 'text-toned'">
                        {{ fact.value }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            </ul>
            <div class="comparison-bottom">
              <UIcon
                name="i-lucide-circle-alert"
                class="size-4 shrink-0"
                aria-hidden="true"
              />Five
              sources. Two conflicting figures.
            </div>
          </div>
          <div
            class="comparison-panel"
            :class="{ 'is-inactive': view !== 'record' }"
            :inert="view !== 'record'"
            :aria-hidden="view !== 'record'"
          >
            <div class="merged-heading">
              <div>
                <span class="eyebrow mb-2">Connected project</span>
                <h3 class="text-lg font-medium leading-tight tracking-tight">
                  St. Mary’s Hospital Expansion, Phase 2
                </h3>
              </div>
              <span class="merged-badge"><UIcon
                name="i-lucide-check"
                class="size-3.5"
                aria-hidden="true"
              />5 merged</span>
            </div>
            <dl class="record-facts">
              <div
                v-for="(r, index) in record"
                :key="r.label"
                :style="{ '--row-delay': `${index * 20}ms` }"
              >
                <dt>{{ r.label }}</dt>
                <dd>
                  {{ r.value
                  }}<span
                    v-if="r.confirm"
                    class="conflict-value ml-1"
                    :aria-label="`See note ${r.confirm}`"
                  >{{ r.confirm }}</span>
                </dd>
              </div>
            </dl>
            <div class="confirmation-note">
              <p class="font-medium">
                Two details for you to confirm
              </p>
              <ol class="mt-2 space-y-1.5">
                <li>1. Accounting lists $1,310,000; the proposal lists $1,240,000.</li>
                <li>2. Accounting and timesheets differ by 34 hours.</li>
              </ol>
            </div>
          </div>
        </div>
        <p class="comparison-disclaimer">
          Sample data. Names and figures are made up.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.difference-layout {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  align-items: center;
  gap: 72px;
}
.difference-note {
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 13px;
  line-height: 1.5;
  color: #367c78;
  margin-top: 30px;
  padding-top: 24px;
  border-top: 1px solid var(--ui-border);
}
.comparison {
  overflow: hidden;
  box-shadow: var(--shadow-lift);
}
.comparison-toolbar {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--ui-border);
  background: #fafbfb;
  gap: 10px;
}
.comparison-toggle {
  position: relative;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  padding: 3px;
  background: #eaf0f1;
  border-radius: 7px;
}
.comparison-toggle button {
  position: relative;
  z-index: 1;
  cursor: pointer;
  padding: 7px 11px;
  font-size: 12px;
  font-weight: 500;
  color: var(--ui-text-muted);
  border-radius: 5px;
}
.comparison-toggle button[aria-pressed='true'] {
  color: var(--color-ink);
}
.sample-label {
  color: var(--ui-text-muted);
  font-size: 10px;
}
.comparison-content {
  display: grid;
  padding: 20px;
  min-height: 434px;
}
.comparison-column-labels {
  display: grid;
  grid-template-columns: 135px 1fr;
  font-size: 10px;
  color: var(--ui-text-muted);
  padding-bottom: 13px;
}
.source-row {
  display: grid;
  grid-template-columns: 135px 1fr;
  align-items: center;
  border-top: 1px solid var(--ui-border);
  min-height: 65px;
  padding: 12px 0;
}
.source-label {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 11px;
  color: var(--ui-text-muted);
}
.conflict-value {
  background: #fbf2df;
  color: #89601c;
  padding: 1px 4px;
  border-radius: 3px;
  font-variant-numeric: tabular-nums;
}
.comparison-bottom {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--ui-text-muted);
  border-top: 1px solid var(--ui-border);
  padding-top: 18px;
  font-size: 11px;
}
.comparison-disclaimer {
  padding: 12px 20px;
  border-top: 1px solid var(--ui-border);
  font-size: 10px;
  color: var(--ui-text-muted);
  background: #fafbfb;
}
.merged-heading {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.merged-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  border-radius: 4px;
  background: #eaf6f0;
  color: #337961;
  font-size: 10px;
  padding: 5px 7px;
}
.record-facts {
  margin-top: 20px;
  font-size: 12px;
}
.record-facts > div {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 10px;
  padding-block: 7px;
  border-top: 1px solid var(--ui-border);
}
.record-facts dt {
  color: var(--ui-text-muted);
}
.confirmation-note {
  margin-top: 14px;
  border-radius: 6px;
  padding: 12px;
  background: #fcf7ec;
  color: #886421;
  font-size: 11px;
}
@media (max-width: 1023px) {
  .difference-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .difference-copy {
    max-width: 560px;
  }
}
@media (max-width: 640px) {
  .comparison-toolbar {
    padding: 14px;
  }
  .sample-label {
    display: none;
  }
  .comparison-content {
    display: grid;
    padding: 16px;
    min-height: 480px;
  }
  .source-row,
  .comparison-column-labels {
    grid-template-columns: 100px 1fr;
    gap: 8px;
  }
  .source-row {
    min-height: 74px;
  }
  .source-label {
    align-items: flex-start;
    font-size: 10px;
  }
}
.comparison-indicator {
  position: absolute;
  inset: 3px auto 3px 3px;
  width: calc((100% - 6px) / 2);
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px #172c3b16;
  transition: transform 240ms var(--ease-out);
}
.comparison-indicator.is-after {
  transform: translateX(100%);
}
.comparison-panel {
  grid-area: 1 / 1;
  align-self: start;
  min-width: 0;
}
@media (prefers-reduced-motion: no-preference) {
  .comparison-panel {
    transition:
      opacity 180ms ease,
      transform 220ms var(--ease-out),
      visibility 0s;
  }
  .comparison-panel.is-inactive {
    transition:
      opacity 180ms ease,
      transform 220ms var(--ease-out),
      visibility 0s 180ms;
  }
  .record-facts > div {
    transition:
      opacity 180ms ease,
      transform 180ms var(--ease-out);
    transition-delay: var(--row-delay, 0ms);
  }
  .comparison-panel.is-inactive .record-facts > div {
    opacity: 0;
    transform: translateY(4px);
    transition-delay: 0ms;
  }
}
.comparison-panel.is-inactive {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(6px);
}
.is-instant .comparison-panel,
.is-instant .comparison-indicator,
.is-instant .record-facts > div {
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  .source-row {
    transition: background-color 160ms ease;
  }
  .source-row:hover {
    background: var(--ui-bg-muted);
  }
}
</style>
