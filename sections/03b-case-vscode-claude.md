---
layout: section
class: text-center
---

<div class="text-xs tracking-[0.3em] opacity-50 mb-4">CASE 1 · ~10 MIN</div>

# Slidev in VS Code, with Claude

<div class="text-lg opacity-70 mt-4 font-light">
The AI writes the slides. You steer, look, and check.
</div>

<!--
ALTERNATIVE to (or follow-up of) "Slidev, from the inside".
LIVE DEMO CHECKLIST (before the session):
- VS Code open on this folder, `npm run dev` running, Claude Code panel open.
- `claude mcp add --transport http slidev http://localhost:3030/__mcp` done once.
- git clean, so `git diff` shows only what Claude changed during the demo.
- Prompts ready to paste: demos/prompts.md
-->

---
layout: default
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">THE SETUP · ONE WINDOW</div>

# Three panes, one loop

<div class="grid grid-cols-3 gap-5 mt-6 text-sm">

<div class="rounded-xl border-t-4 border-indigo-500 border-x border-b border-slate-200 p-5">
<div class="font-bold text-lg mb-2">📝 Editor</div>

- `slides.md` + `sections/*.md`
- Vue components in `components/`
- Source control tab: **the diff**

</div>

<div class="rounded-xl border-t-4 border-emerald-500 border-x border-b border-slate-200 p-5">
<div class="font-bold text-lg mb-2">🖥 Terminal + browser</div>

- `npm run dev`
- every save → slide reloads
- presenter view on <code>/presenter</code>

</div>

<div class="rounded-xl border-t-4 border-fuchsia-500 border-x border-b border-slate-200 p-5">
<div class="font-bold text-lg mb-2">🤖 Claude Code</div>

- VS Code extension, or `claude` in the terminal
- reads the whole project
- proposes edits; **you approve**

</div>

</div>

<div class="mt-8 text-sm border-l-4 border-amber-400 pl-4 py-2 bg-amber-50/50">
No Claude licence? The loop is identical with GitHub Copilot Chat in agent mode. The skill is the loop, not the brand.
</div>

---
layout: two-cols
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">TELL IT ONCE</div>

# `CLAUDE.md`

```md
# Coding Café deck — briefing for Claude

## House style
- Eyebrow label above every title.
- LUMC blue #003C7D.
- One message per slide, ~40 words max.

## Gotchas
- In SVG, size text with style="font-size:…"

## Red lines
- Numbers come from readmissions.csv,
  never from you. Unknown → TODO.
- Don't delete slides; propose first.
```

::right::

<div class="pl-6 pt-16 text-sm space-y-4">

<div>A file in the project root that Claude reads <strong>at the start of every session</strong>.</div>

<div><strong>House style</strong> stops you repeating "use our colours" in every prompt.</div>

<div><strong>Gotchas</strong> are the things <em>you</em> learned the hard way. Write them down once; it stops making the mistake.</div>

<div><strong>Red lines</strong> are your rules, in writing, before the first prompt.</div>

<div class="opacity-70">This deck has one: open <code>CLAUDE.md</code>.</div>

</div>

---

# Demo