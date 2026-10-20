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

## Follow the live demos step by step (git tags)

Every step of the three live demos is saved in git, so you can look at each step, compare
two steps, or start from any step yourself. You don't need to know much git for this.

**Two words first:**
- A **branch** is a separate line of work. Each demo has its own branch, separate from `main` (the slides).
- A **tag** is a name for one saved moment (a commit). Each demo step has a tag.

| Demo | Branch | Tags, in order |
| --- | --- | --- |
| Slidev in VS Code | `demo-slidev` | `slidev-0-empty` → `slidev-1-starter` → `slidev-2-own-slides` → `slidev-3-claude-md` → `slidev-4-data` → `slidev-5-bar-chart` → `slidev-6-click-chart` |
| Quarto with R | `demo-quarto-r` | `quarto-r-0-empty` → `quarto-r-1-project` → `quarto-r-2-sample-deck` → `quarto-r-3-own-slides` → `quarto-r-4-data` → `quarto-r-5-computed` → `quarto-r-6-chart` |
| Quarto with Python | `demo-quarto-py` | `quarto-py-0-empty` → `quarto-py-1-project` → `quarto-py-2-sample-deck` → `quarto-py-3-own-slides` → `quarto-py-4-data` → `quarto-py-5-computed` → `quarto-py-6-chart` |

### Just looking? Use the GitHub website

- **See the files at one step:** on the repository page, click the **branch** button (it says `main`),
  open the **Tags** tab and pick a tag, for example `slidev-5-bar-chart`.
- **See what changed between two steps:** open
  `https://github.com/LUMC-DCC/2026-10-presenting-in-the-ai-age/compare/slidev-4-data...slidev-5-bar-chart`
  (swap in any two tags). Green lines were added, red lines removed.

### Working on your own computer

**1. Download one demo into its own folder.** For example the Slidev demo:

```bash
git clone --branch demo-slidev https://github.com/LUMC-DCC/2026-10-presenting-in-the-ai-age.git demo-slidev
cd demo-slidev
```

For the other demos, replace both `demo-slidev` words with `demo-quarto-r` or `demo-quarto-py`.

**2. List the steps:**

```bash
git tag --list "slidev-*"
git log --oneline --decorate
```

**3. Go to a step.** Your folder now looks exactly like that moment of the demo:

```bash
git switch --detach slidev-2-own-slides
```

Git says you are in "detached HEAD" state. That's fine: it means "looking at a saved moment".
Go to the next step the same way (`slidev-3-claude-md`, and so on).

**4. See what a step changed:**

```bash
git diff slidev-4-data slidev-5-bar-chart
```

Press `q` to leave the diff. In VS Code, the **Source Control** panel and the timeline show the same information.

**5. Try it yourself, starting from a step.** Make your own branch there, so your work is kept:

```bash
git switch -c my-try slidev-4-data
```

Now give your AI assistant the prompt from that step (see [`demos/prompts.md`](demos/prompts.md)),
look at the result, and save it:

```bash
git add -A
git commit -m "My own bar chart"
```

Compare your version with the prepared one: `git diff slidev-5-bar-chart my-try`.

**6. Made a mess? Go back.**

```bash
git restore .
git switch --detach slidev-4-data
```

`git restore .` throws away changes you haven't committed. Committed work on `my-try` stays safe;
`git switch my-try` brings it back.

**7. Back to the finished demo:** `git switch demo-slidev`

### Run the demo at any step

| Demo | From step | Run |
| --- | --- | --- |
| Slidev | 1 | `npm install` once, then `npx slidev` (opens http://localhost:3030) |
| Quarto with R | 2 | open `my-quarto-talk.Rproj` in RStudio, open `talk.qmd`, click **Render**; or `quarto preview talk.qmd` |
| Quarto with Python | 2 | `quarto preview talk.qmd` (needs Python with `jupyter`, `pandas`, `matplotlib`) |

**Good to know:**
- Files git ignores stay when you switch steps: `node_modules/` (Slidev), rendered `talk.html` and
  `talk_files/` (Quarto). That's normal. Rendering again overwrites them.
- After switching steps, reload the browser (⌘R / Ctrl+R). If Slidev still shows old slides,
  press `r` in the terminal where it runs to restart it.
- The tags never change, so you can't break the prepared steps. At worst, delete the folder and clone again.

All readmissions data in this repository is synthetic. Never paste real patient data into an AI tool.
