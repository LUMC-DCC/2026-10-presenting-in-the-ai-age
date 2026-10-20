---
layout: section
class: text-center
---

<div class="text-xs tracking-[0.3em] opacity-50 mb-4">PART 1 · ~6 MIN</div>

# What changed

---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">THE SHIFT</div>

# Static slides don't fit software results

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="rounded-lg border border-slate-200 p-5">
<div class="text-xs tracking-widest opacity-60 mb-3">THEN</div>
<div class="text-sm space-y-2">

- Screenshots of output that went stale after the next run
- Code pasted as an image, unreadable from row 3
- Hours aligning boxes; a closed binary file nobody can diff

</div>
</div>

<div class="rounded-lg border-l-4 border-indigo-500 bg-indigo-50/40 p-5">
<div class="text-xs tracking-widest text-indigo-600 mb-3">NOW</div>
<div class="text-sm space-y-2">

- Slides rendered **from the code and data** themselves
- AI can draft 20 tidy slides in a minute — tidy ≠ clear
- The scarce skill is **deciding what the audience should see, in what order**

</div>
</div>

</div>

<div class="mt-8 text-sm border-l-4 border-amber-400 pl-4 py-2 bg-amber-50/50">
Bring back the word cloud from Q3. How many of those problems would AI fix? How many would it make faster?
</div>

---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">THE LANDSCAPE</div>

# Three families of tools

<div class="mt-6 text-sm">

| | **Prompt-to-deck** | **Slides as code** | **Typeset decks** |
|---|---|---|---|
| Examples | Copilot in PowerPoint, Gamma | **Slidev**, **Quarto reveal.js**, Marp | Beamer, Typst + Touying |
| You write | a prompt | markdown (+ code) | markup |
| Output | .pptx / web | a website (+ PDF) | PDF |
| Live code & charts | ✗ | ✓ | ✗ (static) |
| Diff, review, version | ✗ | ✓ git | ✓ git |
| AI can edit it well | it *is* AI | ✓ plain text | ✓ plain text |
| Best for | quick internal updates | talks with code & data | papers' cousin, print |

</div>

<!--
Not a tool war. PowerPoint is fine for a 3-slide update. The argument for slides-as-code is specific to people who already live in text editors and git.
-->

---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">WHY DEVELOPERS SHOULD CARE</div>

# Slides as code: four properties you already value

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="rounded-xl border border-slate-200 p-5">
<div class="font-bold mb-1">📄 Plain text</div>
<div class="text-sm opacity-80">An AI assistant edits a <code>.md</code> file as well as it edits your code. Same editor, same workflow as September.</div>
</div>

<div class="rounded-xl border border-slate-200 p-5">
<div class="font-bold mb-1">🔀 Version controlled</div>
<div class="text-sm opacity-80"><code>git diff</code> on a talk. Review a colleague's slides in a pull request.</div>
</div>

<div class="rounded-xl border border-slate-200 p-5">
<div class="font-bold mb-1">🔁 Reproducible</div>
<div class="text-sm opacity-80">Figures are rendered from data at build time — no stale screenshots from an old analysis.</div>
</div>

<div class="rounded-xl border border-slate-200 p-5">
<div class="font-bold mb-1">🌐 It's a website</div>
<div class="text-sm opacity-80">One link, works on any device, interactive where you want it, PDF when you need it. Open source end to end — FAIR, like the code it presents.</div>
</div>

</div>
