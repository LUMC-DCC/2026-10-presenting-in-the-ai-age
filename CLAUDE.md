# Coding Café deck — briefing for Claude

Slidev deck. Entry is `slides.md`; each part of the talk is one file in `sections/`.
Live demo material and data are in `demos/`.
Preview with `npm run dev` (http://localhost:3030, hot reload).

## House style
- Every content slide: a small eyebrow label (`text-xs tracking-widest`) above the `#` title.
- Colours: LUMC blue `#003C7D`, accents from Tailwind indigo / fuchsia / emerald / amber.
- One message per slide, ~40 words of body text at most. Split rather than shrink the font.
- Speaker notes go in an HTML comment at the end of the slide.

## Gotchas
- In SVG, set text size with `style="font-size:…"`. UnoCSS attributify turns
  `font-size="13"` into a 3.25rem utility.
- Don't write double curly braces in slide text: Vue treats them as template code.

## Red lines
- Numbers come from `components/readmissions.ts` or `demos/data/readmissions.csv`,
  never from you. If a number is unknown, write TODO.
- The readmissions data is synthetic. Never ask for or paste real patient data.
- Don't delete or reorder slides without asking; propose the change first.
