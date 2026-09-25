<!-- The logo's node graph, with its blue-to-teal gradient. -->
<script setup lang="ts">
const props = defineProps<{ mono?: boolean }>()
const id = useId()
const stroke = computed(() => (props.mono ? 'currentColor' : `url(#${id})`))
</script>

<template>
  <svg
    viewBox="0 0 40 40"
    fill="none"
    aria-hidden="true"
  >
    <defs v-if="!mono">
      <linearGradient
        :id="id"
        x1="6"
        y1="8"
        x2="34"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1A5BA6" />
        <stop
          offset="1"
          stop-color="#13A7B5"
        />
      </linearGradient>
    </defs>
    <path
      d="M13 11 L10 29 M13 11 L27 27 M20.5 19 L27 12"
      :stroke="stroke"
      stroke-width="2.8"
      stroke-linecap="round"
    />
    <circle
      cx="13"
      cy="10.5"
      r="3.5"
      :fill="stroke"
    />
    <circle
      cx="27.5"
      cy="27.5"
      r="3.5"
      :fill="stroke"
    />
    <circle
      cx="10"
      cy="30"
      r="3.2"
      fill="#fff"
      :stroke="stroke"
      stroke-width="2.4"
    />
    <circle
      cx="28"
      cy="11"
      r="3.2"
      fill="#fff"
      :stroke="stroke"
      stroke-width="2.4"
    />
  </svg>
</template>
