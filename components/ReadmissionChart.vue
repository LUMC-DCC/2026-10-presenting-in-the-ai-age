<script setup lang="ts">
// Bar chart of the "All wards" 30-day readmission rate per quarter.
// Bars before the new protocol (2025 Q1) are grey, from 2025 Q1 dark blue.
import raw from '../data/readmissions.csv?raw'

const rows = raw.trim().split('\n').slice(1).map((line) => {
  const [quarter, ward, rate] = line.split(',')
  return { quarter, ward, rate: Number(rate) }
})
const data = rows.filter(r => r.ward === 'All wards')

const W = 800
const H = 360
const m = { top: 30, right: 20, bottom: 50, left: 50 }
const max = 25
const band = (W - m.left - m.right) / data.length
const y = (v: number) => m.top + (H - m.top - m.bottom) * (1 - v / max)
const after = (q: string) => q >= '2025 Q1'
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${H}`" class="w-full" role="img"
    aria-label="Bar chart of the 30-day readmission rate per quarter, all wards">
    <g v-for="(d, i) in data" :key="d.quarter">
      <rect
        :x="m.left + i * band + band * 0.15" :y="y(d.rate)"
        :width="band * 0.7" :height="y(0) - y(d.rate)"
        :fill="after(d.quarter) ? '#003C7D' : '#c9c3b5'"
      />
      <text :x="m.left + i * band + band / 2" :y="y(d.rate) - 8"
        style="font-size: 15px; text-anchor: middle" fill="currentColor">{{ d.rate.toFixed(1) }}%</text>
      <text :x="m.left + i * band + band / 2" :y="H - m.bottom + 24"
        style="font-size: 13px; text-anchor: middle; opacity: 0.7" fill="currentColor">{{ d.quarter }}</text>
    </g>
    <line :x1="m.left" :x2="W - m.right" :y1="y(0)" :y2="y(0)" stroke="currentColor" style="opacity: 0.3" />
  </svg>
</template>
