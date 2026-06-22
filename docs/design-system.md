# NPCO Redesign — Design System (new identity)

> The **redesigned** visual language for the NPCO concept. This is original work, not NPCO's current brand. Tokens live in a Tailwind `@theme` block in `src/styles/global.css`. Direction: **"The Precision Co-Packer"** — industrial precision + food-grade warmth (see `decision.md` §2).

---

## Logo (redesigned)

A new mark + wordmark, drawn as SVG (in `src/components/Logo.astro`):
- **Mark:** a rounded-square "quality seal" containing an abstract **"N" formed from a rising flow** (product scaling up the production line), navy with a single amber fill-dot (a product/grain).
- **Wordmark:** `NPCO` in the display face (Space Grotesk), with `NATIONAL PACKAGING CO.` as small tracked-out subtext.
- Two lockups: full (mark + wordmark) for header/footer; mark-only for favicon.
- Reversible: navy-on-light and white/amber-on-dark.

> This replaces NPCO's lifted PNG logo. If NPCO engages, we'd refine against their real brand assets.

---

## Palette (redesigned — navy + amber + oat)

We keep the navy+orange **equity** but make it intentional and add the signature **oat/cream** neutral that reads "dry food / food-grade."

| Token | Hex | Role |
| --- | --- | --- |
| `--color-navy-950` | `#0a1422` | deepest bg |
| `--color-navy-900` | `#0e1c30` | dark sections |
| `--color-navy-800` | `#12243c` | **primary** / headings |
| `--color-navy-700` | `#1c3357` | secondary navy / borders on dark |
| `--color-amber-500` | `#f2820d` | **accent / CTA** (warmer, more refined than the old "safety orange") |
| `--color-amber-400` | `#ff9e2c` | accent on dark |
| `--color-amber-600` | `#d96b08` | CTA hover |
| `--color-oat-100` | `#f7f1e6` | **signature** warm surface |
| `--color-oat-200` | `#efe6d4` | warm surface 2 / borders |
| `--color-ink` | `#15191f` | body text |
| `--color-slate` | `#4b5563` | secondary text |
| `--color-muted` | `#7a8694` | captions |
| `--color-line` | `#e6e2d8` | hairlines (warm-tinted) |
| `--color-cloud` | `#fbfaf7` | base bg (warm white, not stark white) |

Rhythm: alternate **warm-white / oat / navy** bands (not the old stark white/orange stacking). Amber stays for CTAs + highlights only.

> ⚠️ Hexes are our redesign proposal, not NPCO's official brand. Confirm/merge with their real values if engaged.

---

## Typography (redesigned — real typefaces, self-hosted)

- **Display / headings:** **Space Grotesk** (variable, self-hosted via `@fontsource-variable/space-grotesk`) — technical, geometric, precise → "precision manufacturing."
- **Body / UI:** **Inter** (variable, self-hosted) — neutral, legible at small sizes.
- Replaces the placeholder system-font stack. Subset + `font-display: swap`; ~1 weight range each → minimal load cost.
- **Scale:** fluid `clamp()`. Display weights 600–700, tight tracking (`-0.02em`); body 400–500, `line-height` 1.6.
- **Heading semantics:** one `<h1>` (Hero) → `<h2>` per section → `<h3>` cards/steps.

---

## Motif — "precision grid + flow"

Ownable graphic language used as accents (SVG/CSS, near-zero weight):
- **Measured grid / ruler ticks** — faint lines, corner ticks on cards and the hero.
- **Flow line** — a thin amber line that traces the journey mixing → packaging → warehousing (used in How It Works and as section dividers).
- **Fill-level bars** — small navy/amber bars echoing batch/fill (stats, list bullets).

---

## Photography — art-directed, not "dropped in"

NPCO's raw factory photos are **treated**, never used raw:
- **Duotone** (navy shadows → oat/amber highlights) for a consistent, branded grade.
- Uniform aspect ratios + generous crops; subtle grain.
- Hero: duotone factory with a navy gradient scrim + slow ken-burns/parallax.
- This treatment is what turns "reuse" into "redesign."

---

## Components

- **Buttons:** `.btn` base; `.btn--primary` (amber), `.btn--ghost` (outline on dark), animated arrow on hover. One primary action per view.
- **Cards:** warm-white, hairline border, corner tick, hover lift + image zoom.
- **Stat block:** large Space Grotesk number (count-up) + muted label.
- **Pill / eyebrow:** small tracked-out label over each section.
- **Marquee:** continuous CSS scroll for certs/clients.

---

## Motion (see `decision.md` §5)

Scroll-reveal, count-up, hover lift/zoom, marquee, hero parallax — **vanilla IntersectionObserver + CSS only**, ≤ ~2 KB JS, all gated by `prefers-reduced-motion`. No jQuery/slick/GSAP.

---

## Accessibility

AA contrast (verify amber-on-navy and text-on-oat) · visible `:focus-visible` (amber) · keyboard-operable menu/tabs · semantic landmarks · ordered list for process · reduced-motion respected · descriptive `alt` · duotone never reduces text contrast (text sits on scrims, not raw image).

---

## Voice & tone

Confident, precise, partner-not-vendor. Cut the chatty current copy. Numbers sell ("50–10,000 lb batches", "65,000 sq-ft", "40 years"). Keywords natural: contract manufacturing, co-packing, dry food, private label.
