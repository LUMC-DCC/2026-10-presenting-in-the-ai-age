# Coding Café — Presenting in the AI Age

LUMC Coding Café, Tuesday 20 October 2026. Slides as code with Slidev and Quarto,
and using an AI assistant (Claude) to build and tweak them.

**Slides:** https://lumc-dcc.github.io/2026-10-presenting-in-the-ai-age/

## What's here

| Path | What |
| --- | --- |
| `slides.md`, `sections/` | The Slidev deck (one file per part of the talk) |
| `components/` | Vue chart components used in the deck |
| `public/` | Images, the Menti QR code and the interactive chart |
| `demos/` | The two live demos, the data, and prompts for the hands-on |
| `hands-on/` | Step-by-step walkthrough: build, version and publish your own Slidev deck with AI ([PDF](hands-on/slidev-walkthrough.pdf) · [read online](hands-on/slidev-walkthrough.md)) |
| `CLAUDE.md` | Briefing file Claude reads when working on this deck |

## Run the slides

Needs Node 22.12 or newer.

```bash
npm install
npm run dev
```

`npm run build` writes a static site to `dist/`; `npm run export` makes a PDF
(needs `playwright-chromium`). Every push to `main` publishes the deck to GitHub Pages
via `.github/workflows/deploy.yml`.

## Try the demos

See [`demos/README.md`](demos/README.md).

All readmissions data in this repository is synthetic. Never paste real patient data into an AI tool.
