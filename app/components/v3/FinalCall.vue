<script setup lang="ts">
const { v3: site } = useAppConfig()
</script>

<template>
  <section
    aria-labelledby="final-title"
    class="final-section"
  >
    <div class="section-shell">
      <div class="final-card">
        <div
          class="final-lines"
          aria-hidden="true"
        >
          <span
            v-for="index in 4"
            :key="index"
            v-v3-reveal="{ preset: 'settle', delay: (index - 1) * 70 }"
          />
        </div>
        <div
          v-v3-reveal
          class="relative max-w-2xl"
        >
          <h2
            id="final-title"
            class="display text-[34px] leading-[1.06] sm:text-[48px]"
          >
            You’ve already done<br>the work. Put it to use.
          </h2>
          <p class="final-description mt-6 max-w-md text-base leading-relaxed">
            Thirty minutes, no slides. Tell us what you rebuild by hand, and we’ll explore what a
            connected history could do for your firm.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <UButton
              :to="site.bookingUrl"
              label="Discuss a pilot"
              trailing-icon="i-lucide-arrow-up-right"
              size="xl"
              color="neutral"
              class="secondary-button bg-default text-default hover:bg-muted"
            />
            <a
              :href="`mailto:${site.email}`"
              class="final-email"
            >{{ site.email }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-section {
  padding-bottom: 48px;
}
.final-card {
  position: relative;
  overflow: hidden;
  padding: 48px;
  border-radius: 16px;
  background: #172e3d;
  color: white;
}
.final-description {
  color: #b6c5cf;
}
.final-email {
  font-size: 13px;
  color: #c0d1db;
  text-decoration: underline;
  text-underline-offset: 5px;
}
.final-lines {
  position: absolute;
  right: -180px;
  top: -110px;
  width: 610px;
  height: 610px;
  transform: rotate(-30deg);
  pointer-events: none;
}
.final-lines span {
  position: absolute;
  inset: 0;
  border: 1px solid #ffffff12;
  border-radius: 120px;
}
.final-lines span:nth-child(2) {
  inset: 50px;
  border-color: #88d6c72b;
}
.final-lines span:nth-child(3) {
  inset: 100px;
}
.final-lines span:nth-child(4) {
  inset: 150px;
  border-color: #88d6c733;
}
@media (max-width: 767px) {
  .final-card {
    padding: 40px 24px;
  }
  .final-lines {
    opacity: 0.5;
    right: -380px;
  }
}
</style>
