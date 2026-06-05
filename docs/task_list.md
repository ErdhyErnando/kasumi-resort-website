# Kasumi Resort Website — Implementation Task List

> **Last audited:** 2026-06-05 (updated after villa transitions + meta + GSAP revisit fix on `feat/update-villa-data`)
>
> **Build status:** `pnpm build` succeeds — 43 static pages (ID + EN), sitemap + RSS generated.
>
> **Architecture note:** Pages use `src/pages/[locale]/` with translations in `src/i18n/ui.ts`. Villa & camping data live in `src/lib/villas.ts` and `src/lib/camping.ts` (not markdown content collections — those schemas exist but have no files).

---

## Progress Summary

| Area | Status | Notes |
|------|--------|-------|
| Project setup & design system | ✅ Done | Astro 5, Tailwind 4, GSAP, i18n routing |
| Homepage (7 sections) | ✅ Done | Including sticky ActivitySection |
| Villa pages | 🟡 Mostly done | 7/10 villas; card→hero morph + per-villa meta done; no related-villas |
| Camping pages | 🟡 Partial | Index is full (tab UI); **detail routes are stubs** |
| Gallery & Contact | 🟡 Mostly done | Gallery uses SVG placeholders + 1 real photo |
| Blog | 🟡 Mostly done | 3 posts/locale, filters work; no TOC or related posts |
| i18n | ✅ Done | ID/EN toggle, `[locale]` routes, `ui.ts` translations |
| Animations | 🟡 Mostly done | Villa morph transitions; GSAP skips re-entrance on villa index return |
| SEO & assets | 🔴 Gaps | **Missing OG image, robots.txt, JSON-LD, hreflang; camping/facility images** |

### Pre-publish blockers (fix before review deploy)

1. **Create `public/og-image.jpg`** — referenced in `BaseLayout.astro` but file does not exist (1200×630 recommended).
2. **Add camping photos** — `public/images/camping/` folder is missing; 5 spots × ~5 images referenced in `camping.ts`.
3. **Add facility photos** — `facility-bathroom.webp`, `facility-electricity.webp`, `facility-wifi.webp` missing from `public/images/`.
4. **Replace gallery placeholders** — `public/images/gallery/p1–p4.svg` still used on `/gallery`.
5. **Add `public/robots.txt`** — sitemap exists (`sitemap-index.xml`) but no robots file.
6. **Camping detail pages** — `/[locale]/camping/[id]` renders stub text only; index page covers content via tabs, but direct links will 404-quality UX.
7. **Per-page meta descriptions** — camping, contact, gallery pages still fall back to site-wide default (villa detail pages now use `shortDescription` per locale).

---

## Sprint 0 — Project Setup & Baseline

- [x] Initialize Astro 5.x project with pnpm
- [x] Configure `astro.config.mjs`:
  - [x] `site` URL (`https://kasumiresorts.com`)
  - [x] i18n routing (`defaultLocale: "id"`, `locales: ["id","en"]`, `prefixDefaultLocale: true`)
  - [x] `@astrojs/sitemap` integration
  - [x] Output target (static)
  - [ ] Cloudflare adapter (not needed for static deploy)
- [x] Install dependencies:
  - [x] React 19
  - [x] Tailwind v4
  - [x] GSAP + ScrollTrigger + SplitText
  - [x] Lucide (icons — used sparingly; inline SVGs in Navbar)
  - [x] Embla carousel (used in `Carousel.tsx` / IntroSection)
  - [ ] Lightbox library (installed but **not integrated** anywhere)
- [x] Set up base folders per PRD
- [x] Add `src/content.config.ts` and baseline collections
- [x] Add `src/styles/global.css` + `animations.css`
- [ ] Add lint/format (not configured)

---

## Sprint 1 — Design System + Base Layout

- [x] Implement CSS variables for brand colors + typography tokens
- [x] Configure fonts (Google Fonts: Libre Baskerville + DM Sans)
- [x] Tailwind theme extensions for brand tokens
- [x] Build `BaseLayout.astro`:
  - [x] Common `<head>` meta
  - [x] `<ClientRouter />` (astro:transitions)
  - [x] Site-wide SEO defaults
  - [x] Global styles import
  - [x] `astro:before-swap` path tracking for GSAP revisit logic
- [x] Implement `Navbar.astro`:
  - [x] Sticky with transparency on hero
  - [x] CTA button
  - [x] Mobile hamburger overlay (inline in Navbar; `MobileNav.tsx` exists but unused)
- [x] Implement `Footer.astro`:
  - [x] Curtain effect structure
  - [x] ID/EN language switcher (working link, not placeholder)
- [x] Create core UI components:
  - [x] `Button.astro`
  - [x] `Card.astro`
  - [x] `Badge.astro`
  - [x] `SectionHeader.astro`
  - [x] `WhatsAppButton.astro`

---

## Sprint 2 — Data & Content Layer

- [x] Define content collections:
  - [x] `blog` markdown collection with Zod schema
  - [x] `villas` collection schema (defined in `content.config.ts`)
  - [x] `camping` collection schema (defined in `content.config.ts`)
  - [ ] **Populate** villas/camping collections — data currently in TS libs instead; build warns about empty `src/content/villas` and `src/content/camping`
- [x] Add example content:
  - [x] 3 blog posts per locale (6 total)
  - [x] 7 villas in `src/lib/villas.ts` (PRD specifies 10 — **3 missing**)
  - [x] 5 camping spots in `src/lib/camping.ts` (PRD specified 2 types; implementation expanded)
- [x] Add `src/lib/constants.ts` with:
  - [x] site config (name, url, contact, social)
  - [x] nav structure
- [x] Add `src/lib/whatsapp.ts` helper
- [ ] Image assets — **partial** (see Assets section below)

---

## Sprint 3 — Homepage (Landing Page)

- [x] Build `HeroSection.astro`
  - [x] Image with parallax hook (GSAP in component script)
  - [x] Headline animation hook
- [x] Build `IntroSection.astro`
  - [x] Large text (bilingual via `ui.ts`)
  - [x] Carousel island (Embla `Carousel.tsx`)
- [x] Build `ActivitySection.astro`
  - [x] Sticky left panel
  - [x] Cards list right
- [x] Build `FacilitiesSection.astro`
  - [x] 3-column cards
  - [ ] Facility images present on disk (**missing** — see Assets)
- [x] Build `LocationSection.astro`
  - [x] Dark card + map iframe
- [x] Build `CTASection.astro`
- [x] Implement Footer curtain reveal
- [x] Compose sections in `src/pages/[locale]/index.astro`

---

## Sprint 4 — Villas Pages

- [x] Create `src/pages/[locale]/villa/index.astro`:
  - [x] Grid listing (7 villas)
  - [x] Card hover + `transition:name` (`villa-{id}-image` on card images; hover lift/scale)
- [x] Create `src/pages/[locale]/villa/[id].astro`:
  - [x] Hero image with matching `transition:name`
  - [x] Two-column layout with sticky sidebar
  - [x] Specs grid + gallery
  - [x] Per-villa `description` meta tag (`shortDescription[locale]` → `BaseLayout`)
  - [ ] Related villas section
  - [ ] Per-villa OG image (`image={villa.heroImage}` on `BaseLayout` — optional enhancement)
- [ ] Implement `VillaCard.astro` (cards are inline in index page)
- [ ] Add remaining 3 villas (PRD: 10 total)

**Current villas:** Oka, Sora, Tani, Gake, Koeda, Kawa, Hana

---

## Sprint 5 — Camping Pages

- [x] Create `src/pages/[locale]/camping/index.astro`:
  - [x] Tabbed camping explorer (5 spots — exceeds PRD's 2 hero cards, different UX)
  - [ ] Camping hero images on disk (**entire `/images/camping/` folder missing**)
- [ ] Create `src/pages/[locale]/camping/[id].astro`:
  - [ ] Detail layout mirroring villa detail — **stub only** ("Content akan ditampilkan di sini")
  - [ ] Specs for plots/tents/fire-pit
- [ ] Implement `CampingCard.astro`

**Current camping spots:** forest-riverside, mountain-view, spot-cemara, spot-cendana, spot-damar

---

## Sprint 6 — Gallery + Contact

- [x] Build `src/pages/[locale]/gallery.astro`:
  - [x] Floating images layout + rotation script
  - [x] IG CTA + YouTube guest video embeds
  - [ ] Replace SVG placeholders with real photos
- [x] Build `src/pages/[locale]/contact.astro`:
  - [x] Two-column layout
  - [x] Large map iframe
  - [x] Directions block
  - [ ] Per-page meta description

---

## Sprint 7 — Blog

- [x] Create `src/pages/[locale]/blog/index.astro`
  - [x] Filter chips UI (client-side)
  - [x] Blog card list
- [x] Create `src/pages/[locale]/blog/[...slug].astro`
  - [x] Prose layout + hero image
  - [ ] TOC
  - [ ] Related posts
- [x] Per-post SEO meta (title + description via `BlogPost.astro`)
- [ ] Blog hero images — all posts use `/images/blog/placeholder.svg`
- [ ] Article JSON-LD (`BlogPosting` schema)

---

## Sprint 8 — i18n + Language Switcher

- [x] Configure localized routes (`src/pages/[locale]/` + redirect at `/`)
- [x] Add translation utilities (`src/i18n/ui.ts`, `src/i18n/utils.ts`)
- [x] Language picker in navbar + footer (link-based toggle)
- [x] Bilingual content for key sections
- [x] Locale-aware link generation (`getLocalizedPath`)
- [ ] `hreflang` alternate links in `<head>` (important for bilingual SEO)
- [ ] Localized 404 page (currently hardcoded ID redirect to `/id/`)

---

## Sprint 9 — Animations + View Transitions

- [x] Add GSAP init/cleanup in `src/lib/gsap.ts`
- [x] Hook `astro:page-load` to re-init GSAP (BaseLayout + HeroSection)
- [x] Hook `astro:before-swap` to track outgoing path (`trackNavigationPath`)
- [x] Skip villa index entrance animations when returning from a villa detail page
- [x] `transition:persist` on Navbar
- [x] Add `transition:name` on villa card → detail hero morph
- [x] Add `transition:animate="fade"` on villa detail section
- [ ] Add `transition:animate="fade"` on other pages where needed
- [ ] Verify no ghost pinning on back/forward navigation (villa round-trip manually verified OK)
- [ ] Integrate lightbox for villa/camping galleries

---

## Sprint 10 — SEO, Performance, QA

- [ ] Verify per-page meta tags (homepage, blog, and **villa detail** have custom descriptions; camping/contact/gallery still use default)
- [x] Add OG + Twitter tags in `BaseLayout.astro`
- [ ] **OG image file** — `public/og-image.jpg` referenced but **does not exist**
- [ ] Add JSON-LD (`LocalBusiness` on homepage/contact per PRD; `LodgingBusiness` for villas)
- [x] Sitemap (`sitemap-index.xml` generated at build)
- [ ] `robots.txt` (missing — should point to sitemap)
- [x] RSS feed (`src/pages/rss.xml.js` → `/rss.xml`)
- [ ] Run Lighthouse checks
- [ ] Fix accessibility issues (alt text audit, contrast)
- [x] Validate build with `pnpm build`

---

## Assets Checklist (SEO / Crawlers / Review)

### Must create before publish

| Asset | Path | Size / spec | Purpose |
|-------|------|-------------|---------|
| **OG image** | `public/og-image.jpg` | 1200×630 px | Facebook, WhatsApp, Twitter/X link previews. Currently 404s. |
| **robots.txt** | `public/robots.txt` | — | Allow crawlers + reference sitemap URL |
| **Camping photos** | `public/images/camping/*.webp` | ~25 files referenced | Forest Riverside, Mountain View, Spot Cemara/Cendana/Damar (5 each) |
| **Facility photos** | `public/images/facility-*.webp` | 3 files | Bathroom, electricity, Wi-Fi cards on homepage |
| **Gallery photos** | `public/images/gallery/` | Replace p1–p4.svg | Real resort moments + camping shots |
| **Blog hero images** | `public/images/blog/` | 3 unique per topic | Replace `placeholder.svg` on all 6 posts |

### Recommended (better SEO & brand)

| Asset | Path | Notes |
|-------|------|-------|
| **Favicon PNG** | `public/favicon-32x32.png`, `apple-touch-icon.png` | SVG exists; add PNG for older crawlers / iOS home screen |
| **Logo SVG** | `public/logo.svg` | Navbar currently uses text-only `SITE_NAME` |
| **Per-page OG images** | e.g. villa hero webp | Pass `image` prop to `BaseLayout` on villa/blog pages for richer shares |
| **Web manifest** | `public/site.webmanifest` | PWA-style install + theme color for mobile |
| **Structured data** | inline JSON-LD in layouts | `LocalBusiness`, `LodgingBusiness`, `BlogPosting` |
| **hreflang tags** | `BaseLayout.astro` | `<link rel="alternate" hreflang="id" …>` + `en` + `x-default` |

### Already present ✅

- `public/favicon.svg`
- `public/images/hero.webp`
- `public/images/intro-1.webp`, `intro-2.webp`, `intro-3.webp`
- `public/images/activity-atv.webp`, `activity-campfire.webp`, `activity-trekking.webp`
- `public/images/villa/` — 34 webp files (7 villas × ~5 photos)
- `public/images/gallery/camping-1.webp` (1 real gallery photo)

---

## Final Acceptance Checklist

- [ ] Responsive across 375/768/1280/1920 (manual QA needed)
- [ ] No console errors in production build (manual QA needed)
- [x] View transitions work on supported browsers (villa card→hero morph + back navigation)
- [x] GSAP initializes on each page load
- [x] GSAP skips villa index re-entrance when returning from villa detail
- [ ] All images have alt text (villa/camping OK; some decorative gallery alts generic)
- [ ] Broken image audit — camping + facility images will 404 until added
- [ ] Performance ≥ 90, Accessibility ≥ 95, SEO = 100 (not measured yet)
- [ ] Privacy policy page (footer link is non-functional placeholder text)

---

## Suggested Review Test Plan

1. `pnpm dev` → browse `/id/` and `/en/` for all nav links
2. Villa index + each of 7 detail pages (images, WhatsApp CTA, sticky sidebar)
3. **Villa morph:** `/id/villa/` → click a card → image morphs to hero; browser back → cards appear instantly (no stagger replay)
4. **Villa meta:** view source on `/id/villa/oka/` and `/en/villa/oka/` — confirm locale-specific `shortDescription` in meta/OG tags
5. Camping index tabs (expect broken hero images until assets added)
6. `/id/camping/forest-riverside` — confirm stub state (decide: build detail or redirect to index)
7. Gallery floating layout + YouTube embeds
8. Contact map + directions
9. Blog filters + open each post
10. Language toggle on every page type
11. Share a URL in WhatsApp/Telegram — verify OG preview (will fail until `og-image.jpg` exists)
12. `pnpm build && pnpm preview` — check `/sitemap-index.xml`, `/rss.xml`, `/robots.txt`
