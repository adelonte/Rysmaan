<script setup lang="ts">
const steps = [
  {
    title: 'Start with the files you have',
    body: 'Choose the folders and cloud drives to include. We read the agreed sources, leaving your original files in place.',
    icon: 'i-lucide-folder-open',
    label: 'Connect your sources',
    outcome: 'A clear starting point, without changing how your team works.'
  },
  {
    title: 'Find the information that matters',
    body: 'AI reads the content and identifies projects, people, clients, and experience. Each detail keeps a reference to its source.',
    icon: 'i-lucide-scan-text',
    label: 'Read and label',
    outcome: 'Useful information, with the evidence behind it.'
  },
  {
    title: 'Bring the pieces together',
    body: 'Custom algorithms and AI standardize names, suggest matches, and connect related information across your files.',
    icon: 'i-lucide-git-merge',
    label: 'Clean and connect',
    outcome: 'A shared picture of your projects, people, and experience.'
  },
  {
    title: 'Keep your team in the loop',
    body: 'Uncertain matches and conflicting details are flagged for review. Your team decides what belongs in the final record.',
    icon: 'i-lucide-shield-check',
    label: 'Review what needs context',
    outcome: 'Human judgment where it matters, with the source at hand.'
  },
  {
    title: 'Put your knowledge to work',
    body: 'The result is structured data you own, ready to connect to LLMs, analytics, and a knowledge hub.',
    icon: 'i-lucide-network',
    label: 'Make it useful',
    outcome: 'One connected foundation for the tools your team uses.'
  }
]
const active = ref(0)
const current = computed(() => steps[active.value]!)
</script>

<template>
  <section
    id="how-it-works"
    class="section-space"
    aria-labelledby="pipeline-steps-title"
  >
    <div class="section-shell">
      <div class="section-intro">
        <div>
          <p class="eyebrow">
            How it works
          </p>
          <h2
            id="pipeline-steps-title"
            class="section-title"
          >
            From scattered files<br>to usable knowledge.
          </h2>
        </div>
        <p class="intro-description">
          Custom algorithms and AI do the heavy lifting. Your team reviews the decisions that need context.
        </p>
      </div>

      <div class="steps-layout">
        <ol
          class="steps-list"
          aria-label="Explore the pipeline"
        >
          <li
            v-for="(step, i) in steps"
            :key="step.title"
          >
            <button
              :id="`pipeline-step-${i}`"
              type="button"
              class="step-button"
              :class="{ selected: active === i }"
              :aria-pressed="active === i"
              aria-controls="pipeline-example"
              @click="active = i"
            >
              <span class="step-number">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="step-copy">
                <span class="step-title">{{ step.title }}</span>
                <span class="step-body">{{ step.body }}</span>
              </span>
              <UIcon
                name="i-lucide-arrow-up-right"
                class="step-arrow"
                aria-hidden="true"
              />
            </button>
            <a
              v-if="active === i"
              href="#pipeline-example"
              class="mobile-example-link"
            >View this step’s example <UIcon
              name="i-lucide-arrow-down"
              aria-hidden="true"
            /></a>
          </li>
        </ol>

        <p
          class="sr-only"
          aria-live="polite"
        >
          {{ current.label }}. {{ current.outcome }}
        </p>

        <div
          id="pipeline-example"
          class="example-panel"
          role="region"
          :aria-labelledby="`pipeline-step-${active}`"
        >
          <div class="example-toolbar">
            <span class="example-brand"><V3RysmaanMark class="size-5" />Inside the pipeline</span>
            <span>Illustrative example</span>
          </div>
          <div class="example-content">
            <div class="example-heading">
              <span class="example-step-icon"><UIcon
                :name="current.icon"
                aria-hidden="true"
              /></span>
              <div><p>Step {{ String(active + 1).padStart(2, '0') }} / 05</p><h3>{{ current.label }}</h3></div>
            </div>

            <div class="example-scene">
              <div
                v-if="active === 0"
                class="sources-example"
              >
                <div class="source-location">
                  <UIcon
                    name="i-lucide-folder-open"
                    aria-hidden="true"
                  /><span>File systems</span><span class="scope-badge">Read-only</span>
                </div>
                <div class="folder-tree">
                  <div
                    v-for="folder in ['Project archive', 'Project reports', 'Team experience']"
                    :key="folder"
                  >
                    <UIcon
                      name="i-lucide-folder-open"
                      aria-hidden="true"
                    /><span>{{ folder }}</span><UIcon
                      name="i-lucide-check"
                      class="included"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div class="source-location cloud-location">
                  <UIcon
                    name="i-lucide-cloud"
                    aria-hidden="true"
                  /><span>Cloud drives</span><span class="scope-badge">Read-only</span>
                </div>
                <p class="scene-note">
                  You choose what’s included.
                </p>
              </div>

              <div
                v-else-if="active === 1"
                class="reading-example"
              >
                <div class="document-excerpt">
                  <p class="mini-label">
                    From a project summary
                  </p><p>“The <mark>St. Mary’s Hospital</mark> expansion was delivered by <mark>Alex Chen</mark> for <mark>North Health</mark>.”</p>
                </div>
                <div
                  class="extraction-arrow"
                  aria-hidden="true"
                >
                  <UIcon name="i-lucide-arrow-down" />
                </div>
                <dl class="extracted-fields">
                  <div><dt>Project</dt><dd>St. Mary’s Hospital</dd></div><div><dt>Person</dt><dd>Alex Chen</dd></div><div><dt>Client</dt><dd>North Health</dd></div>
                </dl>
                <p class="source-reference">
                  <UIcon
                    name="i-lucide-link"
                    aria-hidden="true"
                  />Linked to the original passage
                </p>
              </div>

              <div
                v-else-if="active === 2"
                class="matching-example"
              >
                <p class="mini-label">
                  Different names across your files
                </p>
                <div class="alias-list">
                  <span>St. Mary’s Hospital</span><span>SMH Phase II</span><span>2021-044</span>
                </div>
                <div
                  class="merge-bridge"
                  aria-hidden="true"
                >
                  <UIcon name="i-lucide-git-merge" />
                </div>
                <div class="matched-record">
                  <span class="record-icon"><UIcon
                    name="i-lucide-building-2"
                    aria-hidden="true"
                  /></span><div><strong>St. Mary’s Hospital</strong><p>Project 2021-044</p></div><span class="suggested-badge">Suggested match</span>
                </div>
                <div class="related-records">
                  <span>North Health <small>Client</small></span><span>Alex Chen <small>Project team</small></span>
                </div>
                <p class="scene-note">
                  Project details help establish what belongs together.
                </p>
              </div>

              <div
                v-else-if="active === 3"
                class="review-example"
              >
                <div class="review-heading">
                  <UIcon
                    name="i-lucide-circle-alert"
                    aria-hidden="true"
                  /><span>Two sources. Different dates.</span>
                </div>
                <div class="conflicting-values">
                  <div>
                    <p class="mini-label">
                      Project plan
                    </p><strong>June 2023</strong><span>Expected completion</span>
                  </div><div>
                    <p class="mini-label">
                      Closeout report
                    </p><strong>September 2023</strong><span>Reported completion</span>
                  </div>
                </div>
                <div class="review-note">
                  <UIcon
                    name="i-lucide-eye"
                    aria-hidden="true"
                  /><div><strong>Your team reviews the evidence</strong><p>Check the context before confirming the project’s completion date.</p></div>
                </div>
                <p class="review-status">
                  <span />Awaiting a decision
                </p>
              </div>

              <div
                v-else
                class="outputs-example"
              >
                <div class="ready-record">
                  <div>
                    <span class="mini-label">Connected project record</span><UIcon
                      name="i-lucide-check-check"
                      aria-hidden="true"
                    />
                  </div><h4>St. Mary’s Hospital</h4><p>2021-044 <span>·</span> North Health</p><div class="record-tags">
                    <span>Project team</span><span>Experience</span><span>Sources</span>
                  </div>
                </div>
                <div
                  class="output-bridge"
                  aria-hidden="true"
                />
                <div class="example-outputs">
                  <span><UIcon
                    name="i-lucide-sparkles"
                    aria-hidden="true"
                  />LLMs</span><span><UIcon
                    name="i-lucide-chart-no-axes-combined"
                    aria-hidden="true"
                  />Analytics</span><span><UIcon
                    name="i-lucide-library-big"
                    aria-hidden="true"
                  />Knowledge hub</span>
                </div>
                <p class="scene-note">
                  Your data, ready for the next question.
                </p>
              </div>
            </div>
          </div>
          <div class="example-outcome">
            <UIcon
              name="i-lucide-check"
              aria-hidden="true"
            /><p>{{ current.outcome }}</p>
          </div>
          <div
            class="example-pagination"
            aria-label="Example navigation"
          >
            <span>{{ active + 1 }} of {{ steps.length }}</span>
            <button
              type="button"
              :disabled="active === 0"
              aria-label="Previous pipeline step"
              @click="active--"
            >
              <UIcon
                name="i-lucide-arrow-up-right"
                class="previous-arrow"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              :disabled="active === steps.length - 1"
              aria-label="Next pipeline step"
              @click="active++"
            >
              <UIcon
                name="i-lucide-arrow-up-right"
                class="next-arrow"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-intro { display: flex; align-items: flex-end; justify-content: space-between; gap: 48px; }
.section-title { margin-top: 18px; }
.intro-description { max-width: 330px; color: #64717b; font-size: 16px; line-height: 1.7; text-wrap: pretty; }
.steps-layout { display: grid; grid-template-columns: 1fr 1fr; align-items: start; gap: 64px; margin-top: 48px; }
.steps-list { display: grid; gap: 8px; }
.step-button { display: flex; align-items: flex-start; gap: 16px; width: 100%; padding: 20px 18px; border: 1px solid transparent; border-radius: 12px; text-align: left; cursor: pointer; background: transparent; }
.step-button.selected { background: #f0f6ff; border-color: #d3e1f6; }
.step-number { flex-shrink: 0; display: grid; place-items: center; width: 32px; height: 32px; margin-top: 1px; border: 1px solid #e0e6eb; border-radius: 9px; font-size: 11px; font-weight: 500; font-variant-numeric: tabular-nums; color: #7a8791; background: #fff; }
.selected .step-number { color: #fff; background: #2868b5; border-color: #2868b5; box-shadow: 0 3px 7px #2868b522; }
.step-copy { flex: 1; min-width: 0; }
.step-title { display: block; font-size: 17px; font-weight: 500; line-height: 1.4; letter-spacing: -.02em; }
.selected .step-title { color: #205797; }
.step-body { display: block; margin-top: 7px; font-size: 13px; line-height: 1.7; color: #64717b; }
.step-arrow { flex-shrink: 0; margin-top: 6px; color: #2a6fc2; opacity: 0; font-size: 15px; }
.selected .step-arrow { opacity: 1; }
.mobile-example-link { display: none; }
.example-panel { position: sticky; top: 100px; border: 1px solid #d8e4e8; border-radius: 18px; background: linear-gradient(145deg, #f7faff, #f0f8f5); box-shadow: 0 18px 40px -28px #244b6544; overflow: hidden; }
.example-toolbar { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 17px 22px; border-bottom: 1px solid #e1e9ed; font-size: 10px; color: #71838f; background: #ffffff99; }
.example-brand { display: flex; align-items: center; gap: 7px; color: #415868; font-size: 11px; font-weight: 500; }
.example-content { padding: 28px; }
.example-heading { display: flex; align-items: center; gap: 12px; margin-bottom: 26px; }
.example-step-icon { display: grid; place-items: center; width: 42px; height: 42px; border: 1px solid #d2e2ee; border-radius: 11px; background: #fff; font-size: 20px; color: #3979b4; }
.example-heading p { color: #6f8391; font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }
.example-heading h3 { font-size: 19px; letter-spacing: -.025em; font-weight: 500; margin-top: 4px; }
.example-scene { min-height: 290px; display: grid; align-items: center; font-size: 12px; }
.source-location { display: flex; align-items: center; gap: 10px; padding: 14px; border: 1px solid #d2e0ee; border-radius: 9px; background: #fff; font-weight: 500; }
.source-location > :first-child { font-size: 18px; color: #3578bd; }
.scope-badge { margin-left: auto; padding: 4px 7px; font-size: 9px; border-radius: 5px; background: #eff5fa; color: #57758d; }
.folder-tree { margin: 0 0 16px 23px; padding: 7px 0 0 18px; border-left: 1px solid #c8d8e3; }
.folder-tree > div { display: flex; align-items: center; gap: 8px; padding: 11px 0; color: #5c7484; }
.folder-tree .included { margin-left: auto; color: #3b9682; }
.cloud-location > :first-child { color: #1293a0; }
.scene-note { margin-top: 20px; text-align: center; color: #6d8388; font-size: 11px; line-height: 1.5; }
.mini-label { font-size: 9px; font-weight: 500; letter-spacing: .07em; text-transform: uppercase; color: #708493; }
.document-excerpt { padding: 18px; border: 1px solid #d9e4ea; border-radius: 10px; background: #fff; }
.document-excerpt > p + p { margin-top: 10px; line-height: 1.9; color: #4c6070; }
.document-excerpt mark { padding: 2px 3px; color: #2b6294; background: #e6f0fc; border-radius: 3px; }
.document-excerpt mark:nth-child(2) { color: #157367; background: #e4f4ee; }
.document-excerpt mark:nth-child(3) { color: #735098; background: #f0e9f8; }
.extraction-arrow { display: flex; justify-content: center; color: #87a3b1; padding: 9px; }
.extracted-fields { border: 1px solid #d6e5e5; border-radius: 9px; background: #fff; overflow: hidden; }
.extracted-fields > div { display: flex; justify-content: space-between; gap: 12px; padding: 10px 14px; }
.extracted-fields > div + div { border-top: 1px solid #edf1f2; }
.extracted-fields dt { color: #73858d; }
.extracted-fields dd { color: #305e67; font-weight: 500; }
.source-reference { display: flex; justify-content: center; align-items: center; gap: 5px; margin-top: 14px; font-size: 10px; color: #538777; }
.alias-list { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 12px; }
.alias-list span { padding: 8px 10px; border: 1px solid #d6e1e9; border-radius: 6px; background: #fff; font-size: 11px; color: #587085; }
.merge-bridge { display: flex; justify-content: center; padding: 17px; font-size: 20px; color: #6da299; }
.matched-record { display: flex; align-items: center; gap: 10px; padding: 16px 12px; border: 1px solid #9ecac0; border-radius: 10px; background: #f3fbf7; flex-wrap: wrap; }
.record-icon { display: grid; place-items: center; width: 30px; height: 34px; border-radius: 7px; background: #dff0e9; color: #478e7f; font-size: 17px; }
.matched-record strong { font-size: 12px; font-weight: 500; color: #276d61; }
.matched-record p { margin-top: 4px; font-size: 10px; color: #6f8b81; }
.suggested-badge { margin-left: auto; font-size: 8px; color: #6e8383; }
.related-records { position: relative; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding-top: 24px; }
.related-records::before { content: ''; position: absolute; left: 25%; right: 25%; top: 12px; height: 12px; border: 1px solid #bfd8d0; border-bottom: 0; }
.related-records::after { content: ''; position: absolute; left: 50%; top: 0; height: 12px; border-left: 1px solid #bfd8d0; }
.related-records span { padding: 11px; text-align: center; background: white; border: 1px solid #d4e5df; border-radius: 7px; color: #4a6f68; }
.related-records small { display: block; margin-top: 4px; color: #7a9189; font-size: 9px; }
.review-heading { display: flex; align-items: center; gap: 8px; color: #9c742d; font-size: 12px; }
.review-heading > :first-child { font-size: 17px; }
.conflicting-values { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 18px; }
.conflicting-values > div { padding: 17px 13px; background: #fffaf1; border: 1px solid #ead9b9; border-radius: 9px; }
.conflicting-values strong { display: block; margin-top: 12px; font-size: 19px; font-weight: 500; color: #7c5b26; letter-spacing: -.025em; }
.conflicting-values span { display: block; margin-top: 5px; font-size: 9px; color: #9a855f; }
.review-note { display: flex; gap: 10px; padding: 18px 0; color: #687d88; }
.review-note > :first-child { flex-shrink: 0; margin-top: 2px; font-size: 17px; }
.review-note strong { color: #476270; font-size: 12px; font-weight: 500; }
.review-note p { margin-top: 6px; font-size: 11px; line-height: 1.7; }
.review-status { display: flex; align-items: center; gap: 6px; color: #9b7a3f; font-size: 10px; }
.review-status span { width: 5px; height: 5px; border-radius: 50%; background: #cda04f; }
.ready-record { padding: 22px; border: 1px solid #b5d7cc; border-radius: 12px; background: linear-gradient(145deg, #fff, #e9f6ef); }
.ready-record > div:first-child { display: flex; align-items: center; justify-content: space-between; color: #409c7c; }
.ready-record h4 { margin-top: 18px; font-size: 22px; font-weight: 500; letter-spacing: -.035em; color: #2f6c60; }
.ready-record > p { margin-top: 6px; color: #6b8980; font-size: 11px; }
.ready-record > p span { margin-inline: 5px; }
.record-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 18px; }
.record-tags span { padding: 4px 7px; border: 1px solid #cde1d8; border-radius: 5px; color: #598476; font-size: 9px; background: #fff; }
.output-bridge { width: 1px; height: 24px; background: #bbd6cc; margin: 0 auto; }
.example-outputs { display: grid; grid-template-columns: 1fr 1fr 1.2fr; gap: 7px; }
.example-outputs span { display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px; padding: 13px 5px; border: 1px solid #d5c7ef; border-radius: 7px; color: #8056b1; background: #f8f4ff; font-size: 10px; }
.example-outputs span:nth-child(2) { color: #397bc1; border-color: #cbdef3; background: #f0f7ff; }
.example-outputs span:nth-child(3) { color: #a37735; border-color: #ebd8b7; background: #fff8ed; }
.example-outputs span > :first-child { font-size: 17px; }
.example-outcome { display: flex; align-items: flex-start; gap: 8px; padding: 18px 28px; border-top: 1px solid #dde9e5; color: #568273; font-size: 12px; line-height: 1.6; }
.example-outcome > :first-child { flex-shrink: 0; margin-top: 3px; }
.example-pagination { display: flex; align-items: center; gap: 7px; padding: 0 24px 20px; color: #7b8c94; font-size: 10px; font-variant-numeric: tabular-nums; }
.example-pagination > span { margin-right: auto; }
.example-pagination button { display: grid; place-items: center; width: 32px; height: 32px; border: 1px solid #d4e1e4; border-radius: 7px; color: #466f83; background: #fff; cursor: pointer; }
.example-pagination button:disabled { opacity: .4; cursor: default; }
.previous-arrow { transform: rotate(-135deg); }
.next-arrow { transform: rotate(45deg); }
button:focus-visible { outline: 2px solid #397fc3; outline-offset: 3px; }
@media (hover: hover) and (pointer: fine) {
  .step-button:not(.selected):hover { background: #f7f9fb; }
  .example-pagination button:not(:disabled):hover { background: #edf5fa; }
}
@media (max-width: 1023px) {
  .steps-layout { gap: 28px; grid-template-columns: 1fr 1fr; }
  .step-button { padding: 16px 10px; gap: 10px; }
  .step-title { font-size: 15px; }
  .step-body { font-size: 12px; }
  .example-content { padding: 20px; }
  .example-toolbar { padding-inline: 16px; }
  .example-outcome { padding-inline: 20px; }
  .example-brand { font-size: 10px; }
  .conflicting-values { gap: 8px; }
  .conflicting-values strong { font-size: 16px; }
}
@media (max-width: 767px) {
  .mobile-example-link { display: flex; align-items: center; gap: 6px; width: fit-content; margin: 8px 12px 12px 56px; padding-block: 6px; font-size: 12px; color: #2868b5; text-underline-offset: 3px; text-decoration: underline; }
  .section-intro { flex-direction: column; align-items: flex-start; gap: 20px; }
  .intro-description { max-width: 450px; font-size: 15px; }
  .steps-layout { grid-template-columns: 1fr; margin-top: 32px; gap: 28px; }
  .step-button { padding: 16px 12px; }
  .step-title { font-size: 16px; }
  .step-body { font-size: 13px; }
  .example-panel { position: static; }
  .example-scene { min-height: 310px; }
  .example-toolbar { font-size: 9px; }
  .example-heading h3 { font-size: 18px; }
  .conflicting-values strong { font-size: 17px; }
}
</style>
