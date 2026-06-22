# NPCO — Live Site Research (Playwright)

> **Method:** Both sites rendered in real Chromium (Playwright 1.61) at desktop **1440×900** and mobile **390×844**, full-page screenshots captured. This corrects/extends `brief.md`, which was written from a partial HTML fetch without seeing the rendered pages.
>
> **Date:** 2026-06-22
> **Screenshots:** `/shots/` — `{npco,cbs}-{desktop,mobile}-{fold,full}.png` (8 files)
> **Capture script:** `capture.mjs`

---

## A. NPCO (npcoinc.com) — Verified

### Real page metadata
- **`<title>`:** `Food Packaging Company & Contract Manufacturer | Co-Packagers` — actually decent/keyword-bearing (the brief assumed it was the generic "Flexible Food Manufacturing").
- **`<h1>`:** **NONE.** Playwright found no `<h1>` element on the homepage at either viewport. → concrete SEO defect.

### Real navigation
`Home · Scale Production · Mixing & Blending · Packaging · Logistics · Stick Packs · Resources · About · Contact`
- **Stick Packs** is a distinct product line — not mentioned anywhere in the brief. Likely a high-margin specialty worth its own page/section.

### Verified facts & trust assets (currently buried in body text)
- **40 years** in business
- Founded by the **co-inventor of the Ropak packaging machine**
- **3rd-generation, family-owned**
- Household-brand client base
- **65,000 sq-ft** warehouse
- Location: 3306 Central PKWY, Decatur AL 35603 · **(256) 260-2979** · Northern Alabama
- Primary CTA: **"Book A Free Quickfit Consult"** (15-min consult — assessment or referral)
- Certifications: referenced as "industry-leading standards" but **not detailed** on the homepage

### Visual reality (from the screenshots — corrects the brief)

| Brief claimed | Screenshot shows |
| --- | --- |
| "Orange too loud — *add* navy/charcoal as primary" | **Already navy-blue primary + orange accent.** Logo & hero badge are blue; orange is used for section-divider banners + CTA buttons. The brief's recommended palette already exists. |
| Title tag generic | Real title is keyword-bearing (above) |
| "Probably not responsive" on mobile | **It is responsive** — hamburger nav, clean stacking. Just plain, not broken. |
| "Video that doesn't work" | A video/image hero region renders; "broken" was unverified. |

### Real visual problems (confirmed by looking)
1. **Weak, disjointed hero.** A small floating "Flexible Food Manufacturing" badge sits over a raw factory photo with **no dark overlay**; the actual headline ("Let Our Food Packaging Company Scale Your Food Business") sits **below** the image on white. No unified hero composition. — **biggest issue.**
2. **Banner monotony.** The page is a vertical stack of full-width solid-color bands (orange "What We Do", orange "How It Works", blue "Our Values"). Heavy, repetitive, no whitespace rhythm.
3. **Chatty copy confirmed.** "So your food business is growing — congrats!" is in the hero body.
4. **No `<h1>`** (see metadata).
5. Hero badge / brand lockup is small and low-contrast against the busy photo.

### Layout inventory (desktop, top → bottom)
1. Sticky-ish top nav + logo + search icon
2. Factory photo with blue "Flexible Food Manufacturing" badge (no overlay)
3. White band: big headline + chatty intro copy + a person photo/video
4. Green-checkmark benefit list
5. Orange "What We Do" banner → 3 service cards (Mixing/Blending · Packaging · Warehousing) w/ blue headers + orange buttons
6. Orange "How It Works" banner
7. Dark "Food Production Facilities and Experience You Can Count On" band + orange CTA
8. Blue "Our Values, Your Success" banner → Efficiency / Flexibility / Quality / Partnership (4 cols)
9. "One Team, Timeless Values"
10. Dark footer w/ orange accents + phone

---

## B. Cases By Source (casesbysource.com) — Verified

### Real page metadata
- **Desktop `<title>`:** `Custom Cases & Case for Sourcing Managers | Cases By Source`
- **Desktop `<h1>`:** `Custom Case Solutions Designed. Manufactured. Delivered.`
- **Mobile `<title>`:** `Cases by Source | Custom & Protective Shipping Cases`
- **Mobile `<h1>`:** `Custom Protective Cases Engineered for Aerospace, Military, and Medical Demands`
- → **CBS serves different hero content/H1 to mobile vs desktop** (segment-aware messaging). Worth noting as an advanced tactic.

### Verified strengths (why it's the reference)
- **Focused hero:** centered, single strong photo + **dark overlay**, rhythm line "Designed. Manufactured. Delivered.", sub "One turnkey partner…", and a single primary CTA ("See how it's done"). Confident and clean.
- **Persistent conversion UI:** sticky **"Request Consultation"** pill + "Shop" in the top-right at all times; **live-chat widget** ("Got any questions? I'm happy to help").
- **"Who We Help" persona model** with real brand testimonials:
  - Product Managers → **Stryker**
  - Lead Engineers → **Harris Products Group**
  - Marketing Managers → **Beats by Dre**
  - Sourcing Managers → **IBM**
- **Strong process section:** "How we build your case" road map.
- **Generous whitespace**, consistent blue, orange reserved for product photography only.
- Brand partners shown: SKB, WAG, Pelican, Nanuk, Zarges, Modi.
- Mobile hero offers two CTAs ("Request a Quote" + "Watch Video").

### Deeper B2B model (more than NPCO needs to copy)
- E-commerce **Shop** + **Sales Login**
- **Government contracting:** GSA discount, Federal ID, SAM UEI, CAGE Code
- HQ: 40 Whitney Road, Mahwah, NJ 07430 · 888-515-5255

### Layout inventory (desktop, top → bottom)
1. Top bar: logo + phone + "Request Consultation" + "Shop"
2. Centered hero over photo w/ overlay + single CTA
3. "Together, we can turn your vision into a reality" — 3-column value props
4. Product imagery band (cases, orange/blue accents)
5. **"Who We Help"** persona section (blue, tabbed)
6. **"How we build your case"** process section
7. Case-study dark cards
8. Blog/resources grid
9. Footer: resources · gov-contract info · social · newsletter

---

## C. Cross-site takeaways for the redesign

**What NPCO already has right (don't "fix"):**
- Correct palette (navy + orange accent)
- Responsive layout
- Keyword-bearing title tag
- Genuinely strong, hard-to-copy trust story (40yr / Ropak / 3rd-gen family / household brands)

**The real gaps to close (high-leverage, not a ground-up rebrand):**
1. **Unified hero** with dark overlay + a single real `<h1>` (currently missing entirely)
2. **Visual rhythm** — replace stacked solid color-bands with whitespace + hierarchy
3. **Surface the heritage** above the fold instead of burying it
4. **Add social proof** — testimonials + client logos (NPCO has household-brand clients; CBS shows how)
5. **Persona messaging** — adopt CBS's "Who We Help" tabbed model
6. **Persistent conversion UI** — sticky "Get a Quote" + optional chat
7. **Promote certifications** into a real section
8. **Add a Stick Packs page/section**

**Borrow from CBS:** structure (centered hero, personas, process timeline, sticky consult CTA, chat) — **not** its look. Skip its e-commerce/government-contracting depth.

---

## E. Experience & Interaction Audit (live, Playwright — 2026-06-22)

> Actually visited and interacted with both sites (hover, scroll, inspect). Detected animation tech, motion, carousels, video, sticky behavior, and performance. Raw data: `docs/experience-audit.json`. Script: `docs/audit-experience.mjs`.

### NPCO (npcoinc.com) — the experience is **static**
- **Tech:** WordPress. Only ~383 DOM elements, 10 scripts. **No animation libraries** (no GSAP, AOS, Swiper, jQuery).
- **Motion:** essentially none — **0 CSS animations**, just 13 transitions + 3 transforms total. No scroll reveals, no carousels, no count-ups.
- **Hero "video":** 1 `<video>`, **not autoplay** — so the hero is effectively a static poster (the "broken video" impression in the brief makes sense).
- **Interactions:** basic hover color-shifts on buttons/links only. Sticky header: yes.
- **Performance:** light + fast (FCP ~1.5s) precisely *because* it does almost nothing.
- **Verdict:** flat, dated, motionless. **Zero microinteraction design = a wide-open opportunity.**

### Cases By Source (casesbysource.com) — the experience is **rich but heavy**
- **Tech:** jQuery + **slick** carousel. ~967 elements, **66 scripts**, 5 iframes.
- **Motion:** **202 transitions + 40 transforms**, **2 autoplay videos**, **1 slick carousel** (personas/testimonials). Scroll-reveal feel, hover effects on product/case cards.
- **Interactions:** persona tabs, testimonial carousel, sticky "Request Consultation" pill, live-chat widget.
- **Performance:** heavy — 66 scripts, third-party bloat; full load was slow (~30s in test) though CDN FCP was fast.
- **Verdict:** polished and alive, but **over-engineered and heavy**. Good *ideas*, bad *weight*.

### Implication for our redesign (the agency angle)
The win is **"more alive than CBS, lighter than NPCO."** With Astro we can deliver tasteful, performant motion — scroll reveals, stat count-ups, hover microinteractions, duotone hero with subtle parallax, a CSS logo marquee — using a **tiny IntersectionObserver + CSS** (no jQuery, no slick, no GSAP). Target: richer experience than both, **Lighthouse ≥ 95**. This is a concrete, demonstrable selling point when we pitch NPCO.

---

## D. Reproduce / re-capture

```bash
node capture.mjs   # writes 8 PNGs to /shots/
```
Viewports: desktop 1440×900, mobile 390×844 (iPhone 13 UA). Both fold + full-page shots per site.
