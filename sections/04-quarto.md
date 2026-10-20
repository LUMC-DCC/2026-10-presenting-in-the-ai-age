---
layout: section
class: text-center
---

<div class="text-xs tracking-[0.3em] opacity-50 mb-4">PART 3 · ~4 MIN</div>

# Quarto: if you live in R or Python

---
layout: two-cols
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">ONE FILE, CODE RUNS AT RENDER</div>

# `talk.qmd`

````md
---
title: "Readmissions"
format: revealjs
---

## Readmissions fell by a third

```{r}
#| echo: false
#| fig-alt: "Bar chart, 18% before, 12% after"
source("make_figure.R")
readmission_plot(df)
```

## What changed {.incremental}

- New discharge protocol in 2025
- Same wards, same case mix
````

::right::

<div class="pl-6 pt-16 text-sm space-y-4">

<div><strong>Code chunks run when you render.</strong> The figure on the slide is the figure your data produces today.</div>

<div><code>quarto render talk.qmd</code> → a reveal.js website.<br/><code>quarto preview</code> → live reload.</div>

<div><code>{.incremental}</code> and <code>. . .</code> pauses reveal step by step.</div>

<div>Open-source htmlwidgets (leaflet, DT) and Vega-Lite drop straight in.</div>

<div class="opacity-70">Works from RStudio, VS Code and Positron. Same file → HTML, PDF, Word.</div>

</div>

---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">WHICH ONE?</div>

# Slidev or Quarto?

<div class="mt-6 text-sm">

| You… | Reach for |
|---|---|
| analyse in R / Python and want figures straight from the analysis | **Quarto** |
| want the same source as a paper, report and talk | **Quarto** |
| want rich interactions, custom components, code animations | **Slidev** |
| are comfortable with a bit of web (Vue / CSS) | **Slidev** |
| just need clean slides from markdown, fast | **Marp** |

</div>

<div class="mt-6 text-sm border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/50">
Both are plain text in git. Both are things an AI assistant can edit well. Pick one and use it twice.
</div>
