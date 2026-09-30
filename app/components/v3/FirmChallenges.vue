<script setup lang="ts">
const challenges = [
  {
    id: 'discovery',
    label: 'Finding experience',
    icon: 'i-lucide-search-check',
    title: 'The right project is somewhere.',
    problem: 'Relevant work is buried across office drives, project folders, and past reports. Finding a similar project can mean searching several places and asking around.',
    cost: 'Your team spends time finding experience it already has.',
    response: 'Different names. One connected project.',
    solution: 'Rysmaan reads your files and suggests which project references belong together, so the same experience can be found across reports, folders, and CVs.',
    details: ['Related project records brought together', 'People and clients linked to the work', 'Original sources kept within reach']
  },
  {
    id: 'handover',
    label: 'Sharing knowledge',
    icon: 'i-lucide-user-round',
    title: 'A new project. The same chase.',
    problem: 'Project teams piece together reports, past decisions, and team responsibilities, then ask senior staff to fill the gaps. Valuable context has to be reconstructed all over again.',
    cost: 'Every handover starts with another round of questions.',
    response: 'Project context that stays with the work.',
    solution: 'Rysmaan connects the decisions and responsibilities recorded in your documents to the people and projects they relate to, giving the next team a clearer starting point.',
    details: ['Documented decisions easier to find', 'Team roles connected to each project', 'Source material available for follow-up']
  },
  {
    id: 'consistency',
    label: 'Trusting the details',
    icon: 'i-lucide-shield-check',
    title: 'One project. More than one story.',
    problem: 'Names, dates, and team roles can differ between project sheets, CVs, and reports. Someone has to trace the sources before those details go into the next project or dashboard.',
    cost: 'Unclear records carry uncertainty into reports and AI answers.',
    response: 'Structured knowledge, with evidence attached.',
    solution: 'Rysmaan makes conflicting details visible and keeps them linked to their sources. Your team reviews the context before confirming what belongs in the connected record.',
    details: ['Conflicting values surfaced for review', 'Each detail linked back to its source', 'Checked records ready for your tools']
  }
] as const

const active = ref<string>('discovery')
const enhanced = ref(false)

function syncChallenge() {
  const selected = challenges.find(challenge => window.location.hash === `#challenge-${challenge.id}`)
  if (selected) active.value = selected.id
}

onMounted(() => {
  syncChallenge()
  enhanced.value = true
  window.addEventListener('hashchange', syncChallenge)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', syncChallenge)
})
</script>

<template>
  <section
    id="challenges"
    class="section-space"
    aria-labelledby="challenges-title"
  >
    <div class="section-shell">
      <div class="challenges-heading">
        <p class="eyebrow">
          For engineering &amp; consulting firms
        </p>
        <h2
          id="challenges-title"
          class="section-title"
        >
          Years of experience.<br>Still hard to put to work.
        </h2>
        <p class="challenges-intro">
          Your firm’s knowledge lives in project folders, past reports, and the people who remember the details. Explore where work gets stuck, and what connected knowledge changes.
        </p>
      </div>

      <nav
        class="challenge-nav"
        aria-label="Explore firm challenges"
      >
        <a
          v-for="(challenge, index) in challenges"
          :id="`challenge-${challenge.id}`"
          :key="challenge.id"
          :href="`#challenge-${challenge.id}`"
          :aria-current="enhanced && active === challenge.id ? 'true' : undefined"
          :aria-controls="`challenge-story-${challenge.id}`"
          @click="active = challenge.id"
        >
          <span class="challenge-number">0{{ index + 1 }}</span>
          <UIcon
            :name="challenge.icon"
            aria-hidden="true"
          />
          <span>{{ challenge.label }}</span>
          <UIcon
            name="i-lucide-arrow-down"
            class="challenge-nav-arrow"
            aria-hidden="true"
          />
        </a>
      </nav>

      <div class="challenge-stories">
        <article
          v-for="challenge in challenges"
          v-show="!enhanced || active === challenge.id"
          :id="`challenge-story-${challenge.id}`"
          :key="challenge.id"
          class="challenge-card"
          :class="`${challenge.id}-card`"
          :aria-labelledby="`challenge-title-${challenge.id}`"
        >
          <div class="challenge-situation">
            <p class="story-eyebrow">
              The everyday reality
            </p>
            <div
              v-if="challenge.id === 'discovery'"
              class="challenge-visual discovery-visual"
              role="img"
              aria-label="Illustration: hospital project experience scattered across a shared drive, a project report, and a team CV under different names."
            >
              <div aria-hidden="true">
                <div class="search-prompt">
                  <UIcon name="i-lucide-search-check" /><span>“Have we done a project like this?”</span>
                </div>
                <div class="scattered-records">
                  <div class="scattered-record drive-record">
                    <span class="document-icon"><UIcon name="i-lucide-folder-open" /></span><div><small>Shared drive</small><strong>2021-044</strong><span class="document-line" /></div>
                  </div>
                  <div class="scattered-record report-record">
                    <span class="document-icon"><UIcon name="i-lucide-file-text" /></span><div><small>Project report</small><strong>St. Mary’s Hospital</strong><span class="document-line" /></div>
                  </div>
                  <div class="scattered-record cv-record">
                    <span class="document-icon"><UIcon name="i-lucide-user-round" /></span><div><small>Team CV</small><strong>SMH Phase II</strong><span class="document-line" /></div>
                  </div>
                </div>
                <p class="visual-caption">
                  <span class="tiny-dot" />Same experience. Different places.
                </p>
              </div>
            </div>
            <div
              v-else-if="challenge.id === 'handover'"
              class="challenge-visual handover-visual"
              role="img"
              aria-label="Illustration: a healthcare project handover is due Friday, with project records found but past decisions and the structural lead’s role still to confirm."
            >
              <div aria-hidden="true">
                <div class="handover-sheet">
                  <div class="handover-heading">
                    <span class="document-icon"><UIcon name="i-lucide-file-text" /></span><div><small>Project handover</small><strong>Healthcare project</strong></div><span class="deadline">Due Friday</span>
                  </div>
                  <div class="handover-checklist">
                    <div><UIcon name="i-lucide-check" /><span>Project records</span><small>Found</small></div><div><span class="pending-ring" /><span>Past decisions</span><small>To gather</small></div><div><span class="pending-ring" /><span>Structural lead’s role</span><small>To confirm</small></div>
                  </div>
                </div>
                <div class="team-question">
                  <span class="avatar">PM</span><p>“Who worked on the hospital project?”</p>
                </div>
              </div>
            </div>
            <div
              v-else
              class="challenge-visual consistency-visual"
              role="img"
              aria-label="Illustration: two documents for project 2021-044 list different completion dates, June and September 2023, requiring someone to review the evidence."
            >
              <div aria-hidden="true">
                <div class="project-reference">
                  <UIcon name="i-lucide-building-2" /><span>St. Mary’s Hospital</span><small>2021-044</small>
                </div>
                <div class="version-pair">
                  <div class="version-record">
                    <span class="version-source">Project sheet</span><span class="version-line" /><span class="version-line short-line" /><small>Completed</small><strong>June 2023</strong>
                  </div>
                  <div class="version-record">
                    <span class="version-source">Closeout report</span><span class="version-line" /><span class="version-line short-line" /><small>Completed</small><strong>Sept. 2023</strong>
                  </div>
                </div>
                <div class="conflict-callout">
                  <UIcon name="i-lucide-circle-alert" /><span>Which version can the team rely on?</span>
                </div>
              </div>
            </div>
            <p class="challenge-cost">
              {{ challenge.cost }}
            </p>
          </div>
          <div class="challenge-copy">
            <h3 :id="`challenge-title-${challenge.id}`">
              {{ challenge.title }}
            </h3>
            <p class="challenge-problem">
              {{ challenge.problem }}
            </p>
            <div class="challenge-response">
              <p class="story-eyebrow">
                <V3RysmaanMark class="size-5" />What changes with Rysmaan
              </p>
              <h4>{{ challenge.response }}</h4>
              <p>{{ challenge.solution }}</p>
              <ul>
                <li
                  v-for="detail in challenge.details"
                  :key="detail"
                >
                  <UIcon
                    name="i-lucide-check"
                    aria-hidden="true"
                  />{{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      <div class="challenge-transition">
        <p>The knowledge is there. <span>Here’s how we connect it.</span></p>
        <a href="#how-it-works">Explore the five steps <UIcon
          name="i-lucide-arrow-down"
          aria-hidden="true"
        /></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.challenges-heading { max-width: 660px; margin-inline: auto; text-align: center; }
.challenges-heading .eyebrow { justify-content: center; }
.challenges-heading .section-title { margin-top: 20px; }
.challenges-intro { max-width: 585px; margin: 22px auto 0; color: #64717b; font-size: 16px; line-height: 1.75; text-wrap: pretty; }
.challenge-nav { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-top: 40px; padding: 6px; border: 1px solid #e1e8ee; border-radius: 14px; background: #f6f8fb; }
.challenge-nav a { display: flex; align-items: center; gap: 10px; min-height: 56px; padding: 12px 16px; border: 1px solid transparent; border-radius: 9px; color: #667583; font-size: 14px; font-weight: 500; scroll-margin-top: 24px; }
.challenge-nav a[aria-current] { color: #205c9b; border-color: #ccdced; background: #fff; box-shadow: 0 2px 5px #27446508; }
.challenge-number { color: #8595a4; font-size: 10px; font-variant-numeric: tabular-nums; }
.challenge-nav a > .iconify { flex-shrink: 0; font-size: 17px; }
.challenge-nav-arrow { margin-left: auto; opacity: 0; }
.challenge-nav [aria-current] .challenge-nav-arrow { opacity: 1; }
.challenge-stories { display: grid; gap: 24px; margin-top: 24px; }
.challenge-card { --accent: #4178b4; --soft: #e5eefb; --line: #d2dff0; display: grid; grid-template-columns: 0.9fr 1.1fr; min-width: 0; overflow: hidden; border: 1px solid #dae4ed; border-radius: 18px; background: #fff; }
.handover-card { --accent: #8260ae; --muted-accent: #87749f; --soft: #ede5f6; --line: #dfd4ed; }
.consistency-card { --accent: #a37a38; --muted-accent: #937f60; --soft: #f5ead6; --line: #e8dbc3; }
.challenge-situation { display: flex; flex-direction: column; justify-content: center; gap: 24px; padding: 36px; background: #f3f7fc; }
.handover-card .challenge-situation { background: #f7f3fc; }
.consistency-card .challenge-situation { background: #fcf8ef; }
.story-eyebrow { display: flex; align-items: center; gap: 8px; color: var(--accent); font-size: 10px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; }
.challenge-cost { max-width: 310px; color: #64717b; font-size: 13px; line-height: 1.7; text-wrap: pretty; }
.challenge-visual { display: grid; align-items: center; height: 290px; padding: 22px; overflow: hidden; border: 1px solid var(--line); border-radius: 16px; background: #f4f8fd; }
.challenge-visual > div { min-width: 0; width: 100%; }
.handover-visual { background: linear-gradient(145deg, #fbf9fe, #f4effa); }
.consistency-visual { background: linear-gradient(145deg, #fffdf8, #faf4e9); }
.search-prompt { display: flex; align-items: center; gap: 8px; font-size: 11px; color: #547394; }
.search-prompt > :first-child { font-size: 16px; flex-shrink: 0; }
.scattered-records { position: relative; height: 186px; margin-top: 15px; }
.scattered-record { position: absolute; display: flex; align-items: center; gap: 10px; width: 82%; padding: 13px; border: 1px solid #d5e0ee; border-radius: 9px; background: #fff; box-shadow: 0 5px 13px -9px #315a8d44; }
.drive-record { top: 0; left: 1%; transform: rotate(-4deg); }
.report-record { top: 55px; right: 0; transform: rotate(3deg); }
.cv-record { top: 110px; left: 5%; transform: rotate(-2deg); }
.document-icon { display: grid; flex-shrink: 0; place-items: center; width: 30px; height: 34px; border-radius: 7px; color: var(--accent); background: var(--soft); font-size: 17px; }
.scattered-record small, .handover-heading small { display: block; margin-bottom: 4px; color: #7a8a9a; font-size: 9px; }
.scattered-record strong { display: block; color: #405e7f; font-size: 11px; font-weight: 500; }
.scattered-record > div { flex: 1; }
.document-line { display: block; width: 75%; height: 3px; margin-top: 7px; border-radius: 2px; background: #e6edf5; }
.visual-caption { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 12px; font-size: 10px; color: #69829c; }
.tiny-dot { width: 4px; height: 4px; border-radius: 50%; background: #88a5c8; }
.handover-sheet { border: 1px solid #dfd5ec; border-radius: 10px; background: #fff; box-shadow: 0 6px 14px -12px #76569866; }
.handover-heading { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; padding: 14px 12px; }
.handover-heading .document-icon { width: 27px; height: 32px; font-size: 15px; }
.handover-heading strong { display: block; font-size: 10px; font-weight: 500; color: #65517d; }
.deadline { margin-left: auto; padding: 4px 5px; border-radius: 4px; background: #f5effb; color: #8865ac; font-size: 8px; white-space: nowrap; }
.handover-checklist { border-top: 1px solid #eee8f5; padding: 4px 12px 8px; }
.handover-checklist > div { display: flex; align-items: center; gap: 7px; padding: 9px 0; font-size: 10px; color: #70677e; }
.handover-checklist > div > :first-child { color: #679a87; flex-shrink: 0; width: 12px; height: 12px; }
.handover-checklist small { margin-left: auto; color: #92859f; font-size: 8px; }
.pending-ring { border: 1px solid #cbbddc; border-radius: 50%; }
.team-question { display: flex; align-items: center; gap: 9px; margin-top: 20px; }
.avatar { display: grid; place-items: center; flex-shrink: 0; width: 27px; height: 27px; font-size: 8px; font-weight: 500; border-radius: 50%; color: #8566a9; background: #e9dff4; }
.team-question p { font-size: 10px; line-height: 1.6; color: #867493; }
.project-reference { display: flex; align-items: center; gap: 7px; color: #816b48; font-size: 11px; }
.project-reference > :first-child { font-size: 16px; }
.project-reference small { margin-left: auto; color: #a49273; font-size: 9px; }
.version-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
.version-record { padding: 15px 12px 13px; border: 1px solid #e6d9c4; border-radius: 8px; background: #fff; box-shadow: 0 4px 8px -6px #8b704c22; }
.version-source { display: block; font-size: 10px; font-weight: 500; color: #8b785a; }
.version-line { display: block; width: 100%; height: 4px; border-radius: 3px; background: #ece6da; margin-top: 15px; }
.short-line { width: 66%; margin-top: 6px; }
.version-record small { display: block; margin-top: 22px; font-size: 9px; color: #9a8a70; }
.version-record strong { display: block; margin-top: 7px; color: #9a7030; font-weight: 500; font-size: 17px; letter-spacing: -.03em; white-space: nowrap; }
.conflict-callout { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 21px; font-size: 10px; color: #a18351; }
.conflict-callout > :first-child { font-size: 14px; flex-shrink: 0; }
.challenge-copy { padding: 36px 40px; }
.challenge-copy h3 { max-width: 380px; font-size: 32px; font-weight: 500; line-height: 1.15; letter-spacing: -.035em; text-wrap: balance; }
.challenge-problem { margin-top: 16px; color: #64717b; font-size: 14px; line-height: 1.75; }
.challenge-response { margin-top: 28px; padding-top: 24px; border-top: 1px solid #e5ecef; }
.challenge-response .story-eyebrow { color: #17776c; letter-spacing: .07em; }
.challenge-response h4 { margin-top: 14px; font-size: 20px; line-height: 1.3; font-weight: 500; letter-spacing: -.025em; color: #215b54; }
.challenge-response > p:not(.story-eyebrow) { margin-top: 12px; color: #64717b; font-size: 13px; line-height: 1.75; }
.challenge-response ul { display: grid; gap: 10px; margin-top: 20px; }
.challenge-response li { display: flex; align-items: center; gap: 8px; color: #47756c; font-size: 12px; line-height: 1.5; }
.challenge-response li > :first-child { flex-shrink: 0; color: #218573; }
.challenge-transition { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: 28px; padding-inline: 4px; }
.challenge-transition p { font-size: 15px; color: #3d5668; line-height: 1.6; }
.challenge-transition p span { color: #74838e; }
.challenge-transition a { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 500; color: #2a6da5; text-decoration: underline; text-decoration-color: #a9c8dd; text-underline-offset: 4px; }
.challenge-transition a > :last-child { flex-shrink: 0; }
.challenge-transition a:focus-visible { outline: 2px solid #397fc3; outline-offset: 5px; border-radius: 3px; }
@media (hover: hover) and (pointer: fine) {
  .challenge-nav a:not([aria-current]):hover { color: #205c9b; background: #eaf0f8; }
}
@media (min-width: 768px) and (max-width: 1100px) {
  .challenge-situation { padding: 24px; }
  .challenge-copy { padding: 28px; }
  .challenge-nav a { gap: 7px; padding-inline: 10px; font-size: 12px; }
  .challenge-number { display: none; }
  .challenge-visual { padding: 16px 12px; }
  .scattered-record { width: 94%; padding: 10px; }
  .handover-heading { padding: 12px 8px; gap: 5px; }
  .deadline { display: none; }
  .handover-checklist { padding-inline: 8px; }
  .handover-checklist small { display: none; }
  .project-reference { flex-wrap: wrap; }
  .project-reference small { margin-left: 23px; }
  .version-pair { gap: 7px; }
  .version-record { padding-inline: 8px; }
  .version-record strong { font-size: 14px; }
  .challenge-copy h3 { font-size: 24px; }
  .challenge-copy > p:last-child { font-size: 13px; }
  .challenge-transition { flex-direction: column; align-items: flex-start; gap: 10px; }
}
@media (max-width: 767px) {
  .challenge-nav { gap: 4px; margin-top: 30px; padding: 5px; }
  .challenge-nav a { flex-direction: column; justify-content: center; gap: 7px; padding: 12px 4px; font-size: 11px; line-height: 1.4; text-align: center; }
  .challenge-number, .challenge-nav .challenge-nav-arrow { display: none; }
  .challenge-card { grid-template-columns: 1fr; }
  .challenge-situation { padding: 24px; gap: 18px; }
  .challenge-visual { max-width: 390px; width: 100%; margin-inline: auto; }
  .challenge-cost { max-width: none; }
  .challenges-intro { font-size: 15px; }
  .challenge-visual { padding-inline: 24px; }
  .challenge-copy { padding: 28px 24px; }
  .challenge-copy h3 { font-size: 26px; }
  .challenge-transition { flex-direction: column; align-items: flex-start; gap: 12px; margin-top: 24px; }
  .challenge-transition p { font-size: 14px; }
  .challenge-transition p span { display: block; }
}
@media (max-width: 359px) {
  .challenge-visual { padding-inline: 14px; }
  .deadline { display: none; }
  .version-record strong { font-size: 15px; }
}
</style>
