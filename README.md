# NPCO — Concept Redesign

An agency **concept redesign of [npcoinc.com](https://npcoinc.com/)** — a single, fast, polished homepage built to pitch **National Packaging Co** (contract manufacturer / co-packer for dry food) and win the redesign. A redesign, not a rebuild: new logo, palette, type, motion, and art-directed photography.

## Stack

- **[Astro](https://astro.build)** — static output, ~zero framework JS
- **[Tailwind CSS v4](https://tailwindcss.com)** (`@tailwindcss/vite`) — tokens in a `@theme` block in `src/styles/global.css`
- **Space Grotesk + Inter**, self-hosted via `@fontsource-variable`
- Motion = tiny vanilla `IntersectionObserver` (scroll reveals + stat count-up), inlined
- **Netlify** — hosting + [Netlify Forms](https://docs.netlify.com/forms/setup/) for the quote form

## Quality (audited)

Lighthouse mobile: **Performance 99 · Accessibility 100 · Best Practices 100 · SEO 100** · LCP ~2.1s · CLS 0. Single `<h1>`, AA contrast, `prefers-reduced-motion` safe, 0px overflow 320–1440.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server (http://localhost:4321) |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run audit` | Full audit — contrast, links, animation, responsive, Lighthouse |
| `npm run shots` | Screenshot the local build → `docs/shots/` |
| `npm run images` | Source images from Unsplash (needs `.env` → `UNSPLASH_ACCESS_KEY`) |

## Structure

```
src/
  pages/index.astro       # the page — composes all sections
  layouts/Base.astro      # <head>, meta, schema, fonts, global CSS
  components/
    Logo.astro            # redesigned SVG logo (mark + wordmark)
    Header.astro          # sticky nav, transparent→solid on scroll, mobile menu
    Footer.astro
    sections/             # one .astro per homepage section
  data/site.ts            # all copy/content (verified facts + labeled demo content)
  scripts/motion.ts       # scroll-reveal + count-up (reduced-motion safe)
  styles/global.css       # Tailwind + @theme tokens + base/components
  assets/                 # duotone-treated photography + cert marks
public/                   # favicon, static assets
docs/                     # brief, research, decisions, design system, spec
tools/                    # audit + screenshot + image-sourcing scripts
```

See `docs/index.md` for the full documentation map.
