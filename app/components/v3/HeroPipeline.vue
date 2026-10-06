<script setup lang="ts">
const { v3: site } = useAppConfig()

const sources = [
  { name: 'On-Premise Server Folders', icon: 'i-lucide-folder-open' },
  { name: 'Archive Folders', icon: 'i-lucide-archive' },
  { name: 'SharePoint & Cloud Libraries', icon: 'i-lucide-cloud' },
  { name: 'Outlook & Teams Archives', icon: 'i-lucide-messages-square' }
]
const services = [
  { name: 'LLMs', icon: 'i-lucide-sparkles', tone: 'violet' },
  { name: 'Analytics', icon: 'i-lucide-chart-no-axes-combined', tone: 'blue' },
  { name: 'Knowledge hub', icon: 'i-lucide-library-big', tone: 'amber' }
]
const canvas = ref<HTMLElement>()
const motionPaused = ref(false)
const inView = ref(false)
const tabVisible = ref(true)
const motionRunning = computed(() => !motionPaused.value && inView.value && tabVisible.value)
let visibilityObserver: IntersectionObserver | undefined
function updateVisibility() {
  tabVisible.value = !document.hidden
}
onMounted(() => {
  updateVisibility()
  document.addEventListener('visibilitychange', updateVisibility)
  visibilityObserver = new IntersectionObserver(([entry]) => {
    inView.value = entry?.isIntersecting ?? false
  }, { threshold: 0.15 })
  if (canvas.value) visibilityObserver.observe(canvas.value)
})
onBeforeUnmount(() => {
  visibilityObserver?.disconnect()
  document.removeEventListener('visibilitychange', updateVisibility)
})
</script>

<template>
  <section
    id="top"
    aria-labelledby="hero-title"
    class="hero-section"
  >
    <div class="section-shell hero-shell">
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
          Your Entire Project History.<br><span>Unified into a Single Source of Truth.</span>
        </h1>
        <p class="hero-description">
          Rysmaan connects your firm’s fragmented archives, server folders, SharePoint, emails, and other databases into a single, searchable knowledge base. Instantly extract historical metrics to accelerate non-billable tasks and day-to-day engineering work—without changing how you currently store your documents.
        </p>
        <div class="mt-7 flex flex-wrap justify-center gap-3">
          <V3GradientButton
            :to="site.bookingUrl"
            label="Discuss a pilot"
            trailing-icon="i-lucide-arrow-up-right"
            size="xl"
          />
          <UButton
            v-if="site.showOverviewSections"
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
      <figure
        ref="canvas"
        class="pipeline-canvas"
        :class="{ 'motion-running': motionRunning }"
        aria-label="On-premise server folders, archive folders, SharePoint and cloud libraries, and Outlook and Teams archives flow through Rysmaan’s non-invasive metadata ingestion into structured, connected data for LLMs, analytics and a knowledge hub."
      >
        <div class="pipeline-grid">
          <div class="sources-column">
            <p class="stage-label">
              Your sources
            </p>
            <ul class="source-list">
              <li
                v-for="source in sources"
                :key="source.name"
                class="source-card"
              >
                <span class="source-icon"><UIcon
                  :name="source.icon"
                  aria-hidden="true"
                /></span>
                <span>{{ source.name }}</span>
                <span
                  class="source-port"
                  aria-hidden="true"
                />
              </li>
            </ul>
          </div>

          <div class="rysmaan-column">
            <p class="stage-label">
              Organized by Rysmaan
            </p>
            <div class="pipeline-hub">
              <div class="hub-brand">
                <span class="hub-logo"><V3RysmaanMark class="size-8" /></span>
                <span>rysmaan</span>
              </div>
              <div
                class="hub-organization"
                aria-hidden="true"
              >
                <span
                  v-for="i in 9"
                  :key="i"
                  :style="{ '--i': i }"
                />
              </div>
              <p class="hub-purpose">
                Non-Invasive Metadata Ingestion
              </p>
            </div>
          </div>

          <div class="data-column">
            <p class="stage-label">
              Your connected data
            </p>
            <div class="data-card">
              <span
                class="data-connection"
                aria-hidden="true"
              ><span class="connection-packet" /></span>
              <svg
                class="data-illustration"
                viewBox="0 0 160 76"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M27 20H133M27 56H133M27 20V56M80 20V56M133 20V56"
                  stroke="#8edbcd"
                  stroke-width="1.5"
                />
                <circle
                  class="graph-packet"
                  cx="40"
                  cy="20"
                  r="2.5"
                  fill="#d6fff0"
                />
                <circle
                  class="graph-packet graph-packet-bottom"
                  cx="40"
                  cy="56"
                  r="2.5"
                  fill="#d6fff0"
                />
                <g
                  v-for="(x, i) in [13, 66, 119]"
                  :key="x"
                  :style="{ '--record-delay': `${i * 160}ms` }"
                >
                  <g
                    v-for="y in [8, 44]"
                    :key="y"
                  >
                    <rect
                      :x="x"
                      :y="y"
                      width="28"
                      height="24"
                      rx="5"
                      fill="#effdf9"
                      stroke="#b0e7db"
                    />
                    <rect
                      class="record-highlight"
                      :x="x"
                      :y="y"
                      width="28"
                      height="24"
                      rx="5"
                      fill="#c5f8e7"
                      stroke="#effff8"
                    />
                    <rect
                      :x="x + 6"
                      :y="y + 6"
                      width="5"
                      height="5"
                      rx="1.5"
                      :fill="['#397ccb', '#139a8c', '#8c64cb'][i]"
                    />
                    <path
                      :d="`M${x + 6} ${y + 17}h16`"
                      stroke="#9ecfc4"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </svg>
              <div class="data-heading">
                <h2>Connected<br><span>knowledge</span></h2>
                <p>Structured. Ready to use.</p>
              </div>
            </div>
          </div>
          <div class="outputs-column">
            <p class="stage-label">
              Ready to use
            </p>
            <ul
              class="service-list"
              aria-label="Connect your data to"
            >
              <li
                v-for="(service, i) in services"
                :key="service.name"
                class="service-card"
                :class="`service-card--${service.tone}`"
                :style="{ '--service-delay': `${i * 180}ms` }"
              >
                <span
                  class="service-signal"
                  aria-hidden="true"
                />
                <div
                  class="service-preview"
                  aria-hidden="true"
                >
                  <div
                    v-if="service.name === 'LLMs'"
                    class="answer-preview"
                  >
                    <UIcon name="i-lucide-sparkles" />
                    <div><span /><span /><span /></div>
                  </div>
                  <div
                    v-else-if="service.name === 'Analytics'"
                    class="chart-preview"
                  >
                    <span
                      v-for="height in [35, 62, 48, 85, 70, 100]"
                      :key="height"
                      :style="{ height: `${height}%` }"
                    />
                  </div>
                  <div
                    v-else
                    class="library-preview"
                  >
                    <span
                      v-for="n in 3"
                      :key="n"
                    ><i /><i /></span>
                  </div>
                </div>
                <span class="service-name"><UIcon
                  :name="service.icon"
                  aria-hidden="true"
                />{{ service.name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <figcaption class="canvas-caption">
          <button
            class="motion-toggle"
            type="button"
            :aria-label="motionPaused ? 'Play pipeline animation' : 'Pause pipeline animation'"
            @click="motionPaused = !motionPaused"
          >
            <UIcon
              :name="motionPaused ? 'i-lucide-play' : 'i-lucide-pause'"
              aria-hidden="true"
            />
          </button>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: 44px;
}
.hero-shell { max-width: 1480px; }
.hero-copy {
  max-width: 1080px;
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
  color: #146bb0;
  background: linear-gradient(105deg, #2659b5 12%, #087f79 88%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-description {
  margin: 22px auto 0;
  max-width: 840px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--ui-text-muted);
  text-wrap: pretty;
}
.pipeline-canvas {
  margin-top: 56px;
  overflow: hidden;
  border: 1px solid #d5e0ef;
  border-radius: 18px;
  background: #f7faff;
  box-shadow: 0 16px 40px -26px #24549b40;
}
.pipeline-grid {
  --connector: #90afce;
  --gap: clamp(28px, 3vw, 48px);
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.15fr 1.3fr;
  justify-content: center;
  gap: var(--gap);
  padding: 44px 40px 42px;
  background: radial-gradient(ellipse at 34% 50%, #d8e7ffb3, transparent 52%),
    radial-gradient(ellipse at 71% 60%, #d4f1e9b3, transparent 48%),
    radial-gradient(#bacbe2 0.65px, transparent 0.65px);
  background-size: auto, auto, 16px 16px;
}
.pipeline-grid > div { min-width: 0; }
.rysmaan-column, .data-column { display: flex; flex-direction: column; }
.stage-label {
  margin-bottom: 28px;
  color: #64717b;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: .12em;
  text-transform: uppercase;
}
.rysmaan-column .stage-label, .data-column .stage-label { text-align: center; }
.rysmaan-column .stage-label { color: #2e60a8; }
.data-column .stage-label { color: #14776c; }
.source-list {
  position: relative;
  display: grid;
  align-content: center;
  gap: 14px;
  height: 348px;
}
.source-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 76px;
  padding: 12px;
  border: 1px solid #cbdcf1;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 3px 8px #315da308;
  font-size: 13px;
  line-height: 1.4;
  font-weight: 500;
}
.source-icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 7px;
  color: #3d64bc;
  background: #e8efff;
  font-size: 22px;
  flex-shrink: 0;
}
.source-card:last-child .source-icon { color: #057d9d; background: #ddf4fc; }
.source-port { position: absolute; right: -3px; width: 5px; height: 5px; border-radius: 50%; background: #6b9ccc; }
.source-card::after { content: ''; position: absolute; left: 100%; top: 50%; width: calc(var(--gap) / 2); height: 52px; border-top: 1px solid var(--connector); border-right: 1px solid var(--connector); border-top-right-radius: 12px; }
.source-card:last-child::after { top: auto; bottom: 50%; border-top: 0; border-bottom: 1px solid var(--connector); border-top-right-radius: 0; border-bottom-right-radius: 12px; }
.pipeline-hub {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 270px;
  margin-top: 39px;
  padding: 16px 12px;
  border: 1px solid #326cc2;
  border-radius: 14px;
  background: linear-gradient(145deg, #173e88, #216bc0);
  box-shadow: 0 10px 24px -12px #1e56aa88, inset 0 1px 0 #ffffff30;
  color: white;
  text-align: center;
}
.pipeline-hub::before { content: ''; position: absolute; top: 50%; right: 100%; width: calc(var(--gap) / 2); border-top: 1px solid var(--connector); }
.hub-brand { display: flex; align-items: center; gap: 10px; font-size: 28px; font-weight: 600; letter-spacing: -.055em; }
.hub-logo { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 10px; background: #f7fbfc; }
.hub-logo svg { width: 36px; height: 36px; }
.hub-organization { display: grid; grid-template-columns: repeat(3, 9px); gap: 5px; margin: 24px 0 20px; transform: rotate(-8deg); }
.hub-organization span { width: 9px; height: 9px; border-radius: 2px; background: #7ce6d6; }
.hub-organization span:nth-child(3n + 1) { background: #c1dcff; }
.hub-purpose { max-width: 185px; font-size: 16px; line-height: 1.45; color: #f4f8ff; }
.data-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 270px;
  margin-top: 39px;
  padding: 15px 12px;
  border: 1px solid #238f82;
  border-radius: 14px;
  background: linear-gradient(145deg, #105f5c, #087368);
  color: #fff;
  box-shadow: 0 10px 24px -12px #13756877, inset 0 1px 0 #ffffff30;
  text-align: center;
}
.data-heading p { margin-top: 14px; font-size: 13px; color: #e0fff5; }
.data-card h2 { font-size: 28px; font-weight: 500; letter-spacing: -.035em; line-height: 1.15; }
.data-card h2 span { color: #bdffe6; }
.data-illustration { display: block; width: 100%; max-width: 190px; height: 76px; margin-bottom: 14px; flex-shrink: 0; }
.data-connection { position: absolute; top: 50%; right: 100%; width: var(--gap); height: 1px; background: var(--connector); }
.data-connection::after { content: ''; position: absolute; top: -3px; right: 3px; width: 6px; height: 6px; border-top: 1px solid #428bac; border-right: 1px solid #428bac; transform: rotate(45deg); }
.connection-packet { position: absolute; left: 0; top: -1px; width: 12px; height: 3px; border-radius: 3px; background: #237cdc; opacity: 0; }
.graph-packet, .record-highlight { opacity: 0; }
.service-list { position: relative; display: grid; gap: 18px; }
.service-list::before { content: ''; position: absolute; top: 52px; bottom: 52px; left: calc(var(--gap) / -2); width: 12px; border: 1px solid var(--connector); border-right: 0; border-radius: 12px 0 0 12px; }
.service-list::after { content: ''; position: absolute; top: 50%; right: 100%; width: var(--gap); border-top: 1px solid var(--connector); }
.service-card--violet { --service-accent: #7950c6; --service-ink: #5c3f8c; --service-tint: #f6f1ff; --service-border: #dbcbef; --service-soft: #ede2ff; --service-mid: #ba9ae2; }
.service-card--blue { --service-accent: #307bd4; --service-ink: #255b96; --service-tint: #eff6ff; --service-border: #c6dcf4; --service-soft: #e0edff; --service-mid: #8cb6e6; }
.service-card--amber { --service-accent: #b47720; --service-ink: #86591e; --service-tint: #fff8ed; --service-border: #ecd8b6; --service-soft: #fff0d5; --service-mid: #d8b170; }
.service-card { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 12px; height: 104px; min-width: 0; padding: 16px; border: 1px solid var(--service-border); border-radius: 10px; background: linear-gradient(110deg, #fff, var(--service-tint)); box-shadow: 0 4px 12px #25446d08; }
.service-card::before { content: ''; position: absolute; top: 50%; right: 100%; width: calc(var(--gap) / 2 - 12px); border-top: 1px solid var(--connector); }
.service-signal { position: absolute; inset: -1px; border: 1px solid var(--service-accent); border-radius: inherit; box-shadow: 0 0 12px var(--service-soft); opacity: 0; pointer-events: none; }
.service-preview { order: 2; flex-shrink: 0; width: clamp(56px, 6vw, 88px); height: 48px; display: flex; align-items: center; }
.service-name { display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 14px; font-weight: 500; color: var(--service-ink); white-space: nowrap; }
.service-name > :first-child { font-size: 18px; color: var(--service-accent); }
.answer-preview { display: flex; gap: 7px; width: 100%; padding: 9px; border: 1px solid var(--service-border); border-radius: 6px; background: var(--service-soft); color: var(--service-accent); }
.answer-preview > :first-child { flex-shrink: 0; font-size: 12px; }
.answer-preview div { flex: 1; padding-top: 3px; }
.answer-preview div span { display: block; height: 3px; margin-bottom: 4px; border-radius: 3px; background: var(--service-mid); }
.answer-preview div span:nth-child(2) { width: 85%; }
.answer-preview div span:last-child { width: 58%; margin-bottom: 0; }
.chart-preview { display: flex; align-items: flex-end; gap: 5px; width: 100%; height: 100%; padding: 0 8px 2px; border-bottom: 1px solid var(--service-border); }
.chart-preview span { flex: 1; max-height: 48px; border-radius: 3px 3px 0 0; background: linear-gradient(var(--service-accent), var(--service-mid)); }
.library-preview { display: flex; gap: 5px; width: 100%; }
.library-preview > span { flex: 1; height: 46px; padding: 9px 6px; border: 1px solid var(--service-border); border-radius: 5px; background: var(--service-soft); }
.library-preview i { display: block; height: 3px; margin-bottom: 5px; border-radius: 2px; background: var(--service-mid); }
.library-preview i:first-child { width: 8px; height: 8px; border-radius: 2px; background: var(--service-accent); }
.canvas-caption { position: relative; display: flex; align-items: center; justify-content: center; gap: 16px; padding: 18px 48px; border-top: 1px solid #e0e7e9; background: #ffffffb3; text-align: center; font-size: 13px; color: #64717b; }
.motion-toggle { position: absolute; right: 12px; display: grid; place-items: center; width: 30px; height: 30px; border: 1px solid #dce6e5; border-radius: 6px; background: white; color: #628185; cursor: pointer; }
.motion-toggle:focus-visible { outline: 2px solid #277a86; outline-offset: 3px; }
.motion-toggle:active { transform: scale(.96); }
@media (prefers-reduced-motion: no-preference) {
  .connection-packet { animation: feed-data 7s cubic-bezier(.4, 0, .2, 1) infinite; }
  .hub-organization { animation: organize 7s cubic-bezier(.4, 0, .2, 1) infinite; }
  .graph-packet { animation: connect-records 7s cubic-bezier(.4, 0, .2, 1) infinite; }
  .graph-packet-bottom { animation-delay: 350ms; }
  .record-highlight { animation: highlight-record 7s ease infinite; animation-delay: var(--record-delay); }
  .service-signal { animation: highlight-service 7s ease infinite; animation-delay: var(--service-delay); }
  .pipeline-canvas :is(.connection-packet, .hub-organization, .graph-packet, .record-highlight, .service-signal) { animation-play-state: paused; }
  .motion-running :is(.connection-packet, .hub-organization, .graph-packet, .record-highlight, .service-signal) { animation-play-state: running; }
}
@keyframes feed-data {
  0%, 8% { opacity: 0; transform: translateX(0); }
  12% { opacity: 1; }
  25% { opacity: 1; transform: translateX(calc(var(--gap) - 14px)); }
  28%, 100% { opacity: 0; transform: translateX(calc(var(--gap) - 14px)); }
}
@keyframes organize { 0%, 5%, 90%, 100% { transform: rotate(-8deg); } 15%, 75% { transform: rotate(0); } }
@keyframes connect-records { 0%, 28% { opacity: 0; transform: translateX(0); } 32% { opacity: 1; } 48% { opacity: 1; transform: translateX(26px); } 50%, 100% { opacity: 0; transform: translateX(26px); } }
@keyframes highlight-record { 0%, 25%, 65%, 100% { opacity: 0; } 38%, 50% { opacity: 1; } }
@keyframes highlight-service { 0%, 52%, 88%, 100% { opacity: 0; } 63%, 73% { opacity: 1; } }
@media (min-width: 1024px) and (max-width: 1150px) {
  .pipeline-grid { --gap: 24px; grid-template-columns: 1fr 1.15fr 1.15fr 1.3fr; padding-inline: 24px; }
  .stage-label { font-size: 10px; }
  .source-card { font-size: 12px; }
  .source-icon { width: 32px; height: 32px; font-size: 19px; }
  .hub-brand { font-size: 24px; gap: 7px; }
  .hub-logo { width: 34px; height: 34px; }
  .hub-purpose { font-size: 14px; }
  .data-card h2 { font-size: 25px; }
  .data-heading p { font-size: 11px; }
  .service-name { font-size: 11px; gap: 5px; }
  .source-card { gap: 7px; padding-inline: 9px; }
  .service-card { padding-inline: 10px; gap: 6px; }
  .service-preview { width: 55px; }
}
@media (max-width: 1023px) {
  .pipeline-grid { grid-template-columns: 1fr; gap: 36px; padding: 36px 24px; }
  .pipeline-grid > div { width: 100%; max-width: 440px; margin-inline: auto; }
  .stage-label { text-align: center; margin-bottom: 14px; }
  .source-list { height: auto; grid-template-columns: 1fr 1fr; gap: 12px; }
  .source-card { justify-content: center; }
  .source-port, .source-card::after, .pipeline-hub::before { display: none; }
  .pipeline-hub, .data-card { width: min(100%, 290px); height: 270px; padding: 20px 16px; }
  .pipeline-hub { margin: 28px auto 12px; }
  .data-card { margin: 0 auto; }
  .pipeline-hub::after { content: ''; position: absolute; bottom: calc(100% + 1px); left: 50%; height: 20px; border-left: 1px solid var(--connector); }
  .rysmaan-column .stage-label, .outputs-column .stage-label { display: none; }
  .data-connection { top: -68px; right: auto; left: 50%; width: 1px; height: 28px; }
  .data-connection::after { top: auto; bottom: 0; left: -3px; transform: rotate(135deg); }
  .connection-packet { display: none; }
  .service-list { grid-template-columns: 1fr 1fr 1.15fr; gap: 10px; padding-top: 14px; }
  .service-list::before { top: -36px; bottom: auto; left: 50%; height: 37px; width: 0; border: 0; border-left: 1px solid var(--connector); border-radius: 0; }
  .service-list::after { top: 0; right: 18%; left: 16%; width: auto; }
  .service-card { height: auto; flex-direction: column; gap: 10px; padding: 12px 8px; }
  .service-card::before { top: auto; bottom: 100%; right: auto; left: 50%; width: 0; height: 15px; border: 0; border-left: 1px solid var(--connector); }
  .service-preview { order: 0; width: 100%; max-width: 90px; }
}
@media (max-width: 640px) {
  .hero-section { padding-top: 38px; }
  .hero-description { font-size: 16px; }
  .pipeline-canvas { margin-top: 44px; }
  .pipeline-grid { padding: 24px 14px; }
  .source-card { gap: 7px; padding-inline: 7px; font-size: 11px; }
  .stage-label { font-size: 11px; }
  .hub-purpose { font-size: 15px; }
  .source-icon { width: 25px; height: 28px; font-size: 16px; }
  .service-list { gap: 7px; }
  .service-card { padding: 10px 6px; }
  .service-name { flex-direction: column; gap: 5px; font-size: 10px; }
  .service-preview { height: 33px; }
  .chart-preview { gap: 3px; padding-inline: 2px; }
  .chart-preview span { max-height: 30px; }
  .answer-preview { padding: 6px 4px; gap: 4px; }
  .library-preview { gap: 3px; }
  .library-preview > span { padding: 5px 3px; height: 30px; }
  .canvas-caption { font-size: 11px; padding-inline: 25px 48px; text-wrap: balance; }
}
@media (prefers-reduced-motion: reduce) { .motion-toggle { display: none; } }
@media (forced-colors: active) {
  h1 > span { background: none; -webkit-text-fill-color: currentColor; }
}
</style>
