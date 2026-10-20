---
layout: section
class: text-center
---

<div class="text-xs tracking-[0.3em] opacity-50 mb-4">CASE 2 · ~10 MIN</div>

# Quarto in RStudio, with Claude

<div class="text-lg opacity-70 mt-4 font-light">
Claude writes the <code>.qmd</code>. R computes every number.
</div>

<!--
ALTERNATIVE to (or follow-up of) "Quarto: if you live in R or Python".
LIVE DEMO CHECKLIST (before the session):
- RStudio open on demos/2-quarto, Terminal tab with `claude` started there.
- `quarto preview talk.qmd` running (or Render with ⇧⌘K, Viewer pane visible).
- git clean. Prompts in demos/prompts.md
-->

---
layout: default
---

<div class="text-xs tracking-widest text-emerald-700 mb-2">THE SETUP · RSTUDIO AS YOU KNOW IT</div>

# Claude lives in the Terminal tab

<div class="grid grid-cols-3 gap-5 mt-6 text-sm">

<div class="rounded-xl border-t-4 border-indigo-500 border-x border-b border-slate-200 p-5">
<div class="font-bold text-lg mb-2">📝 Source</div>

- `talk.qmd`: text + R chunks
- changes from Claude show up as you watch
- Git pane: **the diff**

</div>

<div class="rounded-xl border-t-4 border-emerald-500 border-x border-b border-slate-200 p-5">
<div class="font-bold text-lg mb-2">👁 Viewer</div>

- `quarto preview talk.qmd`
- re-renders on save
- the figure is today's data

</div>

<div class="rounded-xl border-t-4 border-fuchsia-500 border-x border-b border-slate-200 p-5">
<div class="font-bold text-lg mb-2">🤖 Terminal tab</div>

- `claude` in the project folder
- reads the `.qmd`, R scripts, CSV
- can run `quarto render` to check its own work

</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-5 text-xs opacity-80">
<div class="border-l-4 border-slate-300 pl-3 py-1"><strong>Want Claude to see your live R session?</strong> The <code>mcptools</code> package connects it to your objects and environment.</div>
<div class="border-l-4 border-slate-300 pl-3 py-1"><strong>Prefer Positron?</strong> Same Quarto files; its built-in assistant can use Claude. RStudio also has Copilot built in.</div>
</div>


---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">SIDE BY SIDE</div>

# Same loop, two kitchens

<div class="mt-6 text-sm">

| | **Case 1 · VS Code + Slidev** | **Case 2 · RStudio + Quarto** |
|---|---|---|
| Claude runs in | VS Code extension or terminal | RStudio Terminal tab |
| Its briefing | `CLAUDE.md` in the project | `CLAUDE.md` next to `talk.qmd` |
| You see the result | hot reload in the browser | `quarto preview` in the Viewer |
| Numbers come from | data file → Vue component | R chunk → inline `r` |
| You review in | Source Control diff | Git pane diff |
| Best when | you want rich interaction | the analysis is already in R |

</div>

<div class="mt-6 text-sm border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/50">
Pick the kitchen you already cook in. The habits (brief it, watch it, check it, commit it) go with you.
</div>
