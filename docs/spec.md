# NPCO Redesign — Section & Interaction Spec

> What each section contains, how it *moves*, and where its content/data lives. Pairs with `decision.md` (why) + `design-system.md` (look). One `.astro` per section in `src/components/sections/`, content from `src/data/site.ts`.
> Motion = vanilla IntersectionObserver + CSS, gated by `prefers-reduced-motion`. Status: ⬜ to build.

---

## Global
- One page (`src/pages/index.astro`); **one `<h1>`** (Hero); `<h2>` per section.
- Persistent "Get a Quote" (header + final section), anchors to `#quote`.
- Scroll-reveal `.in` class applied per section (staggered children).
- Warm-white / oat / navy band rhythm; amber for CTAs/highlights only.

## 1. Header ⬜
- **Content:** redesigned logo · anchor nav (Services, Who We Help, Process, Certifications) · "Get a Quote".
- **Motion/behavior:** sticky; subtle bg-blur + shadow on scroll; mobile hamburger (the main JS).
- **A11y:** `aria-expanded`, keyboard-operable.

## 2. Hero ⬜ (the money shot)
- **Content:** `<h1>` = `hero.h1`; sub = `hero.sub`; primary "Get Your Free Production Quote" + secondary "See Our Capabilities"; trust line (SQF · FDA · Decatur, AL).
- **Visual:** duotone factory image + navy scrim; precision-grid + corner ticks; a capability stat panel.
- **Motion:** hero text rises in on load; slow ken-burns/parallax on the image; animated arrow on primary CTA.
- **Data:** `hero`. **A11y:** one H1, text contrast over scrim ≥ 4.5:1.

## 3. Heritage / Trust strip ⬜
- **Content:** 40+ yrs · 3rd-gen family · 65,000 sq-ft · Ropak-machine origin + one line of heritage copy.
- **Motion:** **stat count-up** on scroll into view.
- **Data:** `heritage`. Readable without JS.

## 4. Services ⬜
- **Content:** Mixing & Blending · Packaging (Pouch→Pallet) · Warehousing & Fulfillment · Stick Packs 🟡. Title, blurb, 3 specs each; duotone photo.
- **Motion:** staggered reveal; card hover lift + image zoom + corner-tick accent.
- **Data:** `services`. Stick Packs flagged demo until specs confirmed.

## 5. Who We Help ⬜
- **Content:** Food Brand Owners · Operations Managers · Product Developers · Supply-Chain Leads — each a one-line need.
- **Visual/motion:** navy band; numbered cards; reveal stagger. (Optional CSS tabs later; all content in DOM for SEO.)
- **Data:** `personas`.

## 6. How It Works ⬜
- **Content:** 5 steps — Consultation → Assessment & Sampling → Planning → Manufacturing → Warehousing & Shipping.
- **Visual:** horizontal **flow-line** timeline (desktop) / vertical (mobile); the amber motif line connects steps.
- **Motion:** flow line draws in; steps reveal in sequence. Ends with CTA → `#quote`.
- **Data:** `process`. Ordered-list semantics.

## 7. Certifications ⬜
- **Content:** SQF · Kosher · USDA Organic · Halal · Non-GMO · Gluten-Free · Allergen-Free (real third-party marks) + "FDA registered · HACCP".
- **Visual/motion:** badges in a clean grid or **marquee**; hover lift.
- **Data:** `certifications`. Note "as listed on npcoinc.com — confirm with NPCO."

## 8. Social Proof 🟡 ⬜
- **Content:** 2–3 testimonials (quote + name + brand) + client-logo strip.
- **Status:** demo placeholders, clearly labeled — **no fabricated names/logos** as if real. Becomes real on engagement.
- **Data:** `testimonials`.

## 9. Quote CTA ⬜
- **Content:** heading + reassurances + phone fallback + form (name, email, company, message).
- **Behavior:** Netlify Form (`data-netlify` + honeypot); success state.
- **Data:** `site`.

## 10. Footer ⬜
- **Content:** logo, address (3306 Central PKWY, Decatur AL), phone, nav, "Get a Quote", © year, small "Concept redesign — [Agency]" credit line.
- **Data:** `site`.

---

## Out of scope (v1 pitch)
Live chat · blog · multi-page · CMS · e-commerce · dark-mode toggle · heavy scroll-jacking. Revisit post-engagement.
