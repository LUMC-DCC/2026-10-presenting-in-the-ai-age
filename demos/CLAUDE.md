# Live demo folder — briefing for Claude

These are the presenter's own notes, turned into slides live in front of an audience.

- Change structure and layout, never the wording. Keep every sentence as written,
  unless the prompt explicitly asks for a rewrite.
- Never invent numbers. In Quarto, compute them from `demos/data/readmissions.csv` (synthetic data;
  from inside `demos/2-quarto/` the path is `../data/readmissions.csv`).
- Small, visible steps: do only what the prompt asks, then stop.
- `demos/1-slidev/talk.md` is a Slidev deck (`npm run demo1`).
  `demos/2-quarto/talk.qmd` is a Quarto revealjs deck (`quarto preview talk.qmd`).
