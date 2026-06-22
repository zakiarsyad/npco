# NPCO Redesign — Docs Index

Agency **concept redesign** of npcoinc.com, built to pitch NPCO and win the work.

| Doc | Covers | Status |
| --- | --- | --- |
| [`brief.md`](./brief.md) | Original strategy brief (source of record) | Frozen |
| [`research.md`](./research.md) | Verified live-site findings + **experience/interaction audit** of NPCO & CBS | Done |
| [`decision.md`](./decision.md) | Mandate (redesign, not rebuild), direction, scope, stack, **motion system**, plan | Current |
| [`design-system.md`](./design-system.md) | **New identity** — logo, navy+amber+oat palette, Space Grotesk/Inter, motif, duotone photo | Current |
| [`spec.md`](./spec.md) | Section + interaction spec | Current |
| [`content-needed.md`](./content-needed.md) | Pitch content stance + what we'd collect on engagement | Open 🟡 |

## TL;DR
- **What:** one **concept homepage** redesigning npcoinc.com, as an agency pitch.
- **Direction:** "The Precision Co-Packer" — industrial precision + food-grade warmth. Redesigned logo, **navy + amber + oat** palette, real typefaces, precision-grid/flow motif, duotone photography.
- **Experience:** tasteful motion (scroll reveals, count-ups, hover, marquee, hero parallax) — **richer than CBS, lighter than NPCO**, vanilla JS + CSS only.
- **Stack:** Astro + Tailwind v4 + TS → Netlify, ~0 KB framework JS, Lighthouse ≥ 95 target.

## Key facts (verified)
- Contract manufacturer / co-packer for **dry food products**.
- **40+ yrs**, **3rd-gen family-owned**, founded by the **co-inventor of the Ropak packaging machine**, **65,000 sq-ft** warehouse.
- 3306 Central PKWY, Decatur AL 35603 · (256) 260-2979.
- Current site: **no `<h1>`**, zero motion design — the redesign fixes both.

## Tooling (`tools/`)
`full-audit.mjs` (`npm run audit` — contrast, links, animation, responsiveness, Lighthouse) · `shoot-local.mjs` (`npm run shots`) · `find-images.mjs` (`npm run images` — Unsplash sourcing, needs `.env`). Screenshots → `docs/shots/` (git-ignored).
