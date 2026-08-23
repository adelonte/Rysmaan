<script setup lang="ts">
interface ActivitySegment {
  text: string
  style: string
}

interface ActivityLine {
  icon: string
  time: string
  segments: ActivitySegment[]
}

const { lines } = defineProps<{
  project: string
  reference: string
  lines: ActivityLine[]
}>()

const segmentStyles: Record<string, string> = {
  strong: 'text-highlighted font-medium',
  dim: 'text-muted',
  accent: 'text-primary',
  success: 'text-success',
  warn: 'text-warning'
}

function lineMotion(index: number) {
  return {
    initial: { opacity: 0, x: -4 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, delay: 1.4 + index * 0.35 }
  }
}
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-default bg-default/80 text-left shadow-sm backdrop-blur-sm">
    <div class="flex items-center gap-3 border-b border-default p-4 sm:px-6">
      <div class="flex items-center gap-1.5">
        <span class="size-2.5 rounded-full border border-default bg-muted" />
        <span class="size-2.5 rounded-full border border-default bg-muted" />
        <span class="size-2.5 rounded-full border border-default bg-muted" />
      </div>

      <div class="min-w-0 flex-1 truncate text-xs text-muted">
        <span class="text-toned">{{ project }}</span>
        <span class="mx-1.5 text-dimmed">/</span>
        <span class="font-mono">{{ reference }}</span>
      </div>
    </div>

    <div class="divide-y divide-default">
      <Motion
        v-for="(line, lineIndex) in lines"
        :key="lineIndex"
        v-bind="lineMotion(lineIndex)"
      >
        <div class="flex items-start gap-3 px-5 py-2.5 sm:px-6">
          <UIcon
            :name="line.icon"
            class="mt-0.5 size-4 shrink-0 text-dimmed"
          />

          <p class="min-w-0 flex-1 text-[13px] leading-relaxed">
            <span
              v-for="(segment, segIndex) in line.segments"
              :key="segIndex"
              :class="segmentStyles[segment.style]"
            >{{ segment.text }}</span>
          </p>

          <span class="shrink-0 font-mono text-[11px] text-dimmed tabular-nums">
            {{ line.time }}
          </span>
        </div>
      </Motion>
    </div>
  </div>
</template>
