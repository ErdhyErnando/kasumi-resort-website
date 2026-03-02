# Kasumi Resort Website - Product Requirement Document

## 1. Overview
Kasumi Resort is a villa and camping ground located within 
Gunung Halimun Salak National Park (TNGHS) area in Cidahu, Sukabumi, West Java, Indonesia.

This website is a marketing-first platform. The primary goal is
to inspire potential visitors, showcase accomodations and activities and funnel directly into WhatsApp booking conversation.
no booking engine reservation are handled in whatsapp.

### 1.1 business goals
- drive direct bookings via WhatsApp
- establish online brand identity - modern, earty nature retreat
- rank organically for search terms like 'villa camping sukabumi', 'camping sukabumi', 'villa sukabumi', 'camping west java', 'villa west java', 'camping near jakarta'
- source of truth for pricing and information
- support bilingual visitors using astro i18n (bahasa indonesia primary, english secondary)

### 1.2 target audience
- couples, families, from bogor, jakarta seeking weekend escape
- outdoor enthusiasts interested in trekking, ATV and forest activities
- corporate or school groups looking for a unique retreat experience

## 2. Brand & Design System
### 2.1 Brand Identity
brand name: Kasumi Resort
tagline: enjoy living
tone: calm, warm, modern, natural, inviting
personality: premium yet approachable, nature-forward

### 2.2 Color Palette
| Role | Hex | token name |
| ------|-----|------------|
| primary | #2c5f2d | --color-primary | 
| secondary | #97bc62 | --color-secondary |
| accent | #f2c14e | --color-accent |
| highlight/BG | #fff8ec | --color-highlight-bg |
| Dark Text | #2b2b2b | --color-dark|

### 2.3 Typography
| Role | Font | token name |
| ------|-----|------------|
| heading | Libre Baskerville | --font-heading |
| body | DM Sans | --font-body |

use multiple weight and sizes depending on the context

### 2.4 spacing & layout 
- base unit 8px (0.5rem)
- section padding 40px-80px (py-10 - py-16 in Tailwind)
- breathing room is a core design principle

### 2.5 motion & animation principles
- philosophy: purposeful, unhurried, nature-inspired
- text reveals: words or line split and fade up on-scroll. use GSAP SplitText
- scroll-triggered entrances: sections fade + translate-y up as they enter viewport
- sticky-elements: header is sticky and the activity section left panel sticks while right content scrolls
- page transitions: astro view transitions api for route change. villa card image morphs into detail page hero via shared transition:name
- Hero: subtle parallax on bg image. headline text animated on load
- GSAP scroll trigger must be re-killed and re-initialized on each astro page transition.

## 3. Site Architecture & Routing
### 3.1 Route map
 | property | value/spec |
 | ------|---------------|
 | /      | landing page |
 | /villas | villas index - grid of all 10 villas |
 | /villa/[villaId] | villa detail page individual villa info & cta |
 | /campings |  camping index - 2 camping ground types |
 | /camping/[campingId] | camping detail page individual camping info & cta |
 | /gallery | full floating photo gallery with text and floating images |
 | /contact | contact page |
 | /blog | blog index - list of articles with heading and filter options |
 | /blog/[blogId] | blog post - astro content collextion mdx |
 | /404 | custom 404 page |

### 3.2 navigation structure
sticky navbar at top, on scroll down, backgroun transparent, subtle blur frosted glass effect. logo left, nav link center, cta button (Booking)
| property | value/spec |
| ------|---------------|
| logo | top-left, svg, links to /|
| nav links | villa, camping, gallery, contact, blog |
| cta button | "book now", pil shape, --color-accent, highlight text |
| mobil nav | hamburger menu, full screen overlay , same links + cta |
| scroll behavior | transparent on hero, sticky on scroll |

## 4. page & component specifications
### 4.1 landing page (/) - marketing homepage 7 sections
Section 1 - HeroSection
Full-viewport hero with a dramatic landscape photograph. The tagline overlays the image middle-right area in baskervilla font.

 |Property |	Value / Spec |
 | ------|----------------|
 | Layout | 	Full viewport height (100svh). Background: full-bleed image with subtle parallax on scroll. |
 | Background | High-quality photo of villa/forest. object-fit: cover. Will swap when final photos available. |
 | Headline | "Leave the city / Wake up in the mist" — two lines, --font-heading , color: --color-highlight (#FFF8EC), large (clamp 48px–96px) |
| Navbar Overlap |	Navbar is transparent, sits on top of hero. No gap.
GSAP Animation	On load: headline lines animate in via staggered opacity + translateY. Parallax: background-position shifts on ScrollTrigger. |

Section 2 - IntroSection
A brief orientation section that contextualizes the resort. Large centered intro text + a horizontal scrolling or 3-photo image carousel.
 |Property |	Value / Spec |
 | -------|---------------|
 | Layout | Full-width section. bg: --color-highlight. Two sub-sections: text above, carousel below (or side-by-side on desktop).|
 | Intro Text |  "villa di tengah hutan camping ground dengan pemandangan pegunungan sukabumi" — large, centered, earthy tone. need to be bilingual.|
 | image carousel |3 featured photos. Could be a CSS scroll-snap horizontal strip or Embla/Swiper React component. Photos should slightly overflow their container for editorial feel. |
 | photo sizing | large: approx 600x400px each. landscape oriented, rounded corder (border radius 16-20px)
 
 Section 3 - ActivitySection 
 Showcases the 3 main activities available at Kasumi: ATV, Api Unggun (Campfire), and Trekking. Sticky left panel with section title, scrollable right column of activity cards

 |Property |	Value / Spec |
 | ------|---------------|
 | Layout |Two-column desktop layout. Left col (sticky): section label + title. Right col (scrollable): activity cards stacked vertically.|
 | left panel |"Aktivitas Seru untuk kamu dan Keluarga" — sticks while right content scrolls. bg: --color-secondary (#97BC62). Rounded left corners.|
 | activity cards | Each card: horizontal layout — image (square, ~200x200px, rounded) on left, name + short description on right. |
 | background | color-secondary, rounded corner on whole section block |
 | sticky | css position: sticky on left panel |


Section 4 - FacilitiesSection
Reassures guests about comfort and amenities. Headline + 3-column card grid.

 |Property |	Value / Spec |
 | ------|---------------|
 | Layout |Centered headline + subtitle, then 3-column card grid. bg: --color-highlight.|
 | Headline |"Nature Outside. Comfort Inside" |
 | subtitle | "Just because you're surrounded by forest and fresh mountain air doesn't mean you leave comfort behind. Kasumi Resort offers clean bathrooms, reliable electricity, Wi-Fi access"|
 | cards | Each card: image placeholder (will be replaced with real facility photos), icon, facility name, 1-2 line description. Card bg: white, subtle shadow, rounded.|
 | facility examples| Clean bathrooms & hot water,  Reliable electricity 24hr , Wi-Fi access , Parking area |
 | animation | cards stagger fade-in on scroll (0.15s delay) |
 
 Section 5 - LocationSection
 Dark-themed card that gives the resort location context. Embedded Google Map on left, text content on right.
 
 |Property |	Value / Spec |
 | ------|---------------|
 | Layout |Single dark card (rounded, bg: #2b2b2b). Two-column inside: map embed left, text right.|
 | map |Google Maps iframe embed. Coordinates: TNGHS Cidahu, Sukabumi, Jawa Barat 43358. Satellite or terrain view preferred. or Kasumi Resort's actual coordinates |
 | headline |"Close to the city / Far from noise" — two lines, display serif, --color-highlight text |
 | distance copy|2 hours from Jakarta / 1.5 hours from Bogor|
 | address link |"TNGHS Cidahu, Sukabumi, Jawa Barat 43358" — styled as a clickable link opening Google Maps in a new tab|
 | animation |Section scrolls into view with a fade + slight scale-up. Map iframe lazy-loads.|

Section 6 - CTASection
Pre-footer call-to-action. Large bold text + single prominent button
 
|Property |	Value / Spec |
 | ------|---------------|
 | Layout |Centered, full-width. bg: --color-highlight or white. Generous vertical padding.|
 | headline |"Ready To Leave The City Behind?" — very large display type, centered|
 | button |"Booking" — large pill button, bg: --color-accent (#F2C14E), dark text, bold. Links to WhatsApp.|
 | phone number | +62 855-9118-9388 |
 | animation |headline reveal on scroll|
 
 Section 7 - Footer
 The footer appears to slide up from beneath the previous section, creating a curtain-reveal effect. Lower z-index than all other sections so it peeks from below as user scrolls to the end.
 
 |Property |	Value / Spec |
 | ------|---------------|
 | Layout |4-column footer (or 3 on mobile). bg: --color-primary (#2C5F2D). Text: --color-highlight.|
 | col1: contact |Label: "contact" | info@kasumiresorts.com|
 | col2: follow |Label: "follow"  Instagram , TikTok, Blog — each a link|
 | col3 logo & address|Kasumi logo (light version) + "TNGHS Cidahu, Sukabumi, Jawa Barat 43358"|
 | bottom bar |"Privacy Policy" left | "2026 Kasumi Resorts" center | "credit" + "ID/EN" language toggle right|
 | curtain effect | Footer has position: sticky; bottom: 0; z-index: 0. All other sections have z-index: 1+. As user scrolls to end, footer is revealed from beneath. |

### 4.2 Villa index(/villa) - grid listing all 10 villas

 |Property |	Value / Spec |
 | ------|---------------|
 | Layout |Intro paragraph + responsive card grid (3 col desktop, 2 col tablet, 1 col mobile)|
 |villa card | Image (16:9 aspect ratio, object-fit cover, rounded top corners) , Villa name , Short tagline/description (1 line) , Starting price (e.g. "Mulai Rp 800.000/malam") , "Lihat Detail" button or card is fully clickable|
 |10 villas |Villa Hana , Villa Mori , Villa Yama , Villa Kawa , Villa Tani , Villa Oka , Villa Gake , Villa Taki , Villa Koeda , Villa Sora|
 |view transition|Each card image has transition:name="villa-{id}-image". On navigate, morphs into detail hero.|
 | animation|Cards stagger fade-in on load. Hover: card lifts (translateY -4px) + shadow deepens.|
 | filter | filter by capacity or price range. V2 scope.|
 
 ### 4.3 Villa detail(/villa/{id}) - detailed view of a single villa

 |Property |	Value / Spec |
 | ------|---------------|
 | Layout |Full-width large image (60–70vh). transition:name="villa-{id}-image" to receive morph from listing card.|
 |content layout |Two-column: main content left (60%), sticky sidebar right (40%) on desktop. Single column on mobile.|
 |Main: Overview|Villa name (H1) | Tagline | Description paragraphs|
 |Main: Specs grid| Capacity (persons) | Bedrooms | Bathrooms | Area (m²) — icon + label grid|
 | Main: Photo Gallery|Scrollable photo strip or lightbox grid — multiple villa photos|
 | sidebar:pricing | Price per night (Rp) | Weekday vs Weekend pricing if different|
 | sidebar:cta|Large "Book via WhatsApp" button — --color-accent |
 | sidebar:sticky|Sidebar sticks on scroll using CSS position: sticky or ScrollTrigger pin|
 | breadcrumb | Home > Villa > Villa Hana — for SEO and navigation |
 | related villas |  Bottom section: "Lihat Villa Lainnya" — 3 random or curated villa cards|

 ### 4.4 Camping Index (/camping) - overview of camping ground types

 |Property |	Value / Spec |
 | ------|---------------|
 | Layout |Two large feature cards side by side (desktop) or stacked (mobile)|
 |Camping type 1|"Forest & Riverside" — camping near river in dense forest|
 |Camping type 2|"Mountain View" — camping with open mountain panorama|
 |card content | Full-bleed background image | Type name | Short evocative description | "Explore" button → /camping/[id] |
 | animation | Cards enter with subtle parallax on their background images. Hover: scale-up image slightly. |
 
 ### 4.5 Camping Detail (/camping/[id]) - individual camping type detail

same layout as villa detail - hero image, content + sidebar, specs, amenties, cta.
key differences:
- specs: number of plots/spot, tent types, fire pit availability

TODO
### 4.6 Gallery (/gallery) floating photo gallery

|Property |	Value / Spec |
 | ------|---------------|
 | Layout |2 section of floating images with text in the middle, first text: 'moments at kasumi' sorrounded by floating images next is 'camping & community' also floatin images, or ig post or youtube videos floating|
 | text before cta | follow us and tas us @kasumi_resort to be featured! linking to ig, an ig icon appear when hovering over the link |
 | cta | Ready to Create Your Own Moments? ; reserve today link connect to whatsapp |


### 4.7 Contact (/contact) - how to find and reach kasumi

|Property |	Value / Spec |
 | ------|---------------|
 | Layout |Two-column: info left, large embedded map right. Mobile: stacked.|
 |header | lets plan your stay, font heading |
 | description | have questions about villa camping area, or availability? we're here to help! |
 |info | address, email, phone, whatsapp |
 |map |Large Google Maps iframe embed. Coordinates for TNGHS Cidahu, Sukabumi.|
 | directions |"How to get here" section: brief driving directions from Jakarta and Bogor |
| social links |  Instagram | TikTok with icons|

### 4.8 Blog (/blog) - content marketing via astro content collections

|Property |	Value / Spec |
 | ------|---------------|
 | Content system | Astro content collections (v5 Content Layer). Use src/content.config.ts and src/content/blog/*.md |
 | frontmatter schema | title, description, image, author, date, category, tags[], heroImage |
 |blog index | header text: Stories, tips & nature information, filter/topics pil shaped color secondary; list of blog posts with thumbnails, title and description; max 4-5 with more button to render more posts|
 | blog card |Thumbnail image | Category tag | Title | Excerpt | Date | "Baca Selengkapnya" link|
 |blog post layout | Prose-optimized layout. Max width ~720px. Large hero image. Author + date. Table of contents. Related posts at bottom. put a bit of kasumi ads as small divs between paragraphs max:2|
 | SEO | auto generate og meta, canonical url, article structured data from fontmatter |
 | Categories |tips berkemah, wisata sukabumi/jawabarat, update resort, nature info|
 
 ## 5. Technical Architecture
 
 ### 5.1 Core Stack
 - Framework:Astro 5.x static site generator, island architecture
 - UI components: react 19 for interactive islands (carousel, mobile nav)
 - styling: tailwindcss v4, custom css for brand tokens
 - animation: GSAP, scrollTrigger + SplitText plugins
 - page transitions: Astro View Transitions (astro:transitions) with <ClientRouter /> and transition:* directives
 - icons: lucide react/ lucide-animate
 - maps: google maps embed api (iframe) no js sdk needed 
 - image optimization: Astro <Image /> from astro:assets (optimized output + required alt)
 - fonts: google fonts via astro font optimization
 - content: Astro content collections (v5 Content Layer) with src/content.config.ts + Zod schema
 - deployment: cloudflare pages/workers
 - analytics: cloudflare analytics
 - package manager: pnpm

 ### 5.2 Project Structure
 ```
 kasumi-resort/
 src/
   components/
     layout/       — Navbar.astro, Footer.astro
     sections/     — HeroSection.astro, IntroSection.astro, ...
     ui/           — Button.astro, Card.astro, Badge.astro
     react/        — Carousel.tsx, Lightbox.tsx, MobileNav.tsx
   content/
     blog/         — *.md files for blog posts
     villas/       — *.md or .ts data files for each villa
     camping/      — *.md or .ts data files for camping types
   content.config.ts — content collections config (Zod schema + loaders)
   layouts/
     BaseLayout.astro   — head, meta, fonts, ClientRouter
     BlogPost.astro     — blog post wrapper
   pages/
     index.astro        — Landing page
     villa/
       index.astro      — Villa listing
       [id].astro       — Villa detail
     camping/
       index.astro      — Camping listing
       [id].astro       — Camping detail
     gallery.astro
     contact.astro
     blog/
       index.astro
       [slug].astro
   styles/
     global.css         — CSS custom properties, base resets
     animations.css     — keyframe animations
   lib/
     gsap.ts            — GSAP init + ScrollTrigger refresh on page transition
     whatsapp.ts        — WhatsApp link generator util
     constants.ts       — Site config, contact info, nav links
 public/
   images/              — Static assets (logo, og-image)
   fonts/               — Self-hosted font files (optional)
 astro.config.mjs
 tailwind.config.mjs
 tsconfig.json 
 ```
### 5.3 GSAP + view transitions
GSAP ScrollTrigger and Astro View Transitions must be coordinated carefully.
•	Add <ClientRouter /> from astro:transitions to BaseLayout.astro <head>
•	In src/lib/gsap.ts, export an initAnimations() function that kills all existing ScrollTriggers and re-initializes them
•	In BaseLayout.astro, add a script tag: document.addEventListener("astro:page-load", initAnimations)
•	For View Transition morphing: add transition:name="villa-{id}-image" to card images and detail page hero images with matching names
•	Use transition:animate="fade" as fallback for sections without a named morph target
•	Test: navigate back/forward — ensure ScrollTrigger does not ghost-pin from previous page

### 5.4 Data Architecture 
Villa and camping data is defined as static TypeScript objects or Astro Content Collection entries 
| Property | Value/ spec |
|----------|-------------|
|villa data fields|id, name, tagline, description, heroImage, images[], capacity, bedrooms, bathrooms, price, amenities[]|
|camping data fields|id, name, type, tagline, description, heroImage, images[], spots, price adults, price children, amenities[]|
|blog frontmatter| title, description, pubDate, author, category, tags[], heroImage|
| site config | siteName, siteUrl, contactEmail, whatsappNumber, socialLinks, address, coordinates |

### 5.5 SEO & performance requirements
•	Lighthouse score target: 90+ Performance, 100 Accessibility, 100 SEO
•	All pages have unique <title> and <meta name="description">
•	Open Graph tags on all pages (og:title, og:description, og:image)
•	Structured data: LocalBusiness JSON-LD on homepage and contact page
•	Sitemap: auto-generated via @astrojs/sitemap integration
•	Robots.txt included
•	All images use WebP format via Astro <Image /> — explicit width/height to prevent CLS
•	Fonts: preload critical fonts in <head>
•	No blocking JS on initial load — GSAP and React islands load asynchronously
•	Google Maps iframe: load with loading="lazy"

# 6. Content Requirements
## 6.1 Copy Language
primary language Bahasa Indonesia. secondary language English. footer also have ID/EN toggle.
Use Astro i18n routing with defaultLocale: "id" and locales: ["id","en"]. If routing.prefixDefaultLocale is false (default), Bahasa Indonesia uses `/` and English uses `/en/`. If prefixDefaultLocale is true, use `/id/` and `/en/` for all pages.

## 6.2 villa content (per villa)
•	Official name and any subtitle/tagline
•	Capacity (number of guests), bedrooms, bathrooms
•	Floor area (m²)
•	Weekday and weekend price per night (in IDR)
•	Full amenities list (AC, hot water, TV, kitchen, terrace, etc.)
•	Description paragraph (3–5 sentences in Bahasa Indonesia)
•	5+ photos

## 6.3 Initial Blog article ideas (seo targets)
•	"5 Alasan Harus Liburan ke Sukabumi Tahun Ini" — target: wisata sukabumi
•	"Panduan Lengkap Camping di TNGHS Cidahu" — target: camping TNGHS Cidahu
•	"Villa Hutan Sukabumi: Kabur Sebentar dari Kebisingan Kota" — target: villa hutan Sukabumi
•	"ATV di Tengah Hutan: Pengalaman yang Tidak Terlupakan" — target: ATV sukabumi
•	"Dari Jakarta ke Kasumi Resort: Panduan Perjalanan" — target: wisata dekat jakarta

# 7. Reusable Components
## Layout Components
•	BaseLayout.astro — head, meta, ClientRouter, font, analytics
•	Navbar.astro — sticky, scroll-aware, mobile toggle
•	Footer.astro — curtain-effect, links, language toggle
•	BlogPostLayout.astro — prose wrapper for blog

## UI Components
••	Button.astro — props: label, href, variant (primary / accent / outline), size
•	Card.astro — generic card with image, title, body, CTA slot
•	VillaCard.astro — specialized card with transition:name and villa-specific props
•	CampingCard.astro — full-bleed image card for camping types
•	Badge.astro — category / tag chip component
•	SectionHeader.astro — reusable section label + headline + optional subtext
•	WhatsAppButton.astro — renders anchor with WhatsApp icon, pre-filled link utility

## React Island
React Island Components (client:load or client:visible)
•	MobileNav.tsx — hamburger trigger + full-screen overlay nav
•	Carousel.tsx — Embla Carousel for IntroSection image strip
•	Lightbox.tsx — yet-another-react-lightbox wrapper for Gallery
•	LanguageToggle.tsx — ID/EN switcher

# 8. Acceptance Criteria
## per-page features
•	Renders correctly on 375px (mobile), 768px (tablet), 1280px (desktop), 1920px (wide)
•	All GSAP animations play once on scroll entry; do not repeat on back-navigation
•	View Transition: card-to-detail image morph works on Chrome/Edge; falls back gracefully on Safari/Firefox
•	All images have descriptive alt text
•	No console errors in production build
•	Lighthouse Performance ≥ 90, Accessibility ≥ 95, SEO = 100, Best Practices ≥ 95

## global
•	pnpm build completes without errors or warnings
•	Sitemap.xml generated and accessible at /sitemap-index.xml
•	robots.txt present and correct
•	Custom 404 page renders and links back to home
•	Footer language toggle switches visible text content (at minimum)
•	GSAP ScrollTrigger properly killed and re-initialized on every page transition
