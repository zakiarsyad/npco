# CLAUDE.md

Context for AI sessions on this repo. Read `docs/index.md` for the full picture.

## What this is

A **single landing page** to pitch **National Packaging Co (NPCO)** — a contract manufacturer / co-packer for dry food products — to target clients. Not an app, not multi-page.

## Stack

- **Astro** (static output) + **Tailwind CSS** + **TypeScript**, deployed on **Netlify**.
- ~Zero client JS. Only vanilla JS = the mobile-menu toggle. No React.
- Quote form uses **Netlify Forms** (`data-netlify="true"`).

## Commands

```
npm run dev       # local dev (http://localhost:4321)
npm run build     # static build → dist/
npm run preview   # preview the build
npm run check     # type-check
npm run capture   # re-run Playwright screenshot research (docs/capture.mjs)
```

## Conventions

- **All copy/content lives in `src/data/site.ts`** — edit content there, not in markup.
- **Sections** are one `.astro` file each in `src/components/sections/`, composed by `src/pages/index.astro`.
- **Design tokens** live in a Tailwind `@theme` block in `src/styles/global.css` (brand navy/orange + font). Reusable classes (`.btn`, `.wrap`, `.section`) are `@layer components`.
- **Exactly one `<h1>`** on the page (in Hero). Section headings are `<h2>`. (The current live site has *no* h1 — that's a bug we're fixing.)
- **Palette:** navy primary + orange accent (orange = CTAs/highlights only, never full-width bands).
- **Never ship fabricated content.** No fake testimonials, client names, logos, or unverified certifications. Placeholder content stays visibly labeled until NPCO supplies the real thing (`docs/content-needed.md`).

## Current status

Scaffold finished on-stack: Astro + **Tailwind integrated**, section **stubs** wired to `site.ts`, `npm run build` passes (~0 KB JS, single `<h1>`). Next: **section build-out** (hero imagery, persona tabs, timeline, hover states). See `docs/decision.md` §7.

## Docs

`docs/index.md` (map) · `brief.md` (original brief) · `research.md` (live-site audit) · `decision.md` (decisions/stack) · `spec.md` (section spec) · `design-system.md` (visual language) · `content-needed.md` (NPCO to supply).
