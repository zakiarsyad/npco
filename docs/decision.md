# NPCO Redesign — Decision Doc

> **Context:** We are a **web design agency**. We are producing a **concept redesign of npcoinc.com** as a pitch — a polished, working homepage we send to NPCO to win them as a client by showing (not telling) how much better their web presence can be.
> **Inputs:** `brief.md` (original strategy brief) · `research.md` (verified live-site + experience/interaction audit of NPCO & CBS).
> **Companions:** `design-system.md` (the new visual identity) · `spec.md` (section + interaction spec) · `content-needed.md` (demo-content stance + what we'd collect once engaged).
> Status: ✅ Decided · 🟡 Demo placeholder · ⏭️ Next.

---

## 0. Mandate — ✅ Decided (this is a REDESIGN, not a rebuild)

- We are **redesigning**, not preserving. We do **not** lift NPCO's existing assets verbatim. New logo, new palette system, new type, new motion, art-directed photography.
- Their photos may be used **as reference / treated placeholders** (duotone, graded) — never dropped in raw. Third-party certification marks (SQF, Kosher…) are standard and shown as-is.
- The artifact is a **single concept homepage** that works, loads fast, and feels unmistakably new while staying credibly "NPCO" (a 40-year food manufacturer).
- **Goal of the artifact:** be impressive enough that NPCO says "yes, redesign our site."

---

## 1. Goals → success criteria

| Goal | Concretely | Check |
| --- | --- | --- |
| **Wow / pitch impact** | Looks like a premium 2026 B2B brand, not a WordPress template | Side-by-side vs. current site is night-and-day |
| **Experience / motion** | Tasteful scroll reveals, count-ups, hover microinteractions | "More alive than CBS, lighter than NPCO" |
| **Domain expertise** | 40-yr / Ropak / 3rd-gen-family heritage is a hero element | Visible above the fold |
| **Conversion** | Persistent "Get a Quote" + social proof + clear process | Sticky CTA all breakpoints |
| **Performance** | Rich motion with near-zero JS weight | Lighthouse ≥ 95 mobile; LCP < 2.0s |
| **SEO** | Single `<h1>` (current site has none), schema, semantic headings | Validated in build |

---

## 2. Design direction — ✅ Decided

**"The Precision Co-Packer" — industrial precision meets food-grade warmth.**

- **Modern industrial** confidence (clean grid, measured detail, technical type) — signals precision/quality.
- **Food-grade warmth** via a signature **oat/cream** neutral (evokes dry food / powder) — this is the move that makes it feel premium and *food*, not generic corporate navy.
- **Heritage-forward:** the 40-year / Ropak / family story is surfaced, not buried.
- Full visual system in `design-system.md`. Headline identity moves: **redesigned logo**, **navy + amber + oat** palette, **Space Grotesk + Inter** type, **precision-grid/flow motif**, **duotone photography**.

**Scope of identity change:** brand **refresh** — we keep the navy+amber *equity* (40 yrs of recognition) but redesign every expression of it. Not a full rename/rebrand.

---

## 3. Scope — ✅ Decided

**One concept homepage.** Sections, anchor nav, no multi-page, no app, no CMS, no e-commerce. Demo content where NPCO's private content isn't public (clearly tasteful, never fake-attributed).

Section order (detail in `spec.md`):
1. Header (sticky) · 2. Hero · 3. Heritage/trust strip · 4. Services · 5. Who We Help ·
6. How It Works · 7. Certifications · 8. Social proof 🟡 · 9. Quote CTA · 10. Footer

---

## 4. Stack — ✅ Decided

**Astro + Tailwind CSS v4 + TypeScript → Netlify.** Motion via **vanilla IntersectionObserver + CSS only** (no jQuery / slick / GSAP — explicitly avoiding CBS's 66-script bloat). Self-hosted fonts via `@fontsource-variable`. Images via `astro:assets` (duotone treatment in CSS). Quote form via Netlify Forms.

Rationale unchanged from research: Astro ships ~0 KB JS for static content → we get CBS-grade richness at NPCO-grade weight. The motion budget is a few KB of vanilla JS, gated behind `prefers-reduced-motion`.

---

## 5. Motion system — ✅ Decided (the differentiator)

| Effect | Tech | Where |
| --- | --- | --- |
| Scroll-reveal (fade/rise) | IntersectionObserver adds `.in` → CSS transition | every section, staggered |
| Stat count-up | IntersectionObserver + rAF | Heritage strip |
| Card hover lift + image zoom | CSS only | Services, personas |
| Logo/cert marquee | CSS keyframes | trust strips |
| Hero parallax / ken-burns | CSS transform on scroll (cheap) | Hero duotone image |
| Animated CTA arrow, button sheen | CSS only | CTAs |

All ≤ ~2 KB JS total, disabled under `prefers-reduced-motion`.

---

## 6. SEO + performance — ✅ Decided

Single `<h1>`; keyword `<h2>`s; `LocalBusiness` schema; descriptive meta + image `alt`; static output; inline critical CSS; `astro:assets`; subset self-hosted fonts; long-cache hashed assets via `netlify.toml`.

---

## 7. Build plan — ⏭️ (task 7/8)

1. Scaffold Astro + Tailwind v4 + fonts; define the new design tokens in `@theme`.
2. Design the **logo** (SVG) + the motif primitives.
3. Build **Hero** (duotone factory + new identity) — the pitch's money shot.
4. Build remaining sections top→bottom with the motion system.
5. Wire quote form (Netlify) + reduced-motion + a11y pass.
6. Lighthouse ≥ 95; Netlify preview.

---

## 8. Status

- ✅ Research complete (visual + experience/interaction audit of both sites).
- ✅ Mandate, direction, identity, scope, stack, motion — decided & documented.
- ⏭️ Scaffolding + building (task 8, in progress).
- 🟡 Social proof / exact certs stay demo-placeholder until NPCO engages (`content-needed.md`).
