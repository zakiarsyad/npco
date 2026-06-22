# NPCO Redesign — Decision Doc

> Purpose: lock the decisions everything else depends on, **before** building.
> Inputs: `brief.md` (original strategy brief, unmodified) + `research.md` (verified Playwright findings on both live sites).
> Companion: `spec.md` (section-by-section build spec), `design-system.md` (tokens/visual language), `content-needed.md` (what NPCO must supply).
> Status legend: ✅ Decided · 🟡 Needs content from NPCO · ⏭️ Next step.

---

## 0. Scope — ✅ Decided (changed)

**A single landing page** used to **pitch NPCO to target clients**. Not an app. Not a multi-page site.

- One page (`/`), composed of sections.
- No customer login, e-commerce, dashboards, or blog (considered and cut).
- The earlier multi-page sitemap is **dropped**. Service/about/cert "pages" become **sections** on the one page (anchor links).

---

## 1. Goals → success criteria

| Goal | Concretely | Check |
| --- | --- | --- |
| **UI/UX** | Unified hero, clear rhythm (no stacked solid color-bands), strong hierarchy | Design review vs. current-site screenshots |
| **Domain expertise** | 40-yr / Ropak-inventor / 3rd-gen-family / household-brand story above the fold | Heritage visible in first screen |
| **Web conversion** | One persistent "Get a Quote" CTA + social proof + clear process | Sticky CTA all breakpoints; form reachable in 1 click |
| **Web performance** | Near-zero JS, optimized images, no layout shift | Lighthouse ≥ 95 mobile; LCP < 2.0s |
| **SEO** | Fix missing `<h1>`, proper headings, schema, meta | Single valid H1; LocalBusiness schema present |

---

## 2. Direction — ✅ Decided

**"Heritage Trust + Industrial Precision"** (merge of brief Directions #3 Trust-First + #1 Industrial Precision).

- **Lead with heritage, not just certs.** Surface "40 years · co-inventor of the Ropak packaging machine · 3rd-generation family-owned · trusted by household brands." NPCO's strongest, hardest-to-copy asset (verified, currently buried).
- **Keep the existing palette** (navy-blue primary + orange accent) — research confirms it's already correct. Fix *execution*: unified hero with dark overlay, generous whitespace, orange reserved for CTAs/highlights only.
- **Borrow CBS's structure, not its look:** centered hero + single CTA, persona section ("Who We Help"), visual process timeline, persistent quote CTA.

**Folded-in copy angles:** brief #2 (Scale Storytelling) and #5 (Food-Founder-Friendly) inform tone, not layout.
**Explicitly skipped:** CBS's mobile-vs-desktop hero swap, e-commerce, government-contracting depth.

---

## 3. Stack — ✅ Decided (Tailwind added)

**Astro + Tailwind CSS + TypeScript, deployed on Netlify. No React / no framework runtime.**

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | **Astro** (static output) | ~zero client JS; best raw performance/SEO for a content page |
| Styling | **Tailwind CSS** | Chosen for consistency + iteration speed (trade-off: one build dependency vs. Astro scoped CSS — accepted) |
| Design tokens | Tailwind `@theme` block in `src/styles/global.css` | Single source of truth for navy/orange + font |
| Language | TypeScript | Safer content data + props |
| Interactivity | A few lines of **vanilla JS** (mobile menu; optional persona tabs) | No React needed |
| Forms | **Netlify Forms** (`data-netlify="true"`) | Zero-backend quote submissions |
| Images | Astro `<Image>` (`astro:assets`) | Auto-optimization |
| Hosting | **Netlify** | Auto-detects Astro, CDN, deploy previews, free forms |

### Why Astro over Next.js (recap)
For a mostly-static single page, Next.js ships a React runtime + hydration we don't need. Astro ships ~0 KB JS for static content — lighter, faster, simpler. Next.js would only win if this became an app (it won't).

### Tailwind integration — ✅ done
1. Installed `tailwindcss` + `@tailwindcss/vite` (v4); plugin wired in `astro.config.mjs`.
2. Tokens live in a Tailwind `@theme` block in `src/styles/global.css` (replaced the old `tokens.css`).
3. All section components use Tailwind utilities; `.btn` / `.wrap` / `.section` are `@layer components`.
4. `npm run build` passes; output ships ~0 KB JS and a single `<h1>`.

> The scaffold is consistent with the decided stack. Remaining work is **section build-out** (real hero imagery, persona tabs, timeline, hover states) — see §7.

---

## 4. Page structure — ✅ Decided (section order)

Single page, top → bottom (full detail in `spec.md`):

1. Sticky header · 2. Hero · 3. Heritage trust bar · 4. Services · 5. Who We Help ·
6. How It Works · 7. Certifications · 8. Social proof 🟡 · 9. Quote CTA · 10. Footer

---

## 5. Content inventory — 🟡 Needs NPCO

Verified facts already encoded in `src/data/site.ts`. Outstanding items tracked in **`content-needed.md`**. Sections gated by content are marked `PLACEHOLDER` and will be built with labeled placeholders so momentum isn't blocked.

---

## 6. SEO + performance plan — ✅ Decided

**SEO** — exactly one `<h1>` (fixes the verified missing-H1 bug); keyword-bearing `<h2>`s; `LocalBusiness` schema in `Base.astro`; descriptive title/meta + image `alt`.
**Performance** — static output, ~zero JS, inline critical CSS, `astro:assets` images, system fonts, long-cache hashed assets via `netlify.toml`.

---

## 7. Build sequence — ⏭️ Next step (after docs approved)

1. Integrate Tailwind (`astro add tailwind` + port tokens). 2. Build hero (highest impact). 3. Build remaining sections top-to-bottom, each reviewable. 4. Wire quote form → Netlify + test. 5. Add imagery + finalize copy. 6. SEO/perf pass (Lighthouse ≥ 95). 7. Netlify preview → review → launch.

---

## 8. Current status

- ✅ Scope, direction, stack (incl. Tailwind), section order — decided.
- ✅ Scaffold finished on-stack: Astro + **Tailwind integrated**, section **stubs** wired to `site.ts`, design tokens in `@theme`, Netlify config. `npm run build` passes (~0 KB JS, single `<h1>`).
- ⏭️ Next: **section build-out** (hero imagery, persona tabs, timeline, hover states) — §7.
- 🟡 Awaiting real content from NPCO (`content-needed.md`).
