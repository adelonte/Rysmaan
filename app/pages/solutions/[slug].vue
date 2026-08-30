<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(`solution-${route.path}`, () =>
  queryCollection('solutions').path(route.path).first()
)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

function enterMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  }
}

function scrollMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: { once: true, amount: 1 },
    transition: { duration: 0.6, delay }
  }
}

function staggerMotion(index: number = 0) {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    inViewOptions: { once: true, amount: 1 },
    transition: { duration: 0.6, delay: index * 0.08 }
  }
}

const { copy, copied } = useClipboard()
</script>

<template>
  <div v-if="page">
    <!-- Hero -->
    <UPageHero
      :ui="{
        root: 'pb-16 sm:pb-20',
        container: 'relative z-10 lg:py-24',
        wrapper: 'flex flex-col items-center',
        title: 'sm:text-5xl lg:text-6xl tracking-tighter leading-[1.05]',
        description: 'mt-5 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-default',
        links: 'gap-3'
      }"
    >
      <template #top>
        <GradientGlow class="top-0 w-2/3 h-1/2" />
      </template>

      <template #headline>
        <Motion v-bind="enterMotion(0.1)">
          <UBadge
            color="neutral"
            variant="soft"
            :label="page.hero.headline"
            :icon="page.icon"
            class="rounded-full px-3 py-1.5 gap-1.5 backdrop-blur-sm"
          />
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="enterMotion(0.2)"
          class="inline-block"
        >
          {{ page.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="enterMotion(0.3)"
          class="inline-block"
        >
          {{ page.description }}
        </Motion>
      </template>

      <template #links>
        <Motion
          class="flex flex-wrap justify-center gap-6"
          v-bind="enterMotion(0.4)"
        >
          <UButton
            v-for="link in page.hero.links"
            :key="link.label"
            v-bind="link"
          />
        </Motion>
      </template>
    </UPageHero>

    <!-- Screenshot -->
    <UContainer
      v-if="page.screenshot"
      class="max-w-5xl pb-24 sm:pb-32"
    >
      <Motion v-bind="scrollMotion()">
        <ProductShot v-bind="page.screenshot" />
      </Motion>
    </UContainer>

    <!-- Features -->
    <UPageSection
      :ui="{
        root: 'pb-24 sm:pb-32',
        container: 'max-w-5xl',
        headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
        title: 'max-w-lg mx-auto',
        description: 'max-w-md mx-auto text-muted'
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          {{ page.features.headline }}
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.features.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.2)"
          class="inline-block"
        >
          {{ page.features.description }}
        </Motion>
      </template>

      <div class="rounded-2xl border border-default bg-default overflow-hidden">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-px">
          <Motion
            v-for="(feature, index) in page.features.items"
            :key="feature.title"
            v-bind="staggerMotion(index)"
          >
            <UPageCard
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
              class="rounded-none h-full"
              :ui="{
                leading: 'mb-5 flex size-9 justify-center rounded-lg bg-primary/10',
                title: 'text-sm tracking-tight',
                description: 'text-sm leading-relaxed text-muted'
              }"
            />
          </Motion>
        </div>
      </div>
    </UPageSection>

    <!-- CTA -->
    <UPageCTA
      id="contact"
      variant="naked"
      :ui="{
        root: 'pb-24 sm:pb-32 scroll-mt-(--ui-header-height)',
        container: 'max-w-3xl text-center',
        title: 'lg:text-5xl tracking-tighter whitespace-pre-line',
        description: 'mx-auto max-w-sm leading-relaxed text-muted'
      }"
    >
      <template #top>
        <GradientGlow class="bottom-0 w-2/3 h-1/2" />
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          {{ page.cta.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.cta.description }}
        </Motion>
      </template>

      <template #links>
        <Motion
          class="flex flex-col items-center justify-center gap-6"
          v-bind="scrollMotion(0.2)"
        >
          <UButton
            v-for="link in page.cta.links"
            :key="link.label"
            v-bind="link"
            size="xl"
          />

          <UButton
            :label="page.cta.contact"
            :trailing-icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
            color="neutral"
            variant="subtle"
            class="font-mono font-light text-toned gap-4"
            size="xl"
            :ui="{ trailingIcon: 'size-5' }"
            @click="copy(page.cta.contact)"
          />
        </Motion>
      </template>
    </UPageCTA>
  </div>
</template>
