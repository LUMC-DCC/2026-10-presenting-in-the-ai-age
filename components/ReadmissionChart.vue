<script setup lang="ts">
// One chart, two click-driven stories:
//   variant="makeover" (6 states, needs `clicks: 5`) — default plot → slide-ready plot
//   variant="build"    (5 states, needs `clicks: 4`) — reveal the finding piece by piece
//   variant="final"    — the finished chart, no clicks
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import { quarters, overall, SWITCH_INDEX, before, after, change } from './readmissions'

const props = withDefaults(defineProps<{ variant?: 'makeover' | 'build' | 'final' }>(), { variant: 'final' })
const { $clicks } = useSlideContext()
const step = computed(() => (props.variant === 'final' ? 99 : $clicks.value))

// geometry
const W = 760, H = 330, L = 56, R = 24, T = 64, B = 40
const plotW = W - L - R, plotH = H - T - B
const yMax = 22
const y = (v: number) => T + plotH - (v / yMax) * plotH
const slot = plotW / quarters.length
const barW = slot * 0.62
const x = (i: number) => L + i * slot + (slot - barW) / 2
const switchX = L + SWITCH_INDEX * slot

const rainbow = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6']
const GREY = '#c9c3b5', BLUE = '#003C7D', TEAL = '#1C9AAF'

const s = computed(() => {
  const k = step.value
  if (props.variant === 'build')
    return { junk: false, meaning: true, marker: k >= 2, title: k >= 4, annotate: k >= 4,
             showBefore: k >= 1, showAfter: k >= 3 }
  return { junk: k < 1, meaning: k >= 2, marker: k >= 3, title: k >= 4, annotate: k >= 5,
           showBefore: true, showAfter: true }
})

const fill = (i: number) =>
  !s.value.meaning ? rainbow[i] : i < SWITCH_INDEX ? GREY : BLUE
const visible = (i: number) => (i < SWITCH_INDEX ? s.value.showBefore : s.value.showAfter)

const title = computed(() => {
  if (s.value.title) return `Readmissions fell by a third after the new protocol`
  if (props.variant === 'build') return 'What happened to 30-day readmissions?'
  return 'Figure 1'
})
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${H}`" class="w-full" role="img" :aria-label="title">
    <text :x="L - 40" y="30" :style="{ fontSize: (s.title ? 26 : 15) + 'px' }" :font-weight="s.title ? 700 : 400"
          fill="#1a1a1a" class="transition-all">{{ title }}</text>
    <text v-if="s.title" :x="L - 40" y="52" style="font-size:14px" font-style="italic" fill="#6b6b6b">
      30-day readmission rate per quarter, all wards (synthetic data)
    </text>

    <!-- chart junk: heavy gridlines, box, legend -->
    <g v-if="s.junk">
      <rect :x="L" :y="T" :width="plotW" :height="plotH" fill="#f3f3f3" stroke="#888" />
      <line v-for="v in [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]" :key="v" :x1="L" :x2="L + plotW"
            :y1="y(v)" :y2="y(v)" stroke="#bbb" />
      <text v-for="v in [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]" :key="'t' + v" :x="L - 8" :y="y(v) + 3"
            style="font-size:9px" text-anchor="end" fill="#555">{{ v }}</text>
      <text :x="14" :y="T + plotH / 2" style="font-size:9px" fill="#555"
            :transform="`rotate(-90 14 ${T + plotH / 2})`">readm_30d_pct</text>
      <g :transform="`translate(${W - 120}, ${T + 6})`">
        <rect width="110" :height="quarters.length * 13 + 8" fill="#fff" stroke="#888" />
        <g v-for="(q, i) in quarters" :key="q" :transform="`translate(6, ${10 + i * 13})`">
          <rect width="8" height="8" y="-7" :fill="rainbow[i]" />
          <text x="13" style="font-size:9px" fill="#333">{{ q }}</text>
        </g>
      </g>
    </g>

    <line :x1="L" :x2="L + plotW" :y1="y(0)" :y2="y(0)" stroke="#9e978a" stroke-width="1.5" />

    <g v-for="(v, i) in overall" :key="i">
      <rect :x="x(i)" :y="visible(i) ? y(v) : y(0)" :width="barW" :height="visible(i) ? y(0) - y(v) : 0"
            :fill="fill(i)" rx="2" class="bar" />
      <text :x="x(i) + barW / 2" :y="y(0) + 18" style="font-size:12px" text-anchor="middle" fill="#6b6b6b">
        {{ quarters[i].replace(' ', ' ') }}
      </text>
    </g>

    <g v-if="s.marker">
      <line :x1="switchX" :x2="switchX" :y1="T - 4" :y2="y(0)" :stroke="TEAL" stroke-width="2" stroke-dasharray="6 5" />
      <text :x="switchX + 8" :y="T + 10" style="font-size:15px" font-style="italic" :fill="TEAL">new protocol</text>
    </g>

    <g v-if="s.annotate">
      <line :x1="L" :x2="switchX - 6" :y1="y(before)" :y2="y(before)" stroke="#7d7668" stroke-dasharray="3 3" />
      <text :x="L + 4" :y="y(before) - 8" style="font-size:14px" fill="#5a5448">{{ before.toFixed(1) }}% before</text>
      <line :x1="switchX + 6" :x2="L + plotW" :y1="y(after)" :y2="y(after)" :stroke="BLUE" stroke-dasharray="3 3" />
      <text :x="L + plotW - 4" :y="y(after) - 30" style="font-size:30px" font-weight="700" text-anchor="end" :fill="BLUE">{{ change }}%</text>
      <text :x="L + plotW - 4" :y="y(after) - 10" style="font-size:14px" text-anchor="end" :fill="BLUE">{{ after.toFixed(1) }}% after</text>
    </g>
  </svg>
</template>

<style scoped>
.bar { transition: y 0.5s ease, height 0.5s ease, fill 0.4s ease; }
text { font-family: 'Inter', sans-serif; }
</style>
