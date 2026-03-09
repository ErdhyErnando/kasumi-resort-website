# Kasumi Resort Website — Implementation Task List (Sprint Breakdown)

> Goal: Build Astro 5.x marketing site per PRD, aligned with latest Astro docs (ClientRouter, Content Layer, i18n routing, astro:assets).

---

## Sprint 0 — Project Setup & Baseline

- [x] Initialize Astro 5.x project with pnpm
- [x] Configure `astro.config.mjs`:
  - [x] `site` URL
  - [x] i18n routing (`defaultLocale: "id"`, `locales: ["id","en"]`, `routing.prefixDefaultLocale` decision)
  - [x] `@astrojs/sitemap` integration
  - [x] Output target (static) + Cloudflare adapter (if needed)
- [x] Install dependencies:
  - [x] React 19
  - [x] Tailwind v4
  - [x] GSAP + ScrollTrigger + SplitText
  - [x] Lucide (icons)
  - [x] Embla carousel
  - [x] Lightbox library
- [x] Set up base folders per PRD
- [x] Add `src/content.config.ts` and baseline collections
- [x] Add `src/styles/global.css` + `animations.css`
- [x] Add lint/format (optional, recommended)

---

## Sprint 1 — Design System + Base Layout

- [x] Implement CSS variables for brand colors + typography tokens
- [x] Configure fonts (Astro font optimization or self-hosted)
- [x] Tailwind theme extensions for brand tokens
- [x] Build `BaseLayout.astro`:
  - [x] Common `<head>` meta
  - [x] `<ClientRouter />` (astro:transitions)
  - [x] Site-wide SEO defaults
  - [x] Global styles import
- [x] Implement `Navbar.astro`:
  - [x] Sticky with transparency on hero
  - [x] CTA button
  - [x] Mobile toggle placeholder
- [x] Implement `Footer.astro`:
  - [x] Curtain effect structure
  - [x] ID/EN language switcher placeholder
- [x] Create core UI components:
  - [x] `Button.astro`
  - [x] `Card.astro`
  - [x] `Badge.astro`
  - [x] `SectionHeader.astro`

---

## Sprint 2 — Data & Content Layer

- [x] Define content collections:
  - [x] `blog` markdown collection with Zod schema
  - [ ] `villas` data source (md or ts)
  - [ ] `camping` data source (md or ts)
- [ ] Add example content:
  - [ ] 2-3 blog posts
  - [ ] 2 villas + 1 camping for layout testing
- [ ] Add `src/lib/constants.ts` with:
  - [ ] site config (name, url, contact, social)
  - [ ] nav structure
- [ ] Add `src/lib/whatsapp.ts` helper
- [ ] Add image assets placeholders

---

## Sprint 3 — Homepage (Landing Page)

- [x] Build `HeroSection.astro`
  - [x] Image with parallax hook
  - [x] Headline animation hook
- [x] Build `IntroSection.astro`
  - [x] Large text (bilingual)
  - [x] Carousel island
- [x] Build `ActivitySection.astro`
  - [ ] Sticky left panel
  - [ ] Cards list right
- [x] Build `FacilitiesSection.astro`
  - [x] 3-column cards
- [x] Build `LocationSection.astro`
  - [x] Dark card + map iframe
- [x] Build `CTASection.astro`
- [x] Implement Footer curtain reveal
- [x] Compose sections in `src/pages/index.astro`

---

## Sprint 4 — Villas Pages

- [ ] Create `src/pages/villa/index.astro`:
  - [ ] Grid listing of 10 villas
  - [ ] Card hover + transition:name
- [ ] Create `src/pages/villa/[id].astro`:
  - [ ] Hero image with matching transition:name
  - [ ] Two-column layout with sticky sidebar
  - [ ] Specs grid + gallery
  - [ ] Related villas section
- [ ] Implement `VillaCard.astro`

---

## Sprint 5 — Camping Pages

- [ ] Create `src/pages/camping/index.astro`:
  - [ ] Two hero cards (Forest & Riverside, Mountain View)
- [ ] Create `src/pages/camping/[id].astro`:
  - [ ] Detail layout mirroring villa detail
  - [ ] Specs for plots/tents/fire-pit
- [ ] Implement `CampingCard.astro`

---

## Sprint 6 — Gallery + Contact

- [ ] Build `src/pages/gallery.astro`:
  - [ ] Floating images layout
  - [ ] IG CTA
- [ ] Build `src/pages/contact.astro`:
  - [ ] Two-column layout
  - [ ] Large map iframe
  - [ ] Directions block

---

## Sprint 7 — Blog

- [ ] Create `src/pages/blog/index.astro`
  - [ ] Filter chips UI
  - [ ] Blog card list
- [ ] Create `src/pages/blog/[slug].astro`
  - [ ] Prose layout + hero image
  - [ ] TOC
  - [ ] Related posts
- [ ] Add SEO meta + structured data

---

## Sprint 8 — i18n + Language Switcher

- [ ] Configure localized routes (`/en/` folder)
- [ ] Add translation utilities (`src/i18n/*`)
- [ ] Implement `LanguageToggle.tsx` and language picker in footer
- [ ] Ensure bilingual content for key sections
- [ ] Confirm link generation uses locale-aware helpers

---

## Sprint 9 — Animations + View Transitions

- [ ] Add GSAP init/cleanup in `src/lib/gsap.ts`
- [ ] Hook `astro:page-load` to re-init GSAP
- [ ] Add `transition:name` on shared elements
- [ ] Add `transition:animate="fade"` fallback where needed
- [ ] Verify no ghost pinning on back/forward navigation

---

## Sprint 10 — SEO, Performance, QA

- [ ] Verify per-page meta tags
- [ ] Add OG tags + JSON-LD
- [ ] Confirm sitemap + robots.txt
- [ ] Run Lighthouse checks
- [ ] Fix accessibility issues (alt text, contrast)
- [ ] Validate build with `pnpm build`

---

## Final Acceptance Checklist

- [ ] Responsive across 375/768/1280/1920
- [ ] No console errors in production build
- [ ] View transitions work on supported browsers
- [ ] GSAP initializes on each page load
- [ ] All images have alt text
- [ ] Performance ≥ 90, Accessibility ≥ 95, SEO = 100
