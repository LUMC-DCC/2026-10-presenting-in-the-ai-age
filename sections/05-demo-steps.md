---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">DEMO 1 · SLIDEV + VS CODE + CLAUDE · STEP BY STEP</div>

# From an empty folder to charts on clicks

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="rounded-lg border-t-4 border-indigo-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-indigo-400">1</span> · Starter deck</div>
<code class="text-xs">npm init slidev@latest</code>
<div class="text-xs opacity-70 mt-1">Opens in the browser. <kbd>o</kbd> overview, <code>/presenter</code></div>
</div>

<div class="rounded-lg border-t-4 border-indigo-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-indigo-400">2</span> · My own slides</div>
<div class="text-xs mt-1">Type markdown in <code>slides.md</code>. <code>---</code> starts a slide; save, it reloads</div>
<div class="text-xs opacity-70 mt-1">then <code>git init</code> + first commit</div>
</div>

<div class="rounded-lg border-t-4 border-indigo-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-indigo-400">3</span> · Brief the AI</div>
<div class="text-xs mt-1"><code>CLAUDE.md</code>: one message per slide, never invent numbers, change only what I ask</div>
</div>

<div class="rounded-lg border-t-4 border-fuchsia-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-fuchsia-400">4</span> · Data, on a branch</div>
<div class="text-xs mt-1"><code>data/readmissions.csv</code> (synthetic)</div>
<code class="text-xs">git switch -c charts</code>
</div>

<div class="rounded-lg border-t-4 border-fuchsia-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-fuchsia-400">5</span> · Claude: bar chart</div>
<div class="text-xs mt-1 italic">"Chart the All wards rate per quarter from the CSV, grey before 2025 Q1"</div>
<div class="text-xs opacity-70 mt-1">Check one bar against the CSV · commit</div>
</div>

<div class="rounded-lg border-t-4 border-fuchsia-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-fuchsia-400">6</span> · Claude: chart on clicks</div>
<div class="text-xs mt-1 italic">"One line per ward; each click highlights one"</div>
<div class="text-xs opacity-70 mt-1">Click through it · commit</div>
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-xs">
<div class="border-l-4 border-emerald-500 pl-3 py-1 bg-emerald-50/50"><strong>Back and forth:</strong> <code>git switch main</code> → the charts disappear · <code>git restore .</code> → undo a bad idea</div>
<div class="border-l-4 border-amber-400 pl-3 py-1 bg-amber-50/50"><strong>Step failed?</strong> <code>git reset --hard slidev-5-bar-chart</code> (tags <code>slidev-0</code> … <code>slidev-6</code>)</div>
</div>

<!--
Prepared steps: folder demo-slidev/, branch demo-slidev, one tag per step. Full jump table in CHEATSHEET.md.
Steps 1–4 are quick (show, don't explain much). Spend the time on 5 and 6: the prompt, the browser, the diff.
After a jump: Cmd+R in the browser; still wrong → press r in the Slidev terminal.
-->

---
layout: default
---

<div class="text-xs tracking-widest text-emerald-700 mb-2">DEMO 2 · QUARTO + R + CLAUDE, IN RSTUDIO · STEP BY STEP</div>

# From typed numbers to numbers that follow the data

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="rounded-lg border-t-4 border-emerald-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-emerald-500">1</span> · New project</div>
<div class="text-xs mt-1">File → New Project → Quarto Project, tick <strong>Create a git repository</strong></div>
</div>

<div class="rounded-lg border-t-4 border-emerald-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-emerald-500">2</span> · Sample presentation</div>
<div class="text-xs mt-1">File → New File → Quarto Presentation → <strong>Render</strong> (⌘⇧K)</div>
<div class="text-xs opacity-70 mt-1">Each <code>##</code> is a slide; chunks run on render</div>
</div>

<div class="rounded-lg border-t-4 border-emerald-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-emerald-500">3</span> · My own slides</div>
<div class="text-xs mt-1">"Readmissions fell from 18.3% to 12.0%"</div>
<div class="text-xs mt-1 text-rose-600">Typed by hand: wrong as soon as the data changes</div>
</div>

<div class="rounded-lg border-t-4 border-sky-600 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-sky-600">4</span> · Data + briefing</div>
<div class="text-xs mt-1"><code>data/readmissions.csv</code> · <code>CLAUDE.md</code>: every number computed in R</div>
<code class="text-xs">git switch -c charts</code>
</div>

<div class="rounded-lg border-t-4 border-sky-600 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-sky-600">5</span> · Claude: compute them</div>
<div class="text-xs mt-1 italic">"Replace the typed numbers with inline R from the data. Keep my sentences."</div>
<div class="text-xs opacity-70 mt-1">Diff: <code>18.3%</code> → <code>`r fmt(before)`%</code></div>
</div>

<div class="rounded-lg border-t-4 border-sky-600 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-sky-600">6</span> · Claude: ggplot chart</div>
<div class="text-xs mt-1 italic">"Bar chart per quarter, grey before 2025 Q1, change in the title"</div>
<div class="text-xs opacity-70 mt-1">Title: "fell by 34%", computed</div>
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-xs">
<div class="border-l-4 border-emerald-500 pl-3 py-1 bg-emerald-50/50"><strong>It follows the data:</strong> 2025 Q1 <code>12.1</code> → <code>15.1</code>, render → 12.8% and "fell by 30%" · <code>git restore</code> → back</div>
<div class="border-l-4 border-amber-400 pl-3 py-1 bg-amber-50/50"><strong>Step failed?</strong> <code>git reset --hard quarto-r-5-computed</code> (tags <code>quarto-r-0</code> … <code>-6</code>)</div>
</div>

<!--
Prepared steps: folder demo-quarto-r/ (open my-quarto-talk.Rproj), branch demo-quarto-r. Jump table in CHEATSHEET.md.
Claude runs in RStudio's Terminal tab, not the Console. After a jump, RStudio asks to reload talk.qmd: Yes.
Check out loud in step 5: All wards rows or the mean of four wards? 12.0 or 12? Those are your decisions.
-->

---
layout: default
---

<div class="text-xs tracking-widest text-amber-600 mb-2">DEMO 3 · QUARTO + PYTHON + CLAUDE · SAME LOOP, OTHER ENGINE</div>

# Same file, same loop, now in Python

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">

<div class="rounded-lg border-t-4 border-amber-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-amber-500">1–2</span> · Project + sample deck</div>
<code class="text-xs">quarto create project</code>
<div class="text-xs mt-1">One new header line: <code>jupyter: python3</code></div>
</div>

<div class="rounded-lg border-t-4 border-amber-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-amber-500">3</span> · My own slides</div>
<div class="text-xs mt-1">Same notes, same typed "18.3%"</div>
<code class="text-xs">quarto preview talk.qmd</code>
</div>

<div class="rounded-lg border-t-4 border-amber-500 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-amber-500">4</span> · Data + briefing</div>
<div class="text-xs mt-1"><code>CLAUDE.md</code>: computed in Python; pandas + matplotlib</div>
</div>

<div class="rounded-lg border-t-4 border-orange-600 border-x border-b border-slate-200 p-3 col-span-1">
<div class="font-bold"><span class="text-orange-600">5</span> · Claude: compute them</div>
<div class="text-xs mt-1 italic">"…with pandas, inline Python. Keep my sentences."</div>
<div class="text-xs opacity-70 mt-1"><code>`{python} f"{before:.1f}"`</code></div>
</div>

<div class="rounded-lg border-t-4 border-orange-600 border-x border-b border-slate-200 p-3">
<div class="font-bold"><span class="text-orange-600">6</span> · Claude: matplotlib chart</div>
<div class="text-xs mt-1 italic">"Bar chart per quarter, grey before 2025 Q1, change in the title"</div>
</div>

<div class="rounded-lg border border-slate-300 bg-slate-500/5 p-3">
<div class="font-bold">R vs Python</div>
<div class="text-xs mt-1 font-mono leading-relaxed">`r fmt(before)`<br/>`{python} f"{before:.1f}"`</div>
<div class="text-xs opacity-70 mt-1">Same result: 18.3% → 12.0%, "fell by 34%"</div>
</div>

</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-xs">
<div class="border-l-4 border-emerald-500 pl-3 py-1 bg-emerald-50/50"><strong>The point:</strong> the <code>.qmd</code>, the AI loop and git don't care which language computes the numbers</div>
<div class="border-l-4 border-amber-400 pl-3 py-1 bg-amber-50/50"><strong>Step failed?</strong> <code>git reset --hard quarto-py-6-chart</code> (tags <code>quarto-py-0</code> … <code>-6</code>)</div>
</div>

<!--
Prepared steps: folder demo-quarto-py/ (open in VS Code), branch demo-quarto-py. Jump table in CHEATSHEET.md.
Short version (5 min): jump to quarto-py-3, show the header; jump to -4, give prompt 5 live; jump to -6 for the chart.
quarto preview re-renders after each jump; Cmd+R if the browser looks stale.
-->
