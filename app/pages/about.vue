<script setup lang="ts">
definePageMeta({ layout: 'v3', colorMode: 'light' })
const { v3: site } = useAppConfig()
const bookingUrl = computed(() => site.bookingUrl.startsWith('#') ? `/v3${site.bookingUrl}` : site.bookingUrl)

const title = 'About Rysmaan — Connecting company knowledge'
const description = 'Built by engineers in Calgary, Rysmaan turns company files from file systems, SharePoint or drives into checked, connected records for analytics and AI.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '/v3/video/rysmaan-overview-poster.jpg',
  twitterImage: '/v3/video/rysmaan-overview-poster.jpg'
})
</script>

<template>
  <div>
    <a
      href="#main-content"
      class="skip-link"
    >Skip to content</a>
    <V3SiteHeader />
    <main
      id="main-content"
      tabindex="-1"
      class="section-shell section-space"
    >
      <header class="max-w-3xl">
        <p class="eyebrow">
          About Rysmaan
        </p>
        <h1 class="display mt-6 text-4xl leading-[1.08] text-default sm:text-6xl">
          Your company's knowledge,<br>connected.
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-toned">
          We're a team of engineers in Calgary, Alberta. We're building Rysmaan
          to help companies connect and use the knowledge in their file systems,
          SharePoint or drives.
        </p>
      </header>

      <div class="mt-14 grid gap-10 border-t border-default pt-10 sm:mt-20 sm:grid-cols-[1fr_2fr] sm:gap-16">
        <aside aria-label="Company details">
          <dl class="space-y-6">
            <div>
              <dt class="text-xs font-semibold uppercase tracking-widest text-muted">
                Based in
              </dt>
              <dd class="mt-2 text-default">
                Calgary, Alberta
              </dd>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-widest text-muted">
                Building for
              </dt>
              <dd class="mt-2 text-default">
                Engineering firms &amp; project teams
              </dd>
            </div>
          </dl>
        </aside>

        <div class="space-y-10">
          <section aria-labelledby="mission-heading">
            <h2
              id="mission-heading"
              class="text-xl font-semibold text-default"
            >
              Make company knowledge useful.
            </h2>
            <p class="mt-4 leading-relaxed text-toned">
              Company knowledge is spread across documents, spreadsheets and
              folders. Rysmaan reads files from your company's file systems,
              SharePoint or drives, connects related information across them,
              and turns it into structured records. The result is a foundation
              that can be connected to your applications.
            </p>
          </section>

          <section aria-labelledby="approach-heading">
            <h2
              id="approach-heading"
              class="text-xl font-semibold text-default"
            >
              Evidence before answers.
            </h2>
            <p class="mt-4 leading-relaxed text-toned">
              Useful knowledge needs a source you can check. Each detail keeps a
              reference to the file it came from. Uncertain matches and conflicting
              information are flagged for your team's review, so human judgment
              shapes the final record. Your original files stay in place, and the
              database belongs to your firm.
            </p>
          </section>

          <section
            aria-labelledby="contact-heading"
            class="border-t border-default pt-8"
          >
            <h2
              id="contact-heading"
              class="text-xl font-semibold text-default"
            >
              Build this with us.
            </h2>
            <p class="mt-3 leading-relaxed text-toned">
              We're inviting founding pilot firms to help shape the product around
              the files your company already uses. Tell us about your team and the knowledge
              you'd like to connect.
            </p>
            <div class="mt-5 flex flex-wrap items-center gap-5">
              <V3GradientButton
                :to="bookingUrl"
                label="Discuss a pilot"
                trailing-icon="i-lucide-arrow-up-right"
                size="lg"
              />
              <a
                :href="`mailto:${site.email}`"
                class="text-sm text-toned underline"
              >{{ site.email }}</a>
            </div>
          </section>
        </div>
      </div>
    </main>
    <V3SiteFooter />
  </div>
</template>
