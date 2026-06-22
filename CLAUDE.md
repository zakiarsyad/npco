# CLAUDE.md

Context for AI sessions on this repo. Read `docs/index.md` for the full picture.

## What this is

An agency **concept redesign of npcoinc.com** — a polished single-page homepage we build to pitch **National Packaging Co (NPCO)** (contract manufacturer / co-packer for dry food) and win the redesign work. It's a redesign, not a rebuild: new identity, not NPCO's lifted assets.

## Stack

- **Astro** (static) + **Tailwind CSS v4** (`@tailwindcss/vite`) + **TypeScript** → **Netlify**.
- Self-hosted fonts: **Space Grotesk** (display) + **Inter** (body) via `@fontsource-variable`.
- ~Zero framework JS. Motion = small vanilla `IntersectionObserver` (reveals + stat count-up) in `src/scripts/motion.ts`, plus the header/menu script. Astro inlines them.
- Quote form = **Netlify Forms** (`data-netlify`).

## Commands

```
npm run dev      # local dev (http://localhost:4321)
npm run build    # static build → dist/
npm run preview  # preview the build
npm run check    # type-check
npm run audit    # tools/full-audit.mjs — contrast, links, animation, responsive, Lighthouse
npm run shots    # tools/shoot-local.mjs — screenshots → docs/shots/
npm run images   # tools/find-images.mjs — Unsplash sourcing (needs .env: UNSPLASH_ACCESS_KEY)
```

## Conventions

- **Content lives in `src/data/site.ts`** — edit there, not in markup.
- **Sections** = one `.astro` each in `src/components/sections/`, composed by `src/pages/index.astro`.
- **Design tokens** = Tailwind `@theme` in `src/styles/global.css`. Palette: **navy + amber + oat** (amber = CTAs/accents only). Reusable classes (`.btn`, `.wrap`, `.section`, `.eyebrow`, `.duotone`, `.reveal`) are `@layer`.
- **Logo** is a drawn SVG (`src/components/Logo.astro`), not NPCO's file.
- **Photography** is treated **duotone** (`.duotone`) — never raw.
- **Exactly one `<h1>`** (Hero); sections use `<h2>`. (The live NPCO site has none — we fix that.)
- **AA contrast** required (`npm run audit` checks it). **`prefers-reduced-motion`** must show all content.
- **Demo content** (testimonials, client logos) is clearly labeled concept/sample and replaced with real approved content on engagement (`docs/content-needed.md`). Real third-party cert marks are shown as-is.

## Status

Built + audited: **Lighthouse Performance 99 · A11y 100 · Best-Practices 100 · SEO 100**, LCP ~2.1s, CLS 0. Not yet deployed. Reusable tooling in `tools/`.

## Docs

`docs/index.md` (map) · `brief.md` (original brief) · `research.md` (live-site + experience audit) · `decision.md` (mandate/direction/stack) · `design-system.md` (identity) · `spec.md` (sections) · `content-needed.md` (pitch content stance).
