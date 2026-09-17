<script setup lang="ts">
/**
 * v2 — an alternate version of the site that says what Rysmaan is and nothing
 * more, built in the full-bleed scene + glass card language of the reference
 * design. It lives beside the live site rather than replacing it; see
 * app/layouts/v2.vue for why it shares no chrome.
 *
 * Copy is inline rather than in content/ so this page can be deleted in one
 * move without leaving an orphaned collection entry behind.
 */
definePageMeta({ layout: 'v2' })
useV2SmoothScroll()

const title = 'Rysmaan — A construction technology startup in Calgary'
const description = 'Rysmaan is an early-stage construction technology startup in Calgary, working on something new for the owners, contractors and suppliers who deliver projects.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  // v2 is a parallel draft, not a second front door — keep it out of search.
  robots: 'noindex, nofollow'
})

const facts = [
  {
    label: 'The company',
    body: 'A small team of engineers and construction people, building software full-time for an industry that has mostly been handed tools built for someone else.'
  },
  {
    label: 'The industry',
    body: 'Energy, infrastructure and industrial construction — where one project can touch hundreds of vendors and tens of thousands of documents before anything is built.'
  },
  {
    label: 'What we\'re sure of',
    body: 'That the hard part isn\'t the building. It\'s everything around it — the approvals, the revisions, the drawing that turned out not to be the latest one. That\'s the part we\'re going after.'
  },
  {
    label: 'The stage',
    body: 'Early, and honest about it. We spend more time in project offices than in our own right now, because the shape of this comes from those conversations rather than from us.'
  }
]

const footerLinks = [
  { label: 'About', to: '#about' },
  { label: 'Calgary', to: '#calgary' },
  { label: 'Contact', to: 'mailto:hello@rysmaan.com' },
  { label: 'Current site', to: '/' }
]

const reducedMotion = usePreferredReducedMotion()
const aboutSection = useTemplateRef('aboutSection')
const calgarySection = useTemplateRef('calgarySection')
const { top: aboutTop, bottom: aboutBottom } = useElementBounding(aboutSection)
const { top: calgaryTop, height: calgaryHeight } = useElementBounding(calgarySection)
const onPaper = computed(() => aboutTop.value <= 96 && aboutBottom.value > 96)
const activeSection = computed(() => onPaper.value ? 'about' : calgaryHeight.value > 0 && calgaryTop.value <= 96 ? 'calgary' : '')

function scrollMotion(delay: number = 0) {
  return {
    initial: { opacity: reducedMotion.value === 'reduce' ? 1 : 0, y: reducedMotion.value === 'reduce' ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: { once: true, amount: 0.15 },
    transition: { duration: reducedMotion.value === 'reduce' ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: reducedMotion.value === 'reduce' ? 0 : delay }
  }
}
</script>

<template>
  <div class="v2-page">
    <V2Nav
      :on-paper="onPaper"
      :active-section="activeSection"
    />
    <main>
      <V2Hero />

      <!-- About -->
      <section
        id="about"
        ref="aboutSection"
        class="about-paper bg-[#f5f2ea] px-6 py-24 sm:px-10 sm:py-32"
      >
        <div class="mx-auto max-w-5xl">
          <Motion v-bind="scrollMotion()">
            <p class="font-mono text-xs uppercase tracking-[0.18em] text-[#14161a]/45">
              Who we are
            </p>

            <h2 class="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
              A technology company for the industry that builds everything else.
            </h2>

            <p class="mt-8 max-w-xl text-lg leading-relaxed text-[#14161a]/70">
              Projects worth billions still run on spreadsheets, inbox threads and
              PDFs nobody can find twice. We think that's a software problem,
              and a far more interesting one than it sounds.
            </p>
          </Motion>

          <dl class="mt-16 border-t border-[#14161a]/10">
            <Motion
              v-for="fact in facts"
              :key="fact.label"
              v-bind="scrollMotion()"
              class="grid gap-3 border-b border-[#14161a]/10 py-10 sm:grid-cols-[10rem_1fr] sm:gap-10"
            >
              <dt class="font-mono text-xs uppercase tracking-[0.12em] text-[#14161a]/45 sm:pt-1.5">
                {{ fact.label }}
              </dt>
              <dd class="max-w-2xl text-lg leading-relaxed text-[#14161a]/80">
                {{ fact.body }}
              </dd>
            </Motion>
          </dl>
        </div>
      </section>

      <!-- Calgary -->
      <section
        id="calgary"
        ref="calgarySection"
        class="relative flex h-svh min-h-[38rem] flex-col overflow-hidden"
      >
        <CalgaryBackdrop
          variant="dusk"
          class="absolute inset-0"
        />

        <div class="relative flex flex-1 items-start px-4 pt-24 sm:items-center sm:px-10 sm:pt-20">
          <Motion
            v-bind="scrollMotion()"
            class="w-full sm:max-w-lg"
          >
            <div class="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-8">
              <h2 class="font-display text-3xl leading-[1.08] tracking-tight text-white sm:text-[2.4rem]">
                Our mission is to take the paperwork out of building.
              </h2>

              <p class="mt-4 text-sm leading-relaxed text-white/70">
                Rysmaan was founded in Calgary, Alberta — close enough to the
                energy and infrastructure projects it serves that we can stand on
                them. It's the right place to build this, and we're early
                enough that the next decisions are still ours to make.
              </p>

              <p class="mt-3 text-xs text-white/45">
                If you build in this industry, or want to build for it, we'd
                like to hear from you.
              </p>
            </div>
          </Motion>
        </div>

        <!-- Footer, overlaid on the scene -->
        <footer class="relative px-4 pb-6 sm:px-10 sm:pb-8">
          <div class="flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-6">
            <nav class="flex flex-wrap gap-x-6 gap-y-2">
              <NuxtLink
                v-for="link in footerLinks"
                :key="link.label"
                :to="link.to"
                class="font-mono text-xs uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-white"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>

            <a
              href="mailto:hello@rysmaan.com"
              class="group flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
            >
              hello@rysmaan.com
              <span class="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
          </div>

          <p class="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-white/40">
            &copy; Rysmaan {{ new Date().getFullYear() }}
          </p>
        </footer>
      </section>
    </main>
  </div>
</template>

<style>
html:has(.v2-page) { scroll-behavior: smooth; }
html.lenis:has(.v2-page) { scroll-behavior: auto; }
.v2-page .about-paper {
  position: relative;
  z-index: 1;
  margin-top: -24px;
  border-radius: 24px 24px 0 0;
  box-shadow: 0 -12px 36px rgb(8 25 28 / 8%);
}
.v2-page #about, .v2-page #calgary { scroll-margin-top: 88px; }
@media (prefers-reduced-motion: reduce) {
  html:has(.v2-page) { scroll-behavior: auto; }
}
</style>
