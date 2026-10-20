---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">TODAY · THE REAL TOPIC</div>

# Making things with AI — slides are the test case

<div class="grid grid-cols-5 gap-6 mt-6">

<div class="col-span-2">

<div class="text-sm opacity-80 mb-5 leading-relaxed">
Slides are a good place to learn working <strong>with</strong> an AI assistant:
they are plain text, code and data, and you see the result in a second.
The habits carry over to your analysis code, your reports, your papers.
</div>

<div class="rounded-lg border-l-4 border-amber-400 bg-amber-50/50 p-4 text-sm">
The question today isn't <em>"which slide tool?"</em><br/>
It's <strong>"how do I let AI build with me — and still own the result?"</strong>
</div>

</div>

<div class="col-span-3 space-y-4">

<div class="rounded-xl border-t-4 border-indigo-500 border-x border-b border-slate-200 p-5">
<div class="text-xs tracking-widest text-indigo-600 mb-1">CASE 1</div>
<div class="font-bold text-lg mb-1">VS Code + Claude Code + Slidev</div>
<div class="text-sm opacity-70">Claude edits the markdown and Vue components; the browser reloads as it types.</div>
</div>

<div class="rounded-xl border-t-4 border-emerald-500 border-x border-b border-slate-200 p-5">
<div class="text-xs tracking-widest text-emerald-700 mb-1">CASE 2</div>
<div class="font-bold text-lg mb-1">RStudio + Claude Code + Quarto</div>
<div class="text-sm opacity-70">Claude edits the <code>.qmd</code>; R computes every number and figure at render time.</div>
</div>

</div>

</div>

<!--
ALTERNATIVE to "What this session is" (previous slide). Use this one if you frame the session
as "AI-assisted creation, slides as the case". Skip the other one.
-->

---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">ONE LOOP, BOTH CASES</div>

# Describe → generate → see → check → keep

<div class="grid grid-cols-5 gap-3 mt-10 text-sm">

<div v-click class="rounded-xl bg-slate-500/5 border border-slate-300 p-4">
<div class="text-3xl font-bold text-indigo-300 mb-2">1</div>
<div class="font-semibold mb-1">Describe</div>
<div class="opacity-70">What, for whom, which file, what not to touch.</div>
<div class="mt-3 text-xs tracking-widest text-indigo-600">YOU</div>
</div>

<div v-click class="rounded-xl bg-slate-500/5 border border-slate-300 p-4">
<div class="text-3xl font-bold text-indigo-300 mb-2">2</div>
<div class="font-semibold mb-1">Generate</div>
<div class="opacity-70">Edits files in your project, runs commands you allow.</div>
<div class="mt-3 text-xs tracking-widest text-fuchsia-600">CLAUDE</div>
</div>

<div v-click class="rounded-xl bg-slate-500/5 border border-slate-300 p-4">
<div class="text-3xl font-bold text-indigo-300 mb-2">3</div>
<div class="font-semibold mb-1">See</div>
<div class="opacity-70">Hot reload (Slidev) or <code>quarto preview</code>. Seconds, not minutes.</div>
<div class="mt-3 text-xs tracking-widest text-emerald-700">THE TOOL</div>
</div>

<div v-click class="rounded-xl bg-slate-500/5 border border-slate-300 p-4">
<div class="text-3xl font-bold text-indigo-300 mb-2">4</div>
<div class="font-semibold mb-1">Check</div>
<div class="opacity-70">Read the diff. Trace every number back to data.</div>
<div class="mt-3 text-xs tracking-widest text-indigo-600">YOU</div>
</div>

<div v-click class="rounded-xl bg-slate-500/5 border border-slate-300 p-4">
<div class="text-3xl font-bold text-indigo-300 mb-2">5</div>
<div class="font-semibold mb-1">Keep</div>
<div class="opacity-70"><code>git commit</code>. Bad step? <code>git restore</code> and re-prompt.</div>
<div class="mt-3 text-xs tracking-widest text-amber-600">GIT</div>
</div>

</div>

<div v-click class="mt-8 text-sm border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/50">
This only works because the deck is <strong>text in git</strong>. A <code>.pptx</code> gives you no diff to read and nothing to undo.
</div>

<!--
The loop is the spine of the whole session; both cases are just this loop in a different editor.
Steps 1 and 4 are yours. Point at them.
-->
