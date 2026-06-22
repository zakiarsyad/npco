# NPCO Landing Page — Design System

> The visual language. Tokens here are the single source of truth, implemented as a Tailwind `@theme` block in `src/styles/global.css` (see `decision.md` §3). Change a value in `@theme` → it propagates through every utility class.

---

## Palette

Verified from the live site (`research.md`): NPCO is **already navy-blue primary + orange accent**. We keep it and fix execution. Orange is for **CTAs and highlights only** — never full-width section bands.

| Token | Hex | Use |
| --- | --- | --- |
| `--color-navy-900` | `#0f1f3a` | Footer bg, deepest surfaces |
| `--color-navy-800` | `#16284a` | **Primary** — hero bg, headings |
| `--color-navy-700` | `#1e3a5f` | Secondary navy |
| `--color-navy-600` | `#2b4f7e` | Hover/edge navy |
| `--color-orange-600` | `#d96b12` | CTA hover |
| `--color-orange-500` | `#ef7c1a` | **Accent / CTA** |
| `--color-orange-400` | `#f7942f` | Accent on dark |
| `--color-ink` | `#1a1d23` | Body text |
| `--color-slate` | `#4a5568` | Secondary text |
| `--color-muted` | `#6b7280` | Tertiary/captions |
| `--color-line` | `#e5e7eb` | Borders/dividers |
| `--color-surface` | `#f7f8fa` | Alternating section bg |
| `--color-white` | `#ffffff` | Base bg |

**Contrast rule:** body/heading text must hit WCAG AA (≥ 4.5:1). On imagery, always use the dark overlay.

> ⚠️ Exact brand hexes are approximated from screenshots. Before launch, confirm official navy/orange values with NPCO (or sample from their logo file).

---

## Typography

- **Family:** system sans stack (`--font-sans`) — zero font-loading cost, instant render. Swap to a brand webfont later only if required (document the trade-off then).
- **Scale:** fluid via `clamp()` — `--text-sm` → `--text-3xl`. Headings `font-weight: 800`, `letter-spacing: -0.02em`, `line-height: 1.1`. Body `line-height: 1.6`.
- **Heading semantics:** one `<h1>` (Hero) → `<h2>` per section → `<h3>` for cards/steps.

---

## Spacing & layout

- **Spacing:** use Tailwind's default scale (`p-6`, `py-24`, `gap-4`…) — consistent rhythm, no arbitrary values. This is what fixes the current site's "no rhythm" problem.
- **Container:** `.wrap` component class = `max-w-[1180px]`, centered, `px-6`.
- **Section padding:** `.section` = `py-24`. Alternate `white` / `bg-surface` for rhythm (no solid color-band stacking).
- **Radius/shadow:** Tailwind defaults (`rounded-2xl`, `shadow-sm`); brand-specific button radius via `.btn`.

---

## Components

- **Buttons:** `.btn` base; `.btn--primary` (orange, primary CTA), `.btn--ghost` (outline on dark). One primary action per view.
- **Cards:** white, `--color-line` border, `--radius-lg`, `--shadow-sm`; used by Services / Who We Help.
- **Badges:** pill, white on `--color-surface`, navy text; Certifications.
- **Stat block:** big navy number + muted label; Heritage bar.

---

## Voice & tone

- **Confident, professional, approachable** — B2B manufacturing, not casual startup.
- **Cut the chatty copy.** Drop "So your food business is growing — congrats!" Keep benefit-led, specific lines.
- **Numbers sell:** prefer "50 lbs – 10,000 lbs", "65,000 sq-ft", "40 years" over vague claims.
- **Keywords (natural, not stuffed):** contract manufacturing, co-packing, dry food production, private label, food packaging.

---

## Accessibility baseline

- AA contrast · visible `:focus-visible` outline (orange) · keyboard-operable menu/tabs · semantic landmarks (`header`/`main`/`footer`) · ordered list for the process · `prefers-reduced-motion` respected · descriptive image `alt`.

---

## Motion

Subtle and optional. Allowed: gentle hover transitions, one count-up on the heritage stats (progressive enhancement). Avoid: scroll-jacking, parallax, anything that delays LCP or hurts the performance budget.
