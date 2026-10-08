<script setup lang="ts">
const scope = [
  {
    term: 'Zero-disruption setup',
    detail:
      'We connect a read-only layer to your system. Your files stay exactly where they are.'
  },
  {
    term: 'Focused scope',
    detail: 'We start with just one SharePoint folder or project archive.'
  },
  {
    term: 'Background delivery',
    detail:
      'The tool works automatically in the background. It never interrupts your team’s daily work.'
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
            We’ll help integrate Rysmaan into your system.
          </h2>
          <p class="pilot-description mt-5 max-w-md text-base leading-relaxed">
            Start with a collection of project files from your file system or
            SharePoint.
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
          <V3ApolloForm />
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
</style>
