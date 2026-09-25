<script setup lang="ts">
const { v3: site } = useAppConfig()
const config = useRuntimeConfig()
const formsEnabled = !import.meta.dev && String(config.public.v3FormsEnabled) === 'true'
const form = reactive({
  'name': '',
  'email': '',
  'firm': '',
  'staff': '',
  'accounting': '',
  'files': '',
  'notes': '',
  'bot-field': ''
})
const staffOptions = ['Under 30', '30 to 75', '76 to 150', 'Over 150']
const accountingOptions = [
  'Deltek Vantagepoint',
  'Deltek Ajera',
  'BQE CORE',
  'QuickBooks',
  'Something else'
]
const fileOptions = ['SharePoint or OneDrive', 'Network drive', 'Egnyte', 'Something else']
const status = ref<'idle' | 'sending' | 'sent' | 'error' | 'unavailable'>(formsEnabled ? 'idle' : 'unavailable')
const feedback = ref<HTMLElement>()

async function submit() {
  if (status.value === 'sending') return
  // Nuxt's development server can return the page with 200 for a POST.
  // That is not evidence that a lead was received.
  if (!formsEnabled) {
    status.value = 'unavailable'
    await nextTick()
    feedback.value?.focus()
    return
  }
  status.value = 'sending'
  const submission = Object.fromEntries(
    Object.entries(form).map(([key, value]) => [key, value.trim()])
  )
  try {
    const response = await fetch('/v3', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'pilot', ...submission }).toString(),
      signal: AbortSignal.timeout(15000)
    })
    status.value = response.ok ? 'sent' : 'error'
  } catch {
    status.value = 'error'
  }
  await nextTick()
  feedback.value?.focus()
}

const scope = [
  {
    term: 'Focused scope',
    detail: 'One accounting source and one document library, for one service line.'
  },
  {
    term: 'Three to four weeks',
    detail: 'From access to delivery, with your team helping confirm unclear details.'
  },
  {
    term: 'Price on application',
    detail: 'A fixed setup fee, agreed upfront. Monthly updates are optional.'
  }
]
</script>

<template>
  <section
    id="pilot"
    aria-labelledby="pilot-title"
    class="section-space"
  >
    <div class="section-shell">
      <div
        class="pilot-panel grid overflow-hidden rounded-2xl border border-default lg:grid-cols-[1fr_1.05fr]"
      >
        <div
          v-v3-reveal
          class="pilot-intro p-7 sm:p-10"
        >
          <p class="pilot-label">
            Founding pilot
          </p>
          <h2
            id="pilot-title"
            class="section-title mt-5"
          >
            Start with your own history.
          </h2>
          <p class="pilot-description mt-5 max-w-md text-base leading-relaxed">
            A focused first project to see what connected records can do for your firm.
          </p>
          <dl class="pilot-scope mt-8">
            <div
              v-for="item in scope"
              :key="item.term"
              class="py-5"
            >
              <dt class="text-sm font-medium">
                {{ item.term }}
              </dt>
              <dd class="pilot-description mt-2 text-sm leading-relaxed">
                {{ item.detail }}
              </dd>
            </div>
          </dl>
        </div>
        <div class="bg-default p-7 sm:p-10">
          <div
            v-if="status === 'sent'"
            ref="feedback"
            role="status"
            tabindex="-1"
            class="flex h-full flex-col items-start justify-center py-10 focus:outline-none"
          >
            <span
              class="flex size-12 items-center justify-center rounded-full bg-muted text-primary"
            ><UIcon
              name="i-lucide-check"
              class="size-6"
              aria-hidden="true"
            /></span>
            <h3 class="mt-4 text-2xl font-medium tracking-tight">
              Thanks for getting in touch.
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-muted">
              We’ll reply to {{ form.email.trim() }} to discuss your pilot.
            </p>
          </div>
          <form
            v-else
            name="pilot"
            method="POST"
            action="/v3/thanks/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            :aria-busy="status === 'sending'"
            class="space-y-5"
            @submit.prevent="submit"
          >
            <input
              type="hidden"
              name="form-name"
              value="pilot"
            >
            <p hidden>
              <label>Leave this field empty<input
                v-model="form['bot-field']"
                name="bot-field"
                tabindex="-1"
                autocomplete="off"
              ></label>
            </p>
            <h3 class="text-xl font-medium tracking-tight">
              Tell us about your firm
            </h3>
            <fieldset
              :disabled="status === 'sending'"
              class="space-y-5"
            >
              <legend class="sr-only">
                Pilot application details
              </legend>
              <div class="grid gap-5 sm:grid-cols-2">
                <UFormField
                  label="Your name"
                  name="name"
                  required
                >
                  <UInput
                    v-model="form.name"
                    name="name"
                    autocomplete="name"
                    required
                    maxlength="120"
                    size="lg"
                    class="w-full"
                  />
                </UFormField>
                <UFormField
                  label="Work email"
                  name="email"
                  required
                >
                  <UInput
                    v-model="form.email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    maxlength="254"
                    size="lg"
                    class="w-full"
                  />
                </UFormField>
              </div>
              <UFormField
                label="Firm"
                name="firm"
                required
              >
                <UInput
                  v-model="form.firm"
                  name="firm"
                  autocomplete="organization"
                  required
                  maxlength="160"
                  size="lg"
                  class="w-full"
                />
              </UFormField>
              <UFormField
                label="What would you like to make easier?"
                name="notes"
                hint="Optional"
              >
                <UTextarea
                  v-model="form.notes"
                  name="notes"
                  :rows="3"
                  maxlength="3000"
                  size="lg"
                  class="w-full"
                />
              </UFormField>
              <details class="pilot-options">
                <summary>About your setup <span class="text-muted">(optional)</span></summary>
                <div class="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      for="pilot-staff"
                      class="mb-2 block text-sm font-medium"
                    >Firm size</label><select
                      id="pilot-staff"
                      v-model="form.staff"
                      name="staff"
                      class="pilot-select"
                    >
                      <option value="">
                        Select size
                      </option>
                      <option
                        v-for="option in staffOptions"
                        :key="option"
                        :value="option"
                      >
                        {{ option }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="pilot-accounting"
                      class="mb-2 block text-sm font-medium"
                    >Accounting system</label><select
                      id="pilot-accounting"
                      v-model="form.accounting"
                      name="accounting"
                      class="pilot-select"
                    >
                      <option value="">
                        Select system
                      </option>
                      <option
                        v-for="option in accountingOptions"
                        :key="option"
                        :value="option"
                      >
                        {{ option }}
                      </option>
                    </select>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="pilot-files"
                      class="mb-2 block text-sm font-medium"
                    >Where project files live</label><select
                      id="pilot-files"
                      v-model="form.files"
                      name="files"
                      class="pilot-select"
                    >
                      <option value="">
                        Select location
                      </option>
                      <option
                        v-for="option in fileOptions"
                        :key="option"
                        :value="option"
                      >
                        {{ option }}
                      </option>
                    </select>
                  </div>
                </div>
              </details>
            </fieldset>
            <p
              v-if="status === 'error' || status === 'unavailable'"
              ref="feedback"
              role="alert"
              tabindex="-1"
              class="rounded-lg border border-default bg-muted p-4 text-sm leading-relaxed text-toned focus:outline-none"
            >
              {{
                status === 'unavailable'
                  ? 'Online applications aren’t available in this preview. Please email us instead.'
                  : 'Your application didn’t send. Please try again, or email us.'
              }}
              <a
                :href="`mailto:${site.email}`"
                class="mt-1 block font-medium text-primary underline"
              >{{ site.email }}</a>
            </p>
            <V3GradientButton
              type="submit"
              label="Send application"
              size="xl"
              block
              :loading="status === 'sending'"
              :disabled="!formsEnabled || status === 'sending'"
            />
            <p class="text-xs leading-relaxed text-muted">
              We’ll use these details to reply about your pilot.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pilot-intro {
  background: #172e3d;
  color: white;
}
.pilot-label {
  color: #a9d8d1;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.pilot-description {
  color: #b6c5cf;
}
.pilot-scope > div {
  border-top: 1px solid #ffffff16;
}
.pilot-options {
  border-top: 1px solid var(--ui-border);
  padding-top: 16px;
}
.pilot-options summary {
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
}
.pilot-select {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--ui-border);
  border-radius: 6px;
  background: var(--ui-bg);
  font: inherit;
  font-size: 14px;
  color: var(--ui-text);
}
</style>
