<script setup lang="ts">
interface ApolloForms {
  init: (options: { appId: string, onReady: () => void, onError: (error: Error) => void }) => void
  destroy: () => void
}

const { v3: site } = useAppConfig()
const status = ref<'loading' | 'ready' | 'error'>('loading')
let active = false
let timeout: ReturnType<typeof setTimeout> | undefined
let script: HTMLScriptElement | undefined
let forms: ApolloForms | undefined

function fail(error: Error) {
  if (!active) return
  clearTimeout(timeout)
  status.value = 'error'
  console.error('[Apollo] Unable to load contact form:', error)
}

function initialize() {
  if (!active) return
  try {
    forms = (window as Window & { ApolloInbound?: { forms: ApolloForms } }).ApolloInbound?.forms
    if (!forms) throw new Error('Form builder is unavailable')
    forms.init({
      appId: site.apolloAppId,
      onReady: () => {
        if (!active) return
        clearTimeout(timeout)
        status.value = 'ready'
      },
      onError: fail
    })
  } catch (error) {
    fail(error instanceof Error ? error : new Error(String(error)))
  }
}

function scriptFailed() {
  script?.remove()
  fail(new Error('Failed to load form builder script'))
}

onMounted(() => {
  active = true
  timeout = setTimeout(() => fail(new Error('Contact form loading timed out')), 20000)

  if ((window as Window & { ApolloInbound?: { forms: ApolloForms } }).ApolloInbound?.forms) {
    initialize()
    return
  }

  // Keep one SDK script when visitors leave and return via Nuxt navigation.
  script = document.getElementById('apollo-inbound-script') as HTMLScriptElement | null ?? undefined
  const newScript = !script
  if (!script) {
    script = document.createElement('script')
    script.id = 'apollo-inbound-script'
    script.src = `https://assets.apollo.io/js/apollo-inbound.js?nocache=${Math.random().toString(36).substring(7)}`
    script.async = true
  }
  script.addEventListener('load', initialize, { once: true })
  script.addEventListener('error', scriptFailed, { once: true })
  if (newScript) document.head.appendChild(script)
})

onBeforeUnmount(() => {
  active = false
  clearTimeout(timeout)
  script?.removeEventListener('load', initialize)
  script?.removeEventListener('error', scriptFailed)
  forms?.destroy()
})
</script>

<template>
  <div>
    <p
      v-if="status === 'loading'"
      role="status"
      class="mb-5 text-sm text-muted"
    >
      Loading contact form…
    </p>
    <p
      v-else-if="status === 'error'"
      role="alert"
      class="mb-5 rounded-lg border border-default bg-muted p-4 text-sm leading-relaxed text-toned"
    >
      The contact form couldn’t load. Please email us instead.
    </p>
    <div
      v-show="status === 'ready'"
      id="apollo-forms"
    />
    <p class="mt-5 text-sm leading-relaxed text-muted">
      Prefer email? <a
        :href="`mailto:${site.email}`"
        class="font-medium text-primary underline"
      >{{ site.email }}</a>
    </p>
    <noscript>Enable JavaScript to use the contact form, or email us above.</noscript>
  </div>
</template>
