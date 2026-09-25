<script setup lang="ts">
const { v3: site } = useAppConfig()

const sources = [
  {
    name: 'Accounting export',
    detail: 'Deltek, BQE, QuickBooks',
    icon: 'i-lucide-sheet',
    tint: 'bg-brand-50 text-brand-600'
  },
  {
    name: 'Timesheets',
    detail: 'Hours by project and phase',
    icon: 'i-lucide-clock',
    tint: 'bg-aqua-50 text-aqua-600'
  },
  {
    name: 'SharePoint and drives',
    detail: 'Project folders',
    icon: 'i-simple-icons-microsoftsharepoint',
    tint: 'bg-teal-50 text-[#038387]'
  },
  {
    name: 'Proposals and CVs',
    detail: 'PDF and Word',
    icon: 'i-lucide-file-text',
    tint: 'bg-amber-50 text-amber-600'
  }
]

const stages = [
  { name: 'Extract', detail: 'AI reads documents into set fields', icon: 'i-lucide-scan-text' },
  { name: 'Match', detail: 'Same project, person and client, merged', icon: 'i-lucide-git-merge' },
  { name: 'Check', detail: 'Conflicts go to you to confirm', icon: 'i-lucide-shield-check' }
]

const outputs = [
  { name: 'Your database', detail: 'Yours to keep', icon: 'i-logos-postgresql' },
  { name: 'Power BI', detail: 'Reports and dashboards', icon: 'i-logos-microsoft-power-bi' },
  { name: 'Claude or Copilot', detail: 'Answers through MCP', icon: 'i-logos-claude-icon' }
]

// Draw the pipes between the cards. Positions come from the rendered cards,
// so the curves stay attached at any width.
const stage = ref<HTMLElement>()
const hub = ref<HTMLElement>()
const sourceEls = ref<HTMLElement[]>([])
const outputEls = ref<HTMLElement[]>([])
const size = reactive({ w: 0, h: 0 })
const pipes = ref<string[]>([])

function curve(x1: number, y1: number, x2: number, y2: number) {
  const dx = (x2 - x1) / 2
  return `M${x1} ${y1} C${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`
}

function layout() {
  if (!stage.value || !hub.value) return
  const box = stage.value.getBoundingClientRect()
  const h = hub.value.getBoundingClientRect()
  size.w = box.width
  size.h = box.height
  const hubY = h.top + h.height / 2 - box.top
  const spread = (i: number, n: number) => (i - (n - 1) / 2) * 16

  pipes.value = [
    ...sourceEls.value.map((el, i) => {
      const r = el.getBoundingClientRect()
      return curve(
        r.right - box.left,
        r.top + r.height / 2 - box.top,
        h.left - box.left,
        hubY + spread(i, sourceEls.value.length)
      )
    }),
    ...outputEls.value.map((el, i) => {
      const r = el.getBoundingClientRect()
      return curve(
        h.right - box.left,
        hubY + spread(i, outputEls.value.length),
        r.left - box.left,
        r.top + r.height / 2 - box.top
      )
    })
  ]
}

const flowing = ref(true)
let inViewport = true
let visibilityObserver: IntersectionObserver | undefined
const updateFlow = () => {
  flowing.value = inViewport && !document.hidden
}
let observer: ResizeObserver | undefined
onMounted(() => {
  layout()
  document.fonts?.ready.then(layout)
  observer = new ResizeObserver(layout)
  if (stage.value) {
    observer.observe(stage.value)
    visibilityObserver = new IntersectionObserver(([entry]) => {
      inViewport = entry?.isIntersecting ?? false
      updateFlow()
    })
    visibilityObserver.observe(stage.value)
  }
  document.addEventListener('visibilitychange', updateFlow)
  updateFlow()
})
onBeforeUnmount(() => {
  observer?.disconnect()
  visibilityObserver?.disconnect()
  document.removeEventListener('visibilitychange', updateFlow)
})
</script>

<template>
  <section
    id="top"
    aria-labelledby="hero-title"
    class="hero-section"
    :class="{ 'flow-paused': !flowing }"
  >
    <div class="section-shell">
      <div class="hero-copy">
        <a
          href="#pilot"
          class="pilot-invitation"
        ><span class="status-dot" />Now welcoming pilot firms
          <UIcon
            name="i-lucide-arrow-up-right"
            class="size-3.5"
            aria-hidden="true"
          /></a>
        <h1 id="hero-title">
          Your project history.<br><span>Finally connected.</span>
        </h1>
        <p class="hero-description">
          Turn scattered accounting exports and project files into checked, connected records. Ready
          for Power BI and AI. Built for engineering firms.
        </p>
        <div class="mt-7 flex flex-wrap justify-center gap-3">
          <V3GradientButton
            :to="site.bookingUrl"
            label="Discuss a pilot"
            trailing-icon="i-lucide-arrow-up-right"
            size="xl"
          />
          <UButton
            to="#overview"
            label="Watch the overview"
            trailing-icon="i-lucide-play"
            size="xl"
            color="neutral"
            variant="outline"
            class="secondary-button bg-default text-default hover:bg-muted"
          />
        </div>
      </div>
      <figure class="pipeline-canvas">
        <div class="canvas-body">
          <div
            class="pipeline-labels"
            aria-hidden="true"
          >
            <span>01 / Your sources</span><span>02 / Connected by Rysmaan</span><span>03 / Ready to use</span>
          </div>
          <div
            ref="stage"
            class="relative"
          >
            <svg
              v-if="pipes.length"
              class="pointer-events-none absolute inset-0 hidden lg:block"
              :width="size.w"
              :height="size.h"
              :viewBox="`0 0 ${size.w} ${size.h}`"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="pipe"
                  x1="0"
                  y1="0"
                  :x2="size.w"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2A6FC2" />
                  <stop
                    offset="1"
                    stop-color="#13A7B5"
                  />
                </linearGradient>
              </defs>
              <path
                v-for="(d, i) in pipes"
                :key="`p${i}`"
                :d="d"
                class="pipe"
              />
              <path
                v-for="(d, i) in pipes"
                :key="`f${i}`"
                :d="d"
                class="flow"
              />
            </svg>
            <div class="pipeline-grid">
              <div>
                <p class="eyebrow mb-3 lg:hidden">
                  01 / Your sources
                </p>
                <ul class="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  <li
                    v-for="s in sources"
                    :key="s.name"
                    ref="sourceEls"
                    class="pipeline-node"
                  >
                    <span class="node-icon"><UIcon
                      :name="s.icon"
                      class="size-5"
                      aria-hidden="true"
                    /></span>
                    <span class="text-sm leading-snug"><span class="block font-medium">{{ s.name }}</span><span class="text-xs text-muted">{{ s.detail }}</span></span>
                  </li>
                </ul>
              </div>
              <UIcon
                name="i-lucide-arrow-down"
                class="mx-auto size-5 text-primary lg:hidden"
                aria-hidden="true"
              />
              <div
                ref="hub"
                class="pipeline-hub"
              >
                <div class="hub-heading">
                  <div class="flex items-center gap-2.5">
                    <V3RysmaanMark class="size-7" /><span class="text-lg font-medium tracking-tight">Rysmaan</span>
                  </div>
                  <span class="hub-badge">Runs monthly</span>
                </div>
                <p class="hub-description">
                  A clearer picture, every run.
                </p>
                <ol class="mt-5 space-y-1">
                  <li
                    v-for="st in stages"
                    :key="st.name"
                    class="hub-step"
                  >
                    <span class="hub-step-icon"><UIcon
                      :name="st.icon"
                      class="size-4"
                      aria-hidden="true"
                    /></span><span class="text-sm leading-snug"><span class="block font-medium">{{ st.name }}</span><span class="hub-detail">{{ st.detail }}</span></span>
                  </li>
                </ol>
                <div class="hub-footer">
                  <UIcon
                    name="i-lucide-check-check"
                    class="size-3.5"
                    aria-hidden="true"
                  />Every
                  record keeps its source
                </div>
              </div>
              <UIcon
                name="i-lucide-arrow-down"
                class="mx-auto size-5 text-primary lg:hidden"
                aria-hidden="true"
              />
              <div>
                <p class="eyebrow mb-3 lg:hidden">
                  03 / Ready to use
                </p>
                <ul class="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
                  <li
                    v-for="o in outputs"
                    :key="o.name"
                    ref="outputEls"
                    class="pipeline-node"
                  >
                    <span class="node-icon"><UIcon
                      :name="o.icon"
                      class="size-5"
                      aria-hidden="true"
                    /></span>
                    <span class="text-sm leading-snug"><span class="block font-medium">{{ o.name }}</span><span class="text-xs text-muted">{{ o.detail }}</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <figcaption class="canvas-caption">
          <UIcon
            name="i-lucide-workflow"
            class="size-4"
            aria-hidden="true"
          />A pipeline that works
          in the background. Your team stays in the tools they know.
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: 44px;
  background: linear-gradient(180deg, #fff 50%, #fafcfc);
}
.hero-copy {
  max-width: 840px;
  margin: 0 auto;
  text-align: center;
}
.pilot-invitation {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--ui-text-toned);
  font-size: 12px;
  padding: 6px 10px;
  border: 1px solid var(--ui-border);
  border-radius: 6px;
  background: white;
}
.status-dot {
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  background: #168978;
  border-radius: 50%;
}
h1 {
  font-size: clamp(44px, 5.2vw, 72px);
  font-weight: 500;
  line-height: 1.01;
  letter-spacing: -0.06em;
  margin-top: 26px;
  text-wrap: balance;
}
h1 > span {
  color: #277a86;
}
.hero-description {
  margin: 22px auto 0;
  max-width: 600px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--ui-text-muted);
  text-wrap: pretty;
}
.pipeline-canvas {
  margin-top: 40px;
  border: 1px solid var(--ui-border);
  border-radius: 16px;
  background: #f8fafa;
  box-shadow: 0 12px 32px -24px #172c3b33;
  overflow: hidden;
}
.canvas-body {
  padding: 22px 28px 26px;
  background-image: radial-gradient(#ccd7dd 0.65px, transparent 0.65px);
  background-size: 16px 16px;
}
.pipeline-labels,
.pipeline-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  column-gap: 64px;
  align-items: center;
  position: relative;
}
.pipeline-labels {
  margin-bottom: 18px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ui-text-muted);
}
.pipeline-labels > :nth-child(2) {
  text-align: center;
}
.pipeline-node {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 12px;
  border: 1px solid #dee5e8;
  border-radius: 9px;
  background: white;
  box-shadow: 0 2px 2px #172c3b04;
}
.node-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 6px;
  background: #f5f7f8;
  color: #506a7b;
}
.pipeline-hub {
  position: relative;
  padding: 22px;
  background: #172e3d;
  color: #fff;
  border: 1px solid #2b4656;
  border-radius: 13px;
  box-shadow:
    0 12px 24px -12px #172c3b66,
    inset 0 1px 0 #ffffff14;
}
.hub-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.hub-badge {
  color: #a9e2d5;
  font-size: 9px;
  white-space: nowrap;
  border: 1px solid #ffffff20;
  padding: 4px 6px;
  border-radius: 4px;
}
.hub-description {
  margin-top: 12px;
  font-size: 12px;
  color: #adbdc7;
}
.hub-step {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
}
.hub-step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border: 1px solid #ffffff16;
  background: #ffffff07;
  border-radius: 6px;
  color: #a3d5d6;
}
.hub-detail {
  display: block;
  font-size: 11px;
  color: #b6c5cf;
  margin-top: 2px;
}
.hub-footer {
  display: flex;
  align-items: center;
  gap: 7px;
  border-top: 1px solid #ffffff18;
  padding-top: 13px;
  margin-top: 13px;
  color: #9ed5c8;
  font-size: 10px;
}
.canvas-caption {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 14px 20px;
  border-top: 1px solid var(--ui-border);
  color: var(--ui-text-muted);
  font-size: 12px;
  background: white;
}
.pipe {
  fill: none;
  stroke: #d8e3e8;
  stroke-width: 4;
  stroke-linecap: round;
}
.flow {
  fill: none;
  stroke: url(#pipe);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 5 9;
}
@media (prefers-reduced-motion: no-preference) {
  .flow {
    animation: flow 1.1s linear infinite;
  }
}
@keyframes flow {
  from {
    stroke-dashoffset: 14;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@media (max-width: 1023px) {
  .pipeline-labels {
    display: none;
  }
  .pipeline-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .pipeline-hub {
    max-width: 400px;
    width: 100%;
    margin-inline: auto;
  }
}
@media (max-width: 640px) {
  .hero-section {
    padding-top: 38px;
  }
  .hero-description {
    font-size: 16px;
  }
  .pipeline-canvas {
    margin-top: 36px;
  }
  .canvas-body {
    padding: 24px 18px;
  }
  .canvas-caption {
    align-items: flex-start;
    font-size: 11px;
  }
  .canvas-caption > :first-child {
    flex-shrink: 0;
    margin-top: 2px;
  }
}
.flow-paused .flow {
  animation-play-state: paused;
}
</style>
