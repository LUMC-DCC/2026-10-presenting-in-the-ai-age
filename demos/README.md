# Demos

The same lab-meeting notes, turned into slides twice: once with Slidev, once with
Quarto. In both, an AI assistant does the structure and layout; the words and the
numbers stay yours.

| Path | What |
| --- | --- |
| `1-slidev/talk.md` | Demo 1: plain markdown notes → a Slidev deck |
| `2-quarto/talk.qmd` | Demo 2: the same notes as a Quarto revealjs deck |
| `data/readmissions.csv` | Synthetic 30-day readmission rates per quarter and ward |
| `prompts.md` | Prompts for the demos and the hands-on |
| `CLAUDE.md` | Briefing for Claude: change structure, never the wording; never invent numbers |

`talk.original.md` and `talk.original.qmd` are untouched copies, so you can start over.

Want every step of the live demos, from an empty folder to the finished charts? Each step is a git
tag on its own branch: see [Follow the live demos step by step](../README.md#follow-the-live-demos-step-by-step-git-tags).

## Demo 1 · Slidev

```bash
npm install          # once, in the repository root
npm run demo1        # opens the notes as a deck on http://localhost:3031
```

The notes show as one long slide. Then, with `claude` running in the repository root,
ask for one change at a time, for example:

1. Split demos/1-slidev/talk.md into slides, one per heading. Don't change my words.
2. Use the seriph theme and LUMC blue #003C7D for the slide titles.
3. Reveal the caveats one click at a time.
4. Turn my "Notes:" lines into speaker notes.

## Demo 2 · Quarto (R)

Needs [Quarto](https://quarto.org) and R.

```bash
cd demos/2-quarto
quarto preview talk.qmd
```

In RStudio: open `talk.qmd` and click **Render**. Then run `claude` in the Terminal tab
of this folder and ask:

1. Read ../data/readmissions.csv in a hidden R chunk. Replace every typed number in
   talk.qmd with inline R, computed from the data. Keep my sentences.
2. Build the ward table from the data too, with knitr::kable.
3. Check: is any number on the slides still typed by hand? List them, don't edit.

## Start over

```bash
cp demos/1-slidev/talk.original.md demos/1-slidev/talk.md
cp demos/2-quarto/talk.original.qmd demos/2-quarto/talk.qmd
```
