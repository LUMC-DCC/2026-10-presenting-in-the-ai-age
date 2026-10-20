---
layout: section
class: text-center
---

<div class="text-xs tracking-[0.3em] opacity-50 mb-4">PART 2 · ~10 MIN</div>

# Slidev, from the inside

<div class="text-lg opacity-70 mt-4 font-light">
Open <code>slides.md</code> of this deck next to the browser. Edit live.
</div>

<!--
LIVE DEMO CHECKLIST (have VS Code + `npm run dev` open before the session):
1. Change a title in sections/03-slidev.md → hot reload.
2. Add `v-click` to a list → step through.
3. Press `o` (overview), then open presenter view (/presenter) on the second screen.
4. Show components/ReadmissionChart.vue — "a chart is just a component".
5. Show .github/workflows/deploy.yml — push = published.
-->

---
layout: two-cols
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">ANATOMY</div>

# A slide is markdown

```md
---
layout: two-cols
clicks: 4
---

# Readmissions fell by a third

<ReadmissionChart variant="build" />

::right::

- Before: 18.3 %
- After: 12.0 %

<!--
Speaker notes live here.
-->
```

::right::

<div class="pl-6 pt-16 text-sm space-y-4">

<div><strong>Frontmatter</strong> picks the layout, transition, click count.</div>
<div><strong>Markdown</strong> for text — headings, lists, tables.</div>
<div><strong>Vue components</strong> for anything richer: charts, widgets, demos.</div>
<div><strong>HTML comments</strong> become speaker notes in presenter view.</div>
<div class="opacity-70"><code>---</code> separates slides. <code>src:</code> pulls in a file — this deck is ten section files.</div>

</div>

---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">REVEAL, DON'T DUMP</div>

# Clicks

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

```md
<v-clicks>

- The question
- What we did
- What we found
- What it means

</v-clicks>
```

</div>

<div class="text-lg space-y-3 pt-2">

<v-clicks>

- The question
- What we did
- What we found
- What it means

</v-clicks>

</div>

</div>

<div v-click class="mt-8 text-sm border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/50">
Inside a component, <code>$clicks</code> is just a number. That is how the chart in the cold open builds itself.
</div>

---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">CODE ON SLIDES</div>

# Walk through code, line by line

```python {1-2|4-5|7-9|all}
import pandas as pd
df = pd.read_csv("readmissions.csv")

df["period"] = (df["quarter"] >= "2025 Q1").map(
    {True: "after", False: "before"})

summary = df.groupby("period")["rate"].mean()
change = summary["after"] / summary["before"] - 1
print(f"{change:.0%}")   # -34%
```

<div class="mt-4 text-sm opacity-70">
<code>{1-2|4-5|7-9|all}</code> highlights each block on a click. The audience reads the line you are talking about — not the whole file.
</div>

---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">CODE THAT CHANGES</div>

# Magic Move: show the refactor, not two screenshots

````md magic-move
```python
rates = []
for q in quarters:
    rates.append(df[df.quarter == q].rate.mean())
```
```python
rates = [df[df.quarter == q].rate.mean() for q in quarters]
```
```python
rates = df.groupby("quarter").rate.mean()
```
````

<div class="mt-6 text-sm opacity-70">
Tokens animate between versions, so the eye follows what changed.
</div>

---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">CODE THAT RUNS</div>

# Run it on the slide

```ts {monaco-run} {autorun:false}
const before = [18.2, 18.9, 17.6, 18.4]
const after  = [12.1, 11.6, 12.4, 12.0]
const mean = (xs: number[]) => xs.reduce((a, b) => a + b) / xs.length

console.log('change:', Math.round((mean(after) / mean(before) - 1) * 100), '%')
```

<div class="mt-4 text-sm opacity-70">
Editable and runnable in the browser (JS/TS out of the box). For R and Python in the browser, see WebR / Pyodide — or use Quarto, next.
</div>

---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">THE REST OF THE TOOLBOX</div>

# Presenting, exporting, publishing

<div class="grid grid-cols-3 gap-5 mt-6 text-sm">

<div class="rounded-xl border border-slate-200 p-5">
<div class="font-bold mb-2">🎤 Presenter view</div>

- notes, next slide, timer
- <kbd>o</kbd> overview, <kbd>d</kbd> dark mode
- draw on slides, built-in recording

</div>

<div class="rounded-xl border border-slate-200 p-5">
<div class="font-bold mb-2">📦 Export</div>

- `slidev export` → PDF
- `--format pptx` for the colleague who asks
- `--with-clicks` keeps each step

</div>

<div class="rounded-xl border border-slate-200 p-5">
<div class="font-bold mb-2">🚀 Publish</div>

- `slidev build` → static site
- GitHub Action → GitHub Pages
- every push redeploys

</div>

</div>

<div class="mt-8 text-sm border-l-4 border-amber-400 pl-4 py-2 bg-amber-50/50">
Honest costs: you need Node, styling is CSS, and very custom layouts take longer than dragging boxes.
</div>
