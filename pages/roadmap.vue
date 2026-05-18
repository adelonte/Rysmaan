<template>
  <div class="bg-white dark:bg-gray-900">
    <EarlyAccessModal v-model:is-open="isModalOpen" />

    <section class="relative overflow-hidden">
      <div class="container relative px-4 md:px-8 xl:px-16 sm:mx-auto py-14 md:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-12 lg:gap-16 items-center">
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-3">
              <div class="h-px w-10 bg-primary-500" />
              <p class="text-sm font-bold uppercase tracking-[0.14em] text-primary-600 dark:text-primary-300">
                Product roadmap
              </p>
            </div>

            <div class="flex flex-col gap-5">
              <h1 class="text-[34px] md:text-[52px] leading-[1.1] font-bold text-gray-900 dark:text-white">
                Smarter procurement, built around real users
              </h1>
              <p class="text-[18px] leading-[1.6] text-gray-500 dark:text-gray-400 max-w-xl">
                Practical AI upgrades for the moments project teams repeat every week: writing RFQs, finding vendors, comparing quotes, catching risk, and sending the right follow-up.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 pt-2">
              <UButton
                size="lg"
                color="primary"
                class="rounded-full px-6 py-2.5 font-medium text-[15px]"
                @click="isModalOpen = true"
              >
                Request Early Access
              </UButton>
              <UButton
                to="#top-roadmap-ideas"
                size="lg"
                color="gray"
                variant="ghost"
                class="rounded-full px-6 py-2.5 font-medium text-[15px]"
              >
                See what's coming
              </UButton>
            </div>
          </div>

          <div class="roadmap-journey">
            <div class="roadmap-journey-header">
              <div>
                <p class="text-sm font-bold text-gray-900 dark:text-white">
                  Roadmap preview
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Explore each user-facing upgrade
                </p>
              </div>
              <div class="roadmap-journey-badge">
                5 upgrades
              </div>
            </div>

            <div class="roadmap-journey-stages">
              <div class="roadmap-journey-track" aria-hidden="true" />
              <button
                v-for="(idea, index) in topRoadmapIdeas"
                :key="idea.rank"
                type="button"
                class="roadmap-stage"
                :class="[
                  selectedIdeaRank === idea.rank ? 'roadmap-stage-active' : '',
                  `roadmap-stage-${idea.theme}`,
                ]"
                :style="{ '--stage-delay': `${index * 90}ms` }"
                @click="selectIdea(idea.rank)"
                @mouseenter="selectIdea(idea.rank)"
              >
                <span class="roadmap-stage-dot">
                  <UIcon :name="idea.icon" class="h-4 w-4" />
                </span>
                <span class="roadmap-stage-label">
                  <span class="roadmap-stage-step">Roadmap {{ idea.rank }}</span>
                  <span class="roadmap-stage-title">{{ idea.stage }}</span>
                </span>
              </button>
            </div>

            <div class="roadmap-journey-preview">
              <Transition name="roadmap-fade" mode="out-in">
                <div :key="selectedIdea.rank" class="roadmap-journey-preview-inner">
                  <div class="flex items-start gap-3">
                    <div class="roadmap-journey-preview-icon" :class="`roadmap-accent-${selectedIdea.theme}`">
                      <UIcon :name="selectedIdea.icon" class="h-5 w-5" />
                    </div>
                    <div class="flex-1">
                      <p class="text-[15px] font-bold text-gray-900 dark:text-white">
                        {{ selectedIdea.title }}
                      </p>
                      <p class="mt-1 text-sm leading-[1.55] text-gray-500 dark:text-gray-400">
                        {{ selectedIdea.tagline }}
                      </p>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="top-roadmap-ideas" class="bg-gray-50 py-16 dark:bg-gray-950/50 md:py-24">
      <div class="container px-4 md:px-8 xl:px-16 sm:mx-auto">
        <div class="flex flex-col gap-4 max-w-3xl">
          <p class="text-sm font-bold uppercase tracking-[0.14em] text-primary-600 dark:text-primary-300">
            Built for the work users already do
          </p>
          <h2 class="text-[28px] md:text-[40px] leading-[1.2] font-bold text-gray-900 dark:text-white">
            Five AI upgrades, shown as user outcomes
          </h2>
          <p class="text-[17px] leading-[1.6] text-gray-500 dark:text-gray-400">
            A simple look at the product experiences that help teams move from request to award with less manual effort.
          </p>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
          <div class="flex flex-col gap-2">
            <button
              v-for="idea in topRoadmapIdeas"
              :key="`tab-${idea.rank}`"
              type="button"
              class="roadmap-tab"
              :class="[
                selectedIdeaRank === idea.rank ? 'roadmap-tab-active' : '',
                `roadmap-tab-${idea.theme}`,
              ]"
              @click="selectIdea(idea.rank)"
            >
              <span class="roadmap-tab-rank">{{ idea.rank }}</span>
              <span class="flex-1 text-left">
                <span class="roadmap-tab-title">{{ idea.title }}</span>
                <span class="roadmap-tab-stage">{{ idea.stage }}</span>
              </span>
              <UIcon
                :name="selectedIdeaRank === idea.rank ? 'i-heroicons-arrow-right' : idea.icon"
                class="h-4 w-4 shrink-0 transition-transform"
                :class="selectedIdeaRank === idea.rank ? 'text-primary-500 translate-x-0.5' : 'text-gray-400 dark:text-gray-500'"
              />
            </button>
          </div>

          <Transition name="roadmap-card" mode="out-in">
            <article
              :key="selectedIdea.rank"
              class="roadmap-detail"
              :class="`roadmap-detail-${selectedIdea.theme}`"
            >
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div class="flex items-center gap-4">
                  <div class="roadmap-detail-icon" :class="`roadmap-accent-${selectedIdea.theme}`">
                    <UIcon :name="selectedIdea.icon" class="h-6 w-6" />
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-[0.14em] text-gray-400 dark:text-gray-500">
                      Roadmap {{ selectedIdea.rank }} - {{ selectedIdea.stage }}
                    </p>
                    <h3 class="mt-1 text-[22px] md:text-[26px] leading-[1.2] font-bold text-gray-900 dark:text-white">
                      {{ selectedIdea.title }}
                    </h3>
                  </div>
                </div>
                <div class="roadmap-audience-pill">
                  <UIcon name="i-heroicons-user-circle" class="h-4 w-4" />
                  <span>{{ selectedIdea.audience }}</span>
                </div>
              </div>

              <p class="mt-5 text-[16px] leading-[1.65] text-gray-600 dark:text-gray-300 max-w-2xl">
                {{ selectedIdea.description }}
              </p>

              <div class="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)]">
                <div>
                  <p class="text-xs font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                    What it does for you
                  </p>
                  <ul class="mt-3 flex flex-col gap-2.5">
                    <li
                      v-for="benefit in selectedIdea.benefits"
                      :key="benefit"
                      class="flex gap-2.5 text-[15px] leading-[1.5] text-gray-700 dark:text-gray-200"
                    >
                      <UIcon name="i-heroicons-check-circle" class="mt-0.5 h-5 w-5 shrink-0" :class="`roadmap-check-${selectedIdea.theme}`" />
                      <span>{{ benefit }}</span>
                    </li>
                  </ul>
                </div>

                <div class="roadmap-mockup">
                  <div class="roadmap-mockup-bar">
                    <div class="flex items-center gap-1.5">
                      <span class="roadmap-preview-dot" />
                      <span class="roadmap-preview-dot" />
                      <span class="roadmap-preview-dot" />
                    </div>
                    <span class="roadmap-preview-label">{{ selectedIdea.mockup.label }}</span>
                  </div>
                  <div class="roadmap-mockup-screen">
                    <img
                      :src="selectedIdea.mockup.image"
                      :alt="selectedIdea.mockup.alt"
                      class="roadmap-mockup-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <div class="roadmap-ai-panel">
                      <div class="flex items-center justify-between gap-3">
                        <div class="flex items-center gap-2">
                          <div class="roadmap-ai-icon" :class="`roadmap-accent-${selectedIdea.theme}`">
                            <UIcon :name="selectedIdea.icon" class="h-4 w-4" />
                          </div>
                          <div>
                            <p class="roadmap-ai-eyebrow">AI preview</p>
                            <p class="roadmap-ai-title">{{ selectedIdea.mockup.title }}</p>
                          </div>
                        </div>
                        <span class="roadmap-ai-status">{{ selectedIdea.mockup.status }}</span>
                      </div>
                      <div class="roadmap-ai-list">
                        <div
                          v-for="(line, i) in selectedIdea.preview"
                          :key="`${selectedIdea.rank}-mockup-line-${i}`"
                          class="roadmap-ai-line"
                          :style="{ '--line-delay': `${i * 80}ms` }"
                        >
                          <UIcon :name="line.icon" class="h-4 w-4 shrink-0" :class="`roadmap-check-${selectedIdea.theme}`" />
                          <span>{{ line.text }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Transition>
        </div>
      </div>
    </section>

    <section class="container px-4 md:px-8 xl:px-16 sm:mx-auto py-16 md:py-24">
      <div class="flex flex-col gap-4 max-w-3xl">
        <p class="text-sm font-bold uppercase tracking-[0.14em] text-primary-600 dark:text-primary-300">
          Designed for daily work
        </p>
        <h2 class="text-[26px] md:text-[34px] leading-[1.2] font-bold text-gray-900 dark:text-white">
          Helpful where the work already happens
        </h2>
        <p class="text-[16px] leading-[1.6] text-gray-500 dark:text-gray-400">
          These ideas are designed to feel like a natural part of Rysmaan: clear suggestions, editable drafts, and source-backed summaries.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div
          v-for="(step, index) in roadmapPrinciples"
          :key="step.title"
          class="roadmap-step"
          :style="{ '--step-delay': `${index * 100}ms` }"
        >
          <div class="roadmap-step-index">
            {{ String(index + 1).padStart(2, "0") }}
          </div>
          <div class="roadmap-step-icon">
            <UIcon :name="step.icon" class="h-5 w-5" />
          </div>
          <h3 class="mt-4 text-base font-bold text-gray-900 dark:text-white">
            {{ step.title }}
          </h3>
          <p class="mt-2 text-sm leading-[1.6] text-gray-500 dark:text-gray-400">
            {{ step.description }}
          </p>
        </div>
      </div>

      <div class="roadmap-cta">
        <div class="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
          <div>
            <h3 class="text-[20px] md:text-[22px] font-bold text-gray-900 dark:text-white">
              Want this in your workflow first?
            </h3>
            <p class="mt-1 text-[15px] text-gray-500 dark:text-gray-400">
              Early access teams help shape the roadmap experience before it reaches more users.
            </p>
          </div>
          <UButton
            size="lg"
            color="primary"
            class="rounded-full px-6 py-2.5 font-medium text-[15px]"
            @click="isModalOpen = true"
          >
            Get Early Access
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { isModalOpen } = useEarlyAccess();

const topRoadmapIdeas = [
  {
    rank: "01",
    stage: "Compare quotes",
    title: "Compare quotes without the manual chase",
    tagline: "Prices, gaps, exclusions, and next steps in one view.",
    description:
      "When vendor responses land, AI turns them into a decision-ready summary so project managers can see the real differences faster.",
    benefits: [
      "See price and schedule differences quickly",
      "Spot missing documents, exclusions, and unclear notes",
      "Share a clean summary with stakeholders",
    ],
    previewLabel: "Quote comparison preview",
    preview: [
      { text: "Price spread: $48K - $72K", icon: "i-heroicons-arrows-up-down" },
      { text: "2 quotes missing insurance docs", icon: "i-heroicons-document-magnifying-glass" },
      { text: "Acme excludes permits", icon: "i-heroicons-exclamation-circle" },
    ],
    mockup: {
      label: "RFQ detail mockup",
      title: "Quote comparison summary",
      status: "Summary",
      image: "/screenshots/rfq-detail.png",
      alt: "Rysmaan RFQ detail screen with an AI quote comparison overlay",
    },
    audience: "Project managers",
    icon: "i-heroicons-scale",
    theme: "quote",
  },
  {
    rank: "02",
    stage: "Draft an RFQ",
    title: "Draft RFQs from a short brief",
    tagline: "Type the package once. Start from a ready-to-edit draft.",
    description:
      "Describe the work in a sentence or two and AI suggests the scope, requirements, document list, pricing structure, and vendor instructions.",
    benefits: [
      "Start from a real draft, not a blank page",
      "Keep RFQs consistent across packages",
      "Review every field before sending",
    ],
    previewLabel: "RFQ draft preview",
    preview: [
      { text: "Scope of work outlined", icon: "i-heroicons-document-text" },
      { text: "Required documents listed", icon: "i-heroicons-clipboard-document-check" },
      { text: "Pricing breakdown structured", icon: "i-heroicons-currency-dollar" },
    ],
    mockup: {
      label: "RFQ builder mockup",
      title: "Generated RFQ draft",
      status: "Draft",
      image: "/screenshots/rfqs-list.png",
      alt: "Rysmaan RFQs screen with an AI RFQ builder overlay",
    },
    audience: "Project managers",
    icon: "i-heroicons-document-plus",
    theme: "rfq",
  },
  {
    rank: "03",
    stage: "Find vendors",
    title: "Find vendors that fit the work",
    tagline: "Suggested shortlists with plain-language fit reasons.",
    description:
      "AI helps project managers start with vendors who match the service, location, status, qualifications, and current needs of the RFQ.",
    benefits: [
      "Skip the spreadsheet shortlist",
      "See fit reasons, not just a score",
      "Notice qualification gaps before inviting",
    ],
    previewLabel: "Vendor shortlist preview",
    preview: [
      { text: "Acme Builders: strong service match", icon: "i-heroicons-star" },
      { text: "Coastal Trades: preferred vendor", icon: "i-heroicons-bookmark" },
      { text: "Metro Mech: check insurance", icon: "i-heroicons-exclamation-triangle" },
    ],
    mockup: {
      label: "Vendor shortlist mockup",
      title: "Recommended vendor list",
      status: "Suggested",
      image: "/screenshots/pm-dashboard.png",
      alt: "Rysmaan project manager dashboard with an AI vendor shortlist overlay",
    },
    audience: "Project managers",
    icon: "i-heroicons-user-group",
    theme: "vendors",
  },
  {
    rank: "04",
    stage: "Avoid risk",
    title: "Catch risk before award",
    tagline: "Helpful warnings where decisions are made.",
    description:
      "AI highlights suspiciously low bids, vague scopes, missing documents, expired insurance, and tight timelines before the team moves forward.",
    benefits: [
      "See the gaps that are easy to miss",
      "Review risk while quotes are still being compared",
      "Get clear next steps, not generic alerts",
    ],
    previewLabel: "Risk flags preview",
    preview: [
      { text: "Low bid - 38% below average", icon: "i-heroicons-shield-exclamation" },
      { text: "Vendor insurance expires in 14 days", icon: "i-heroicons-clock" },
      { text: "Scope: \"materials\" needs more detail", icon: "i-heroicons-information-circle" },
    ],
    mockup: {
      label: "Risk review mockup",
      title: "Risk flags in context",
      status: "Flagged",
      image: "/screenshots/Dashboard.png",
      alt: "Rysmaan dashboard with an AI risk review overlay",
    },
    audience: "Project teams",
    icon: "i-heroicons-shield-exclamation",
    theme: "risk",
  },
  {
    rank: "05",
    stage: "Follow up",
    title: "Send better follow-up questions",
    tagline: "Clarification messages drafted from quote gaps.",
    description:
      "When a quote is incomplete, AI drafts polite, specific questions that project managers can edit and send inside Rysmaan.",
    benefits: [
      "Drafted messages, not blank emails",
      "Specific asks for missing documents or unclear pricing",
      "Clearer communication for vendors",
    ],
    previewLabel: "Follow-up draft preview",
    preview: [
      { text: "Hi Acme - can you confirm permit handling?", icon: "i-heroicons-envelope" },
      { text: "Please share current COI", icon: "i-heroicons-document-text" },
      { text: "Can you commit to a June 14 start?", icon: "i-heroicons-calendar" },
    ],
    mockup: {
      label: "Follow-up mockup",
      title: "Suggested vendor message",
      status: "Draft",
      image: "/screenshots/rfq-detail.png",
      alt: "Rysmaan RFQ detail screen with an AI follow-up message overlay",
    },
    audience: "Project managers and vendors",
    icon: "i-heroicons-chat-bubble-left-right",
    theme: "follow-up",
  },
];

const roadmapPrinciples = [
  {
    title: "For project managers",
    description:
      "Create RFQs, compare quotes, clarify gaps, and award work with fewer scattered notes.",
    icon: "i-heroicons-briefcase",
  },
  {
    title: "For service providers",
    description:
      "Receive clearer RFQs and faster, more specific clarification requests from project teams.",
    icon: "i-heroicons-user-group",
  },
  {
    title: "For every decision",
    description:
      "Keep suggestions editable, traceable, and tied to the RFQ, quote, message, or document.",
    icon: "i-heroicons-link",
  },
];

const selectedIdeaRank = ref(topRoadmapIdeas[0].rank);
const selectedIdea = computed(
  () => topRoadmapIdeas.find((idea) => idea.rank === selectedIdeaRank.value) ?? topRoadmapIdeas[0],
);

function selectIdea(rank: string) {
  selectedIdeaRank.value = rank;
}
</script>

<style scoped>
.roadmap-journey {
  position: relative;
  border-radius: 0.5rem;
  border: 1px solid rgb(229 231 235);
  background: rgb(255 255 255);
  padding: 1.25rem;
  box-shadow: 0 24px 60px -30px rgba(15, 23, 42, 0.25);
  animation: roadmap-enter 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.dark .roadmap-journey {
  border-color: rgb(31 41 55);
  background: rgb(17 24 39);
  box-shadow: 0 24px 60px -30px rgba(0, 0, 0, 0.6);
}

@media (min-width: 768px) {
  .roadmap-journey {
    padding: 1.5rem;
  }
}

.roadmap-journey-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(229 231 235);
}

.dark .roadmap-journey-header {
  border-color: rgb(31 41 55);
}

.roadmap-journey-badge {
  border-radius: 9999px;
  background: rgb(255 255 255);
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: rgb(0 75 141);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  border: 1px solid rgb(229 231 235);
}

.dark .roadmap-journey-badge {
  background: rgb(17 24 39);
  border-color: rgb(31 41 55);
  color: rgb(125 211 252);
}

.roadmap-journey-stages {
  position: relative;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.roadmap-journey-track {
  position: absolute;
  top: 1.5rem;
  bottom: 1.5rem;
  left: 1.4rem;
  width: 2px;
  background: linear-gradient(to bottom, rgb(226 232 240), rgb(226 232 240));
  border-radius: 9999px;
}

.dark .roadmap-journey-track {
  background: linear-gradient(to bottom, rgb(31 41 55), rgb(31 41 55));
}

.roadmap-stage {
  position: relative;
  display: grid;
  grid-template-columns: 2.75rem minmax(0, 1fr);
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 1px solid transparent;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  animation: roadmap-stage-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--stage-delay, 0ms);
}

.roadmap-stage:hover {
  background: rgb(249 250 251);
}

.dark .roadmap-stage:hover {
  background: rgb(17 24 39 / 0.6);
}

.roadmap-stage-active {
  background: rgb(249 250 251);
  border-color: rgb(229 231 235);
  transform: translateX(2px);
}

.dark .roadmap-stage-active {
  background: rgb(17 24 39);
  border-color: rgb(31 41 55);
}

.roadmap-stage-dot {
  position: relative;
  z-index: 1;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: rgb(255 255 255);
  border: 1px solid rgb(229 231 235);
  color: rgb(75 85 99);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.dark .roadmap-stage-dot {
  background: rgb(17 24 39);
  border-color: rgb(31 41 55);
  color: rgb(156 163 175);
}

.roadmap-stage-active .roadmap-stage-dot {
  color: rgb(255 255 255);
  box-shadow: 0 4px 14px -4px rgba(0, 75, 141, 0.45);
}

.roadmap-stage-rfq.roadmap-stage-active .roadmap-stage-dot {
  background: #0891b2;
  border-color: #0891b2;
}

.roadmap-stage-vendors.roadmap-stage-active .roadmap-stage-dot {
  background: #059669;
  border-color: #059669;
}

.roadmap-stage-quote.roadmap-stage-active .roadmap-stage-dot {
  background: #004b8d;
  border-color: #004b8d;
}

.roadmap-stage-risk.roadmap-stage-active .roadmap-stage-dot {
  background: #d97706;
  border-color: #d97706;
}

.roadmap-stage-follow-up.roadmap-stage-active .roadmap-stage-dot {
  background: #7c3aed;
  border-color: #7c3aed;
}

.roadmap-stage-label {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.roadmap-stage-step {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgb(156 163 175);
}

.dark .roadmap-stage-step {
  color: rgb(107 114 128);
}

.roadmap-stage-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: rgb(17 24 39);
}

.dark .roadmap-stage-title {
  color: rgb(243 244 246);
}

.roadmap-journey-preview {
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: 1px dashed rgb(229 231 235);
  background: rgb(249 250 251);
  padding: 0.875rem 1rem;
  min-height: 4.5rem;
}

.dark .roadmap-journey-preview {
  border-color: rgb(31 41 55);
  background: rgb(17 24 39 / 0.5);
}

.roadmap-journey-preview-icon {
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  flex-shrink: 0;
  color: white;
}

.roadmap-tab {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0.875rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(229 231 235);
  background: rgb(255 255 255);
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.dark .roadmap-tab {
  border-color: rgb(31 41 55);
  background: rgb(17 24 39);
}

.roadmap-tab:hover {
  border-color: rgb(203 213 225);
  transform: translateX(2px);
}

.dark .roadmap-tab:hover {
  border-color: rgb(55 65 81);
}

.roadmap-tab-active {
  border-color: rgb(0 75 141);
  box-shadow: 0 8px 24px -16px rgba(0, 75, 141, 0.5);
  transform: translateX(2px);
}

.dark .roadmap-tab-active {
  border-color: rgb(125 211 252);
  box-shadow: 0 8px 24px -16px rgba(125, 211, 252, 0.35);
}

.roadmap-tab-rank {
  display: flex;
  height: 2rem;
  width: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background: rgb(243 244 246);
  font-size: 0.8rem;
  font-weight: 700;
  color: rgb(75 85 99);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.dark .roadmap-tab-rank {
  background: rgb(31 41 55);
  color: rgb(156 163 175);
}

.roadmap-tab-active .roadmap-tab-rank {
  background: rgb(0 75 141);
  color: white;
}

.roadmap-tab-rfq.roadmap-tab-active .roadmap-tab-rank { background: #0891b2; }
.roadmap-tab-vendors.roadmap-tab-active .roadmap-tab-rank { background: #059669; }
.roadmap-tab-quote.roadmap-tab-active .roadmap-tab-rank { background: #004b8d; }
.roadmap-tab-risk.roadmap-tab-active .roadmap-tab-rank { background: #d97706; }
.roadmap-tab-follow-up.roadmap-tab-active .roadmap-tab-rank { background: #7c3aed; }

.roadmap-tab-title {
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  color: rgb(17 24 39);
}

.dark .roadmap-tab-title {
  color: rgb(243 244 246);
}

.roadmap-tab-stage {
  display: block;
  margin-top: 0.125rem;
  font-size: 0.75rem;
  color: rgb(107 114 128);
}

.dark .roadmap-tab-stage {
  color: rgb(156 163 175);
}

.roadmap-detail {
  position: relative;
  border-radius: 0.5rem;
  border: 1px solid rgb(229 231 235);
  background: rgb(255 255 255);
  padding: 1.75rem;
  box-shadow: 0 20px 50px -28px rgba(15, 23, 42, 0.25);
  overflow: hidden;
}

.dark .roadmap-detail {
  border-color: rgb(31 41 55);
  background: rgb(17 24 39);
  box-shadow: 0 20px 50px -28px rgba(0, 0, 0, 0.6);
}

.roadmap-detail::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 4px;
  background: var(--detail-accent, #004b8d);
}

.roadmap-detail-quote { --detail-accent: #004b8d; }
.roadmap-detail-rfq { --detail-accent: #0891b2; }
.roadmap-detail-vendors { --detail-accent: #059669; }
.roadmap-detail-risk { --detail-accent: #d97706; }
.roadmap-detail-follow-up { --detail-accent: #7c3aed; }

.roadmap-detail-icon {
  display: flex;
  height: 3rem;
  width: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  color: white;
}

.roadmap-audience-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  border-radius: 9999px;
  border: 1px solid rgb(229 231 235);
  background: rgb(249 250 251);
  padding: 0.375rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: rgb(75 85 99);
}

.dark .roadmap-audience-pill {
  border-color: rgb(31 41 55);
  background: rgb(15 23 42 / 0.75);
  color: rgb(209 213 219);
}

.roadmap-accent-quote { background: #004b8d; }
.roadmap-accent-rfq { background: #0891b2; }
.roadmap-accent-vendors { background: #059669; }
.roadmap-accent-risk { background: #d97706; }
.roadmap-accent-follow-up { background: #7c3aed; }

.roadmap-check-quote { color: #004b8d; }
.roadmap-check-rfq { color: #0891b2; }
.roadmap-check-vendors { color: #059669; }
.roadmap-check-risk { color: #d97706; }
.roadmap-check-follow-up { color: #7c3aed; }

.roadmap-mockup {
  border-radius: 0.5rem;
  border: 1px solid rgb(229 231 235);
  background: rgb(255 255 255);
  overflow: hidden;
  box-shadow: 0 18px 45px -28px rgba(15, 23, 42, 0.45);
}

.dark .roadmap-mockup {
  border-color: rgb(31 41 55);
  background: rgb(17 24 39);
  box-shadow: 0 18px 45px -28px rgba(0, 0, 0, 0.8);
}

.roadmap-mockup-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.375rem;
  padding: 0.625rem 0.875rem;
  border-bottom: 1px solid rgb(229 231 235);
  background: rgb(255 255 255);
}

.dark .roadmap-mockup-bar {
  border-color: rgb(31 41 55);
  background: rgb(17 24 39);
}

.roadmap-mockup-screen {
  position: relative;
  min-height: 18rem;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: rgb(241 245 249);
}

.dark .roadmap-mockup-screen {
  background: rgb(15 23 42);
}

.roadmap-mockup-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top left;
  opacity: 0.94;
}

.roadmap-ai-panel {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: min(23rem, calc(100% - 2rem));
  border-radius: 0.5rem;
  border: 1px solid rgb(226 232 240);
  background: rgb(255 255 255 / 0.96);
  padding: 1rem;
  box-shadow: 0 18px 45px -20px rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(10px);
}

.dark .roadmap-ai-panel {
  border-color: rgb(51 65 85);
  background: rgb(15 23 42 / 0.94);
  box-shadow: 0 18px 45px -20px rgba(0, 0, 0, 0.7);
}

.roadmap-ai-icon {
  display: flex;
  height: 2rem;
  width: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  color: white;
}

.roadmap-ai-eyebrow {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgb(148 163 184);
}

.roadmap-ai-title {
  margin-top: 0.05rem;
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 1.2;
  color: rgb(15 23 42);
}

.dark .roadmap-ai-title {
  color: rgb(248 250 252);
}

.roadmap-ai-status {
  flex-shrink: 0;
  border-radius: 9999px;
  background: rgb(239 246 255);
  padding: 0.2rem 0.55rem;
  font-size: 0.7rem;
  font-weight: 800;
  color: rgb(0 75 141);
}

.dark .roadmap-ai-status {
  background: rgb(7 89 133 / 0.28);
  color: rgb(125 211 252);
}

.roadmap-ai-list {
  margin-top: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.roadmap-ai-line {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8rem;
  line-height: 1.4;
  color: rgb(51 65 85);
  animation: roadmap-line-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--line-delay, 0ms);
}

.dark .roadmap-ai-line {
  color: rgb(226 232 240);
}

.roadmap-preview-dot {
  display: inline-block;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 9999px;
  background: rgb(226 232 240);
}

.dark .roadmap-preview-dot {
  background: rgb(55 65 81);
}

.roadmap-preview-label {
  margin-left: 0.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgb(156 163 175);
}

.dark .roadmap-preview-label {
  color: rgb(107 114 128);
}

.roadmap-step {
  position: relative;
  border-radius: 0.5rem;
  border: 1px solid rgb(229 231 235);
  background: rgb(255 255 255);
  padding: 1.5rem;
  animation: roadmap-enter 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--step-delay, 0ms);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.dark .roadmap-step {
  border-color: rgb(31 41 55);
  background: rgb(17 24 39);
}

.roadmap-step:hover {
  transform: translateY(-2px);
  border-color: rgb(186 230 253);
  box-shadow: 0 12px 30px -16px rgba(0, 75, 141, 0.25);
}

.dark .roadmap-step:hover {
  border-color: rgb(7 89 133);
}

.roadmap-step-index {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: rgb(156 163 175);
}

.dark .roadmap-step-index {
  color: rgb(75 85 99);
}

.roadmap-step-icon {
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background: rgb(239 246 255);
  color: rgb(0 75 141);
}

.dark .roadmap-step-icon {
  background: rgb(7 89 133 / 0.25);
  color: rgb(125 211 252);
}

.roadmap-cta {
  margin-top: 3rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(229 231 235);
  background: linear-gradient(135deg, rgb(239 246 255), rgb(255 255 255));
  padding: 1.75rem;
  box-shadow: 0 16px 40px -24px rgba(0, 75, 141, 0.25);
}

.dark .roadmap-cta {
  border-color: rgb(31 41 55);
  background: linear-gradient(135deg, rgb(15 23 42), rgb(17 24 39));
  box-shadow: 0 16px 40px -24px rgba(0, 0, 0, 0.6);
}

.roadmap-fade-enter-active,
.roadmap-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.roadmap-fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}

.roadmap-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.roadmap-card-enter-active,
.roadmap-card-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.roadmap-card-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.roadmap-card-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@keyframes roadmap-enter {
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes roadmap-stage-in {
  from {
    opacity: 0;
    transform: translateX(-0.5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes roadmap-line-in {
  from {
    opacity: 0;
    transform: translateY(0.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .roadmap-journey,
  .roadmap-stage,
  .roadmap-step,
  .roadmap-ai-line {
    animation: none;
  }

  .roadmap-tab,
  .roadmap-step,
  .roadmap-fade-enter-active,
  .roadmap-fade-leave-active,
  .roadmap-card-enter-active,
  .roadmap-card-leave-active {
    transition: none;
  }
}
</style>
