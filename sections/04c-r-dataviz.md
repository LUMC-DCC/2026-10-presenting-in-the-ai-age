---
layout: section
class: text-center
---

<div class="text-xs tracking-[0.3em] opacity-50 mb-4">CASE 2 · REAL DATA</div>

# Four real datasets, presented in R

<div class="text-lg opacity-70 mt-4 font-light">
A trial, a survival curve, a population survey, and one interactive chart.
</div>

<!--
Source for everything in this part: examples/r-dataviz/ (RStudio project r-dataviz.Rproj).
The same examples run live as a Quarto deck: examples/r-dataviz/slides.qmd.
Each chart is built in three clicks: the default plot, a cleaned-up version, then one message.
-->

---
layout: default
clicks: 2
---

<div class="text-xs tracking-widest text-emerald-700 mb-2">EXAMPLE 1 · <code>medicaldata::strep_tb</code> · CLICK TO BUILD</div>

# The first modern randomised trial, 1948

<div class="relative h-[400px] mt-2">
<div class="absolute inset-0 bg-white flex justify-center"><img src="/img/r-dataviz/strep_1.png" class="h-full object-contain" alt="Default stacked bar chart of counts per outcome, rainbow colours" /></div>
<div v-click="1" class="absolute inset-0 bg-white flex justify-center"><img src="/img/r-dataviz/strep_2.png" class="h-full object-contain" alt="Percentage bars per arm, outcomes ordered from improvement to death" /></div>
<div v-click="2" class="absolute inset-0 bg-white flex justify-center"><img src="/img/r-dataviz/strep_3.png" class="h-full object-contain" alt="Only deaths highlighted: 27% in the control arm, 7% with streptomycin" /></div>
</div>

<!--
Click 0: what plot() gives you. "Figure 2", a legend with codes.
Click 1: percentages, outcomes ordered, diverging colours. Readable, but no message yet.
Click 2: grey everything except death. The title says the finding; 27% and 7% are computed in R/strep.R.
107 patients, MRC 1948. Bradford Hill's trial.
-->

---
layout: default
clicks: 2
---

<div class="text-xs tracking-widest text-emerald-700 mb-2">EXAMPLE 2 · <code>survival::lung</code> + <code>ggsurvfit</code> · CLICK TO BUILD</div>

# A Kaplan–Meier curve, one layer at a time

<div class="relative h-[400px] mt-2">
<div class="absolute inset-0 bg-white flex justify-center"><img src="/img/r-dataviz/lung_1.png" class="h-full object-contain" alt="Kaplan-Meier curve for all patients" /></div>
<div v-click="1" class="absolute inset-0 bg-white flex justify-center"><img src="/img/r-dataviz/lung_2.png" class="h-full object-contain" alt="Curves for men in grey and women in blue, labelled on the lines" /></div>
<div v-click="2" class="absolute inset-0 bg-white flex justify-center"><img src="/img/r-dataviz/lung_3.png" class="h-full object-contain" alt="Same curves with median lines and a numbers-at-risk table" /></div>
</div>

<!--
Click 0: everyone, one curve. Let the room read the axes.
Click 1: the comparison. Labels on the lines, no legend to decode.
Click 2: medians and the risk table: what clinicians expect, added after the point has landed.
Median 14.0 vs 8.9 months, log-rank p = 0.0013 (NCCTG trial, n = 228).
-->

---
layout: default
clicks: 2
---

<div class="text-xs tracking-widest text-emerald-700 mb-2">EXAMPLE 3 · <code>NHANES</code> + <code>gghighlight</code> · CLICK TO BUILD</div>

# From rainbow to one highlight

<div class="relative h-[400px] mt-2">
<div class="absolute inset-0 bg-white flex justify-center"><img src="/img/r-dataviz/nhanes_1.png" class="h-full object-contain" alt="Default line chart with three coloured lines and a legend" /></div>
<div v-click="1" class="absolute inset-0 bg-white flex justify-center"><img src="/img/r-dataviz/nhanes_2.png" class="h-full object-contain" alt="Three grey lines labelled directly" /></div>
<div v-click="2" class="absolute inset-0 bg-white flex justify-center"><img src="/img/r-dataviz/nhanes_3.png" class="h-full object-contain" alt="Obesity line highlighted: 34% have diabetes in their 60s" /></div>
</div>

<!--
Click 1: same data, greys, direct labels. Calm, but which line matters?
Click 2: gghighlight() greys the rest in one line of code. 34% vs 10% at normal weight (3.5x).
US data (NHANES 2009-2012), so: "is it the same in the Netherlands?" is a good question to invite.
-->

---
layout: default
---

<div class="text-xs tracking-widest text-emerald-700 mb-2">EXAMPLE 4 · <code>ggiraph</code> · SAME CHART, INTERACTIVE</div>

# Hover to explore

<iframe src="/r-dataviz/nhanes-interactive.html" class="w-full h-[400px] mt-2 rounded border border-slate-200 bg-white" title="Interactive chart of diabetes by age and BMI"></iframe>

<!--
Hover a line: the others fade. Hover a point: exact rate and n.
Use this after the static version has made the argument, when someone asks "and for overweight in their 50s?"
girafe(ggobj = p): the same ggplot, plus *_interactive geoms. Code in examples/r-dataviz/R/interactive.R.
-->


---
layout: default
---

<div class="text-xs tracking-widest text-emerald-700 mb-2">MORE REAL DATA, MORE EXAMPLES</div>

# Where to find the next one

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="rounded-xl border-t-4 border-emerald-500 border-x border-b border-slate-200 p-5">
<div class="font-bold text-lg mb-2">Real data, from R</div>

- `medicaldata`: teaching datasets from real studies
- `survival`: `lung`, `colon`, `pbc`
- `NHANES`, `outbreaks`
- `cbsodataR`: CBS StatLine, Dutch statistics
- `eurostat`, Our World in Data (CSV per chart)

</div>

<div class="rounded-xl border-t-4 border-indigo-500 border-x border-b border-slate-200 p-5">
<div class="font-bold text-lg mb-2">Examples to learn from</div>

- TidyTuesday: a new dataset each week, with code
- R Graph Gallery: code for every chart type
- Wilke, *Fundamentals of Data Visualization*
- Healy, *Data Visualization*
- ggplot2 extensions gallery: `gghighlight`, `ggtext`, `patchwork`

</div>

</div>
