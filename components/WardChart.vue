<script setup lang="ts">
// One line per ward. All grey at first; click n highlights ward n in dark blue.
// Use on a slide with `clicks: 4` (one click per ward).
// Opacity and font size go in style: UnoCSS reads opacity="1" as the utility opacity-1 (1%).
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import raw from '../data/readmissions.csv?raw'

const { $clicks } = useSlideContext()

const rows = raw.trim().split('\n').slice(1).map((line) => {
  const [quarter, ward, rate] = line.split(',')
  return { quarter, ward, rate: Number(rate) }
})
const quarters = [...new Set(rows.map(r => r.quarter))]
const wards = [...new Set(rows.map(r => r.ward))].filter(w => w !== 'All wards')

const W = 800
const H = 360
const m = { top: 20, right: 130, bottom: 50, left: 50 }
const min = 8
const max = 24
const x = (i: number) => m.left + i * (W - m.left - m.right) / (quarters.length - 1)
const y = (v: number) => m.top + (H - m.top - m.bottom) * (1 - (v - min) / (max - min))

const lines = wards.map((ward) => {
  const values = quarters.map(q => rows.find(r => r.ward === ward && r.quarter === q)!.rate)
  return { ward, values, points: values.map((v, i) => `${x(i)},${y(v)}`).join(' '), labelY: y(values[values.length - 1]) }
})
// Push end labels apart so wards with similar values don't overlap
const byY = [...lines].sort((a, b) => a.labelY - b.labelY)
byY.forEach((l, i) => { if (i > 0) l.labelY = Math.max(l.labelY, byY[i - 1].labelY + 18) })
const active = computed(() => wards[$clicks.value - 1])
const switchX = x(quarters.indexOf('2025 Q1')) - (x(1) - x(0)) / 2
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${H}`" class="w-full" role="img"
    aria-label="Line chart of the readmission rate per ward; each ward drops after 2025 Q1">
    <line :x1="switchX" :x2="switchX" :y1="m.top" :y2="H - m.bottom"
      stroke="#1C9AAF" stroke-dasharray="5 4" />
    <text :x="switchX + 6" :y="m.top + 12" fill="#1C9AAF" style="font-size: 13px; font-style: italic">new protocol</text>

    <g v-for="l in lines" :key="l.ward">
      <polyline :points="l.points" fill="none"
        :stroke="l.ward === active ? '#003C7D' : '#c9c3b5'"
        :stroke-width="l.ward === active ? 4 : 2" />
      <text :x="x(quarters.length - 1) + 10" :y="l.labelY + 5"
        :fill="l.ward === active ? '#003C7D' : 'currentColor'"
        :style="{ fontSize: '14px', fontWeight: l.ward === active ? 700 : 400, opacity: l.ward === active ? 1 : 0.5 }">{{ l.ward }}</text>
    </g>

    <text v-for="(q, i) in quarters" :key="q" :x="x(i)" :y="H - m.bottom + 24"
      fill="currentColor" style="font-size: 13px; text-anchor: middle; opacity: 0.7">{{ q }}</text>
  </svg>
</template>
