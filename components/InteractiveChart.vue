<script setup lang="ts">
// SVG text sizes are inline styles, not font-size="…": UnoCSS attributify would turn
// font-size="13" into the text-13 utility (3.25rem).
// Hover for values, click a ward to focus it. No libraries: shows that "interactive"
// can be 100 lines of SVG + Vue, and works offline (the static fallback is ReadmissionChart).
import { ref, computed } from 'vue'
import { quarters, wards, SWITCH_INDEX } from './readmissions'

const W = 760, H = 330, L = 48, R = 130, T = 20, B = 36
const plotW = W - L - R, plotH = H - T - B
const yMin = 8, yMax = 24
const x = (i: number) => L + (i / (quarters.length - 1)) * plotW
const y = (v: number) => T + plotH - ((v - yMin) / (yMax - yMin)) * plotH
const colors = ['#003C7D', '#1C9AAF', '#C2185B', '#8a7f6a']
const labelDy = [0, 0, 8, -6] // Nephrology and Geriatrics end 0.6 pp apart

const focus = ref<number | null>(null)
const hover = ref<{ w: number; i: number } | null>(null)
const path = (vals: number[]) => vals.map((v, i) => `${i ? 'L' : 'M'}${x(i)},${y(v)}`).join(' ')
const opacity = (w: number) => (focus.value === null || focus.value === w ? 1 : 0.15)
const tip = computed(() => {
  if (!hover.value) return null
  const { w, i } = hover.value
  return { x: x(i), y: y(wards[w].values[i]), text: `${wards[w].name} · ${quarters[i]}: ${wards[w].values[i].toFixed(1)}%` }
})
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${H}`" class="w-full select-none" role="img"
       aria-label="30-day readmission rate per ward, per quarter">
    <line :x1="x(SWITCH_INDEX) - plotW / 14" :x2="x(SWITCH_INDEX) - plotW / 14" :y1="T" :y2="T + plotH"
          stroke="#1C9AAF" stroke-dasharray="6 5" stroke-width="1.5" />
    <text :x="x(SWITCH_INDEX) - plotW / 14 + 6" :y="T + 12" style="font-size:13px" font-style="italic" fill="#1C9AAF">new protocol</text>
    <g v-for="v in [10, 15, 20]" :key="v">
      <line :x1="L" :x2="L + plotW" :y1="y(v)" :y2="y(v)" stroke="#e8e3d8" />
      <text :x="L - 8" :y="y(v) + 4" style="font-size:11px" text-anchor="end" fill="#8a8478">{{ v }}%</text>
    </g>
    <text v-for="(q, i) in quarters" :key="q" :x="x(i)" :y="H - 12" style="font-size:11px" text-anchor="middle" fill="#8a8478">{{ q }}</text>

    <g v-for="(wd, w) in wards" :key="wd.name" :opacity="opacity(w)" class="ward"
       @click="focus = focus === w ? null : w">
      <path :d="path(wd.values)" fill="none" :stroke="colors[w]" stroke-width="3" />
      <circle v-for="(v, i) in wd.values" :key="i" :cx="x(i)" :cy="y(v)" r="9" fill="transparent"
              @mouseenter="hover = { w, i }" @mouseleave="hover = null" />
      <circle v-for="(v, i) in wd.values" :key="'d' + i" :cx="x(i)" :cy="y(v)" r="3.5" :fill="colors[w]" pointer-events="none" />
      <!-- direct label instead of a legend; also the click target -->
      <text :x="x(quarters.length - 1) + 10" :y="y(wd.values.at(-1)!) + 4 + labelDy[w]" font-weight="600"
            :fill="colors[w]" style="font-size:13px; cursor:pointer">{{ wd.name }}</text>
    </g>

    <g v-if="tip" pointer-events="none">
      <rect :x="Math.min(tip.x + 10, W - 250)" :y="tip.y - 34" width="240" height="24" rx="4" fill="#1a1a1a" opacity=".88" />
      <text :x="Math.min(tip.x + 10, W - 250) + 10" :y="tip.y - 17" style="font-size:12px" fill="#fff">{{ tip.text }}</text>
    </g>
  </svg>
  <div class="text-xs opacity-60 mt-1">Hover a point for its value · click a ward name or line to focus it, click again to reset</div>
</template>

<style scoped>
.ward { cursor: pointer; transition: opacity .3s; }
text { font-family: 'Inter', sans-serif; }
</style>
