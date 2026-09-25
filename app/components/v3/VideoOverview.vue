<script setup lang="ts">
const video = ref<HTMLVideoElement>()
const enhanced = ref(false)
onMounted(() => {
  enhanced.value = true
})
const started = ref(false)
const starting = ref(false)
const failed = ref(false)

async function play() {
  if (!video.value || starting.value) return
  starting.value = true
  failed.value = false
  try {
    await video.value.play()
    await nextTick()
    video.value?.focus({ preventScroll: true })
  } catch {
    failed.value = true
    started.value = true
  } finally {
    starting.value = false
  }
}
</script>

<template>
  <section
    id="overview"
    aria-labelledby="overview-title"
    class="section-space border-t border-default"
  >
    <div class="section-shell overview-layout">
      <div
        v-v3-reveal
        class="overview-heading"
      >
        <V3SectionHeading
          id="overview-title"
          kicker="The 40-second overview"
          title="See it come together."
          :center="false"
        />
        <p
          id="overview-description"
          class="mt-5 max-w-sm text-base leading-relaxed text-muted"
        >
          See how scattered project files become a connected history your whole team can use.
        </p>
      </div>
      <div class="overview-media">
        <figure>
          <div class="overview-player">
            <video
              ref="video"
              :controls="!enhanced || started || failed"
              playsinline
              preload="none"
              width="1920"
              height="1080"
              poster="/v3/video/rysmaan-overview-poster.jpg"
              aria-label="How Rysmaan works: a 40-second animated overview"
              aria-describedby="overview-description"
              @play="started = true"
              @error="failed = true"
            >
              <source
                src="/v3/video/rysmaan-overview.mp4"
                type="video/mp4"
              >
              <track
                kind="captions"
                src="/v3/video/rysmaan-overview.vtt"
                srclang="en"
                label="English"
              >
              <p>
                <a href="/v3/video/rysmaan-overview.mp4">Download the video</a> to watch it on your
                device.
              </p>
            </video>
            <ClientOnly>
              <button
                v-if="!started && !failed"
                type="button"
                class="overview-play"
                :disabled="starting"
                aria-label="Play the 40-second overview"
                @click="play"
              >
                <span class="overview-play-label"><UIcon
                  name="i-lucide-play"
                  class="size-5"
                  aria-hidden="true"
                />{{
                  starting ? 'Loading…' : 'Watch the overview'
                }}<span class="overview-duration">0:40</span></span>
              </button>
            </ClientOnly>
          </div>
          <figcaption class="overview-caption">
            <span>40 seconds · No sound needed</span>
            <a
              href="/v3/video/rysmaan-overview.mp4"
              download="rysmaan-overview.mp4"
              class="inline-flex items-center gap-2 text-toned"
            ><UIcon
              name="i-lucide-download"
              class="size-3.5"
              aria-hidden="true"
            />Download
              video</a>
          </figcaption>
        </figure>
        <p
          v-if="failed"
          role="alert"
          class="mt-3 text-sm text-muted"
        >
          The video couldn’t play. Try the player controls or download it to watch on your device.
        </p>
        <details class="overview-transcript">
          <summary>Read the video transcript</summary>
          <div class="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
            <p>
              <strong class="font-medium text-toned">Your project history is already there.</strong>
              It’s just spread across files, folders, and spreadsheets.
            </p>
            <p>
              <strong class="font-medium text-toned">Rysmaan brings it together.</strong> We connect
              the pieces that belong to the same project.
            </p>
            <p>
              <strong class="font-medium text-toned">A little clarity from you.</strong> When
              details disagree, you help confirm what’s right.
            </p>
            <p>
              <strong class="font-medium text-toned">Answers in the tools you know.</strong> See the
              bigger picture in reports. Ask better questions with AI.
            </p>
            <p>
              <strong class="font-medium text-toned">Your knowledge keeps growing.</strong> Start
              with a pilot. Add monthly updates when you’re ready.
            </p>
            <p>
              <strong class="font-medium text-toned">Your project history. Finally connected.</strong>
              Start with a conversation.
            </p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.overview-layout {
  display: grid;
  grid-template-columns: 0.65fr 1fr;
  align-items: start;
  gap: 64px;
}
.overview-heading {
  padding-top: 24px;
}
.overview-player {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid var(--ui-border);
  background: #f8fbfb;
}
.overview-player video {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
}
.overview-play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 24px;
  cursor: pointer;
  background: linear-gradient(transparent 60%, #f8fbfb88);
}
.overview-play-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--color-ink);
  color: white;
  padding: 16px 22px;
  border: 1px solid #ffffff20;
  border-radius: 10px;
  box-shadow: 0 4px 20px #172e3d26;
  transition:
    transform 160ms var(--ease-out),
    background-color 160ms ease;
  font-size: 14px;
  font-weight: 500;
}
.overview-duration {
  color: #b6c5cf;
  padding-left: 12px;
  border-left: 1px solid #ffffff26;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}
.overview-play:focus-visible {
  outline-offset: -6px;
  border-radius: 12px;
}
.overview-play:active .overview-play-label {
  transform: scale(0.98);
}
.overview-caption {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 16px;
  font-size: 12px;
  color: var(--ui-text-muted);
}
.overview-transcript {
  margin-top: 20px;
  font-size: 12px;
  color: var(--ui-text-muted);
}
.overview-transcript summary {
  cursor: pointer;
  width: fit-content;
}
@media (hover: hover) and (pointer: fine) {
  .overview-play:hover .overview-play-label {
    transform: translateY(-2px);
    background: #254657;
  }
}
@media (max-width: 900px) {
  .overview-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .overview-heading {
    padding-top: 0;
  }
}
@media (max-width: 640px) {
  .overview-play {
    padding-bottom: 4px;
  }
  .overview-play-label {
    gap: 8px;
    padding: 10px 12px;
    font-size: 12px;
  }
  .overview-duration {
    padding-left: 8px;
    font-size: 10px;
  }
}
</style>
