# NPCO Project Docs — Index

Documentation for the NPCO pitch landing page. Read in this order.

| Doc | What it covers | Status |
| --- | --- | --- |
| [`brief.md`](./brief.md) | Original redesign strategy brief (unmodified source of record) | Frozen |
| [`research.md`](./research.md) | Verified live-site findings — Playwright render of npcoinc.com + casesbysource.com (desktop + mobile) | Done |
| [`decision.md`](./decision.md) | Locked decisions: scope, direction, **stack (Astro + Tailwind + Netlify)**, goals, build sequence | Current |
| [`spec.md`](./spec.md) | Section-by-section build spec for the single landing page | Current |
| [`design-system.md`](./design-system.md) | Visual language — palette, type, spacing, components, voice, a11y | Current |
| [`content-needed.md`](./content-needed.md) | Checklist of real content required from NPCO before launch | Open 🟡 |

## TL;DR

- **What:** one **landing page** to pitch NPCO (contract food manufacturer / co-packer) to target clients.
- **Direction:** "Heritage Trust + Industrial Precision" — lead with the 40-yr / Ropak / 3rd-gen-family story; keep the existing navy + orange palette; fix execution.
- **Stack:** **Astro + Tailwind CSS + TypeScript on Netlify**, ~zero JS, Netlify Forms for the quote form.
- **Status:** scaffold + section **stubs** built; **documenting before build-out**. Awaiting NPCO content (`content-needed.md`).

## Repo map

```
/                     Astro project root
  src/                site source (pages, layouts, components, data, styles)
  public/             static assets
  docs/               ← you are here (planning + decisions + spec)
  docs/shots/         live-site research screenshots (git-ignored; regenerate via `npm run capture`)
  astro.config.mjs · netlify.toml · package.json
```

## Key facts (verified)

- Business: contract manufacturer / co-packer for **dry food products**.
- Heritage: **40+ years**, **3rd-generation family-owned**, founded by the **co-inventor of the Ropak packaging machine**, **65,000 sq-ft** warehouse.
- Contact: 3306 Central PKWY, Decatur AL 35603 · (256) 260-2979.
- Current-site bug to fix: homepage has **no `<h1>`**.
