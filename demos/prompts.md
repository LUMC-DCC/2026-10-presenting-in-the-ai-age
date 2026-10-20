# Prompts for the hands-on — Coding Café 20 Oct 2026

Copy, paste, then change them to fit your project. They work with Claude Code
(VS Code extension, or `claude` in a terminal) and with Copilot Chat in agent mode.

Start every project with a short `CLAUDE.md`: house style, gotchas, red lines.
Examples: `../CLAUDE.md` (the deck) and `CLAUDE.md` in this folder (the live demos).

## Case A · VS Code + Slidev

**A1 · Drafter**
> Read README.md and demos/data/readmissions.csv. Draft sections/10-lab-talk.md:
> 6 slides for a 10-minute lab talk. Titles are full-sentence findings. One message
> per slide. Leave every number as TODO. Don't touch other files.

**A2 · Builder**
> Write components/WardChart.vue: an SVG line chart, one line per ward, data from
> components/readmissions.ts. All lines grey at first; on each click highlight one
> ward in #003C7D. Add a dashed line at 2025 Q1 labelled "new protocol". Then add a
> slide that uses it with `clicks: 4`.

**A3 · Critic on the live deck** (needs `npm run dev` running)
```bash
claude mcp add --transport http slidev http://localhost:3030/__mcp
```
> You are a clinician seeing this deck once. Go through it slide by slide and open
> each one in the browser. Per slide: what will I misunderstand, what would I ask,
> can it go? Make no edits; give me a list.

## Case B · RStudio + Quarto (run `claude` in the Terminal tab, in `demos/2-quarto/`)

**B1 · Drafter**
> Read ../data/readmissions.csv. Write draft.qmd, a revealjs deck, 5 slides: the
> question, the overall change, per ward, caveats, take-home. Compute every number in
> a chunk and use it inline with `r`. fig-alt on every figure. Then run
> `quarto render draft.qmd` and fix any errors.

Check for typed numbers: `grep -n "[0-9]%" draft.qmd`

**B2 · Builder**
> In my_figure.R (your own plotting script), make the chart presentation-ready in five steps:
> remove what encodes nothing · colour = meaning · mark 2025 Q1 · an action title ·
> annotate the change, computed from the data. Save each step as step1.png … step5.png
> so I can show the build-up.

**B3 · Critic: the number audit**
> Audit talk.qmd. Make a table: every number or claim the audience will see, the
> chunk or line that produces it, and whether the claim follows from the data. Flag
> anything that is typed rather than computed, or not supported. Make no edits.

## After every prompt

1. Look at the result (browser / Viewer).
2. Read the diff (Source Control / Git pane).
3. Trace every number back to data.
4. `git commit`, or `git restore .` and prompt again.
