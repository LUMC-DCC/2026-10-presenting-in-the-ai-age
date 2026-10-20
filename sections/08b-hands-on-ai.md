---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">HANDS-ON · 45 MIN · PROMPTS IN <code>demos/prompts.md</code></div>

# Pick a case, build with an assistant

<div class="grid grid-cols-3 gap-5 mt-4 text-sm">

<div class="rounded-xl border-t-4 border-indigo-500 border-x border-b border-slate-200 p-5">
<div class="font-bold text-lg mb-2">A · VS Code + Slidev</div>
<div class="opacity-70 mb-3">Node 20+, Claude Code or Copilot</div>

1. `npm init slidev@latest`
2. Write a 5-line `CLAUDE.md`
3. Prompt A1: draft 5 slides on your project
4. Prompt A2: a chart on clicks
5. *Stretch:* Slidev MCP + critic

</div>

<div class="rounded-xl border-t-4 border-emerald-500 border-x border-b border-slate-200 p-5">
<div class="font-bold text-lg mb-2">B · RStudio + Quarto</div>
<div class="opacity-70 mb-3">Quarto, R, <code>claude</code> in the Terminal</div>

1. Open `demos/2-quarto/`
2. Read `demos/CLAUDE.md`
3. Prompt B1: CSV → `draft.qmd`
4. `grep` for typed numbers
5. *Stretch:* prompt B3, the number audit

</div>

<div class="rounded-xl border-t-4 border-fuchsia-500 border-x border-b border-slate-200 p-5">
<div class="font-bold text-lg mb-2">C · Your own figure</div>
<div class="opacity-70 mb-3">R or Python, any assistant</div>

1. Bring a figure + its script
2. Critic prompt first: what's the message?
3. Then prompt B2: the five steps
4. Check each step yourself
5. Show before/after to a neighbour

</div>

</div>

<div class="mt-4 text-xs border-l-4 border-amber-400 pl-4 py-2 bg-amber-50/50">
<code>demos/data/readmissions.csv</code> is synthetic: safe to paste. Your own figure: share the script and column names, never patient data.
</div>

<!--
ALTERNATIVE to the "Choose one, swap any time" tracks slide. Use with the AI framing.
-->
