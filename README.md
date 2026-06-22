# NPCO Landing Page

Single-page pitch site for **National Packaging Co (NPCO)** — a contract manufacturer / co-packer for dry food products.

## Stack

- **[Astro](https://astro.build)** — static output, ~zero client JS
- **[Tailwind CSS](https://tailwindcss.com)** — design tokens via `@theme` (ported from `src/styles/tokens.css`)
- **Netlify** — hosting + [Netlify Forms](https://docs.netlify.com/forms/setup/) for the quote form
- No React / no framework runtime (one small vanilla-JS snippet for the mobile menu)

> Tailwind v4 is integrated via `@tailwindcss/vite`; design tokens live in a `@theme` block in `src/styles/global.css` (see `docs/decision.md` §3).

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server (http://localhost:4321) |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run check` | Type-check Astro components |
| `npm run capture` | Re-run the Playwright screenshot research (`docs/capture.mjs`) |

## Structure

```
src/
  pages/index.astro          # the one page — composes the sections
  layouts/Base.astro         # <head>, meta, schema, global CSS
  components/
    Header.astro             # sticky nav + mobile menu + "Get a Quote"
    Footer.astro
    sections/                # one file per homepage section (STUBs → built incrementally)
  data/site.ts               # all copy/content (verified facts + PLACEHOLDERs)
  styles/global.css          # Tailwind import + @theme design tokens + base/components
public/                      # static assets (favicon, images)
docs/                        # planning: brief.md, research.md, decision.md, capture.mjs, shots/
```

## Status

Scaffold + section **stubs** in place. Sections are wired and render real content from `src/data/site.ts`; visual build-out (hero imagery, persona tabs, timeline, hover states) is the next step. Items marked `PLACEHOLDER` in `site.ts` need real content from NPCO (testimonials, exact certifications, Stick Packs specs, photos).

See `docs/decision.md` for the locked decisions and `docs/research.md` for the verified live-site findings.
