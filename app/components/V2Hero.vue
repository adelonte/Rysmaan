<template>
  <section
    id="top"
    class="hero-scene"
    aria-labelledby="hero-heading"
  >
    <div class="hero-artwork">
      <CalgaryBackdrop
        variant="day"
        class="hero-landscape absolute inset-0"
      />
    </div>

    <div class="hero-sticky">
      <div class="hero-content">
        <div
          id="main-content"
          class="hero-card"
          tabindex="-1"
        >
          <p class="hero-eyebrow">
            Early stage · Calgary, Alberta
          </p>
          <h1
            id="hero-heading"
            class="font-display"
          >
            We're building something new<br class="hidden sm:block"> for construction.
          </h1>
          <p class="hero-description">
            Rysmaan is a construction technology startup in Calgary. We're early
            — still out on sites and in project offices, working out what this
            industry actually needs before we go and build it.
          </p>
          <a
            href="#about"
            class="hero-link"
          >
            <span>What we're about</span>
            <span
              class="hero-link-arrow"
              aria-hidden="true"
            >↓</span>
          </a>
        </div>
        <a
          href="#about"
          class="scroll-cue"
        >
          <span>Calgary, Alberta<br><span class="scroll-label">Scroll to discover</span></span>
          <span
            aria-hidden="true"
            class="scroll-arrow"
          >↓</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-scene {
  position: relative;
  height: 145svh;
  min-height: 850px;
  background: #233d3d;
}
.hero-artwork { position: absolute; inset: 0; overflow: clip; }
.hero-sticky {
  position: sticky;
  top: 0;
  height: 100svh;
  min-height: 580px;
  display: flex;
  align-items: end;
  padding: 32px;
  pointer-events: none;
}
.hero-content { display: flex; align-items: end; justify-content: space-between; gap: 24px; width: 100%; }
.hero-card {
  pointer-events: auto;
  width: min(100%, 490px);
  padding: 30px;
  border: 1px solid rgb(255 255 255 / 25%);
  border-radius: 16px;
  background: linear-gradient(125deg, rgb(20 43 42 / 55%), rgb(37 58 54 / 32%));
  backdrop-filter: blur(20px) saturate(115%);
  box-shadow: 0 4px 24px rgb(8 25 28 / 12%), inset 0 1px rgb(255 255 255 / 8%);
  color: white;
  animation: card-arrive 500ms ease-out both;
}
.hero-eyebrow { font-family: var(--font-mono); font-size: 10px; line-height: 1.5; letter-spacing: 0.12em; text-transform: uppercase; color: rgb(255 255 255 / 75%); margin-bottom: 18px; }
.hero-card h1 { font-size: clamp(2rem, 3.2vw, 2.8rem); line-height: 1.06; letter-spacing: -0.025em; text-wrap: balance; }
.hero-description { max-width: 40ch; margin-top: 20px; font-size: 14px; line-height: 1.6; color: rgb(255 255 255 / 88%); }
.hero-link { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; margin-top: 16px; font-size: 14px; }
.hero-link > span:first-child { text-decoration: underline; text-decoration-color: rgb(255 255 255 / 40%); text-underline-offset: 5px; }
.hero-link-arrow { display: grid; place-items: center; width: 22px; height: 22px; border: 1px solid rgb(255 255 255 / 30%); border-radius: 50%; transition: transform 180ms ease; }
.hero-link:hover .hero-link-arrow { transform: translateY(2px); }
.scroll-cue { pointer-events: auto; display: flex; align-items: center; gap: 16px; color: white; text-align: right; font-size: 12px; line-height: 1.7; text-shadow: 0 1px 4px rgb(0 0 0 / 40%); }
.scroll-label { opacity: 0.65; }
.scroll-arrow { display: grid; place-items: center; width: 36px; height: 48px; border: 1px solid rgb(255 255 255 / 35%); border-radius: 20px; background: rgb(15 35 35 / 20%); }
/* Native timelines follow the actual scroll position, including direction changes.
   Other browsers keep the same layout with a static landscape. */
@supports (animation-timeline: scroll()) {
  @media (prefers-reduced-motion: no-preference) and (min-width: 768px) and (min-height: 651px) {
    .hero-landscape {
      animation: landscape-depth linear both;
      animation-timeline: scroll(root block);
      animation-range: 0px 145svh;
    }
    .scroll-arrow { position: relative; overflow: hidden; isolation: isolate; }
    .scroll-arrow::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background: rgb(255 255 255 / 20%);
      transform-origin: bottom;
      animation: scroll-fill linear both;
      animation-timeline: scroll(root block);
      animation-range: 0px 45svh;
    }
  }
}
@keyframes landscape-depth {
  from { transform: translateY(-24px) scale(1.04); }
  to { transform: translateY(24px) scale(1.04); }
}
@keyframes scroll-fill {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
a:focus-visible, .hero-card:focus-visible { outline: 2px solid white; outline-offset: 5px; }
@keyframes card-arrive { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 767px) {
  .hero-scene { height: 125svh; min-height: 760px; }
  .hero-sticky { padding: 16px; min-height: 600px; }
  .hero-card { padding: 24px; }
  .hero-eyebrow { font-size: 9px; margin-bottom: 14px; }
  .hero-description { margin-top: 16px; }
  .scroll-cue { display: none; }
}
@media (max-height: 650px) {
  .hero-scene { height: auto; min-height: 0; }
  .hero-sticky { position: relative; height: auto; min-height: 0; padding-top: 120px; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-scene { height: auto; min-height: 0; }
  .hero-sticky { position: relative; }
  .hero-card { animation: none; }
  .hero-link-arrow { transition: none; }
}
@media (prefers-reduced-transparency: reduce), (prefers-contrast: more) {
  .hero-card { background: #233d3d; backdrop-filter: none; }
}
</style>
