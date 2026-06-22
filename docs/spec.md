# NPCO Landing Page — Build Spec

> The single source of truth for **what each section contains and how it behaves**. Pairs with `decision.md` (the "why") and `design-system.md` (the "look").
> Every section is one `.astro` file in `src/components/sections/`, pulling content from `src/data/site.ts`.
> Status: 🟢 stub in place · 🟡 needs NPCO content · ⬜ not started.

---

## Global

- **One page**, `src/pages/index.astro`, composes all sections.
- **One `<h1>`** total (in Hero). Everything else is `<h2>`/`<h3>`.
- **Persistent CTA:** "Get a Quote" in the sticky header + a final Quote section; all anchor to `#quote`.
- **Breakpoints:** mobile-first; primary desktop breakpoint ~860px (matches header nav switch).
- **Motion:** subtle only; respect `prefers-reduced-motion`.

---

## 1. Header  🟢

- **Purpose:** persistent nav + always-visible conversion CTA.
- **Content:** brand wordmark · anchor links (Services, Who We Help, How It Works, Certifications) · "Get a Quote" button.
- **Behavior:** sticky on scroll; mobile = hamburger toggling a stacked menu (the page's only required JS).
- **Data:** `navLinks` (in component), `site` (brand).
- **Acceptance:** sticky; keyboard-operable toggle (`aria-expanded`); CTA visible at all widths.

## 2. Hero  🟢 → ⬜ (visual build)

- **Purpose:** instant clarity on what NPCO does + primary conversion.
- **Content:** `<h1>` = `hero.h1` ("Contract Manufacturing for Dry Food Brands Ready to Scale"); sub = `hero.sub`; primary CTA "Get Your Free Production Quote" + secondary "See Our Capabilities".
- **Visual (to build):** full-bleed factory image/video + **dark gradient overlay** for legible text (fixes the current site's broken, overlay-less hero). Single composition — headline and CTAs sit *on* the image, not below it.
- **Data:** `hero`.
- **Acceptance:** exactly one H1; text contrast ≥ 4.5:1 over image; LCP image optimized via `astro:assets`.

## 3. Heritage trust bar  🟢

- **Purpose:** surface the buried, hardest-to-copy credibility immediately after the hero.
- **Content:** 4 stats — `40+` years · `3rd` generation family-owned · `65,000` sq-ft warehouse · `Ropak` (co-inventor of the Ropak packaging machine).
- **Visual:** horizontal stat row (4-up desktop, 2-up mobile); optional count-up animation (progressive enhancement only).
- **Data:** `heritage`.
- **Acceptance:** readable without JS; animation never blocks content.

## 4. Services  🟢

- **Purpose:** what NPCO does, with credibility-building specifics.
- **Content:** 4 cards — Precision Mixing & Blending · Food Packaging (Pouch to Pallet) · Food-Grade Warehousing & Fulfillment · **Stick Packs** 🟡. Each: title, blurb, 3 bullet specs.
- **Visual:** card grid (4-up → 2-up → 1-up). Build-out: hover reveals specs/stats; optional service imagery.
- **Data:** `services`.
- **Acceptance:** Stick Packs clearly flagged placeholder until specs arrive.

## 5. Who We Help  🟢

- **Purpose:** persona-based relevance (CBS's strongest borrowed pattern).
- **Content:** 4 personas — Food Brand Owners · Operations Managers · Product Developers · Supply-Chain Leads — each with a one-line need.
- **Visual:** cards now; **tabs** as an optional enhancement (vanilla JS or CSS `:target`). Tabs are nice-to-have, not required for v1.
- **Data:** `personas`.
- **Acceptance:** all persona content present in DOM (SEO) even if tabbed.

## 6. How It Works  🟢

- **Purpose:** de-risk engagement by showing a clear path.
- **Content:** 5 steps — Free Consultation → Assessment & Sampling → Production Planning → Full-Scale Manufacturing → Warehousing & Shipping.
- **Visual:** numbered vertical list now; build-out = horizontal timeline on desktop, vertical on mobile.
- **Data:** `process`.
- **Acceptance:** ordered list semantics; ends with a CTA toward `#quote`.

## 7. Certifications  🟢 🟡

- **Purpose:** promote quality signals the current site buries in the footer.
- **Content:** badge list — SQF, Kosher, USDA Organic, Halal, Non-GMO, FDA Registered (**confirm exact list/levels**).
- **Visual:** badge row; build-out = hover-for-detail ("SQF Level 2 — what it means for you").
- **Data:** `certifications`.
- **Acceptance:** no unverified certifications shipped to production.

## 8. Social Proof  🟡 ⬜

- **Purpose:** B2B trust — the single most impactful missing element on the current site.
- **Content:** 1–3 testimonials (quote + name + brand) + client logos.
- **Status:** **blocked on real content + permissions** (`content-needed.md`). Ships with a labeled placeholder until then.
- **Data:** `testimonials`.
- **Acceptance:** no fake/unapproved names or logos in production.

## 9. Quote CTA  🟢

- **Purpose:** the conversion endpoint.
- **Content:** heading "Get Your Free Production Quote" + phone fallback + form (name, email, company, message).
- **Behavior:** **Netlify Form** (`data-netlify="true"` + honeypot). Confirm destination (email/CRM) and required fields with NPCO.
- **Data:** `site`.
- **Acceptance:** a test submission lands in Netlify; success state handled; spam honeypot present.

## 10. Footer  🟢

- **Purpose:** contact + final CTA.
- **Content:** name, address (3306 Central PKWY, Decatur AL), phone ((256) 260-2979), "Get a Quote", © year.
- **Data:** `site`.
- **Acceptance:** tel: link works on mobile.

---

## Out of scope for v1 (parking lot)

Live chat widget · blog/resources · multi-page service pages · dark mode · mobile-specific hero copy · count-up/scroll animations beyond subtle · CMS. Revisit only after the pitch page proves out.
