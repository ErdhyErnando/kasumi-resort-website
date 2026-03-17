# Simplified i18n Implementation Guide

## Overview

This guide shows you how to refactor duplicate `/id` and `/en` pages into a single centralized implementation using our existing i18n infrastructure. By following this approach, you'll only need to edit one file instead of two for each page.

## Current State

**Problem**: We maintain duplicate page files
- `src/pages/id/villa/index.astro` (Indonesian)
- `src/pages/en/villa/index.astro` (English)

**Solution**: Use a centralized translation system with one shared page file

## Prerequisites

You already have:
- ✅ `src/i18n/ui.ts` - Translation storage
- ✅ `src/i18n/utils.ts` - Helper functions
- ✅ Working examples in `HeroSection.astro` and other home page components

## Step-by-Step Refactoring Process

### Step 1: Identify Translatable Strings

Open both language versions of the page and identify all text that differs:

**Example from `/id/villa/index.astro`:**
```
- Title: "Villa Kami"
- Label: "Akomodasi"
- Subtitle: "10 villa di tengah hutan..."
- From: "Mulai Rp"
- Night: "/malam"
- View Detail: "Lihat Detail"
```

**Example from `/en/villa/index.astro`:**
```
- Title: "Our Villas"
- Label: "Accommodation"
- Subtitle: "10 villas in the heart of the forest..."
- From: "Starts from Rp"
- Night: "/night"
- View Detail: "View Details"
```

### Step 2: Add Translations to `src/i18n/ui.ts`

Open `src/i18n/ui.ts` and add a new section for your page:

```typescript
export type UiTranslations = {
  hero: { /* ... existing ... */ };
  // ... other existing sections ...
  
  // ADD THIS NEW SECTION
  villa: {
    index: {
      title: string;
      label: string;
      subtitle: string;
      from: string;
      night: string;
      viewDetail: string;
    };
    detail: {
      breadcrumbHome: string;
      breadcrumbVilla: string;
      capacity: string;
      capacityValue: string;
      bedrooms: string;
      bathrooms: string;
      amenities: string;
      pricePerNight: string;
      bookingButton: string;
      ctaHeadline: string;
      ctaButton: string;
      whatsappMessage: string;
    };
  };
};
```

Then add the actual translations in both `id` and `en` objects:

```typescript
const id: UiTranslations = {
  // ... existing translations ...
  
  villa: {
    index: {
      title: "Villa Kami",
      label: "Akomodasi",
      subtitle: "10 villa di tengah hutan, masing-masing dengan pemandangan dan pengalaman unik.",
      from: "Mulai Rp",
      night: "/malam",
      viewDetail: "Lihat Detail",
    },
    detail: {
      breadcrumbHome: "Beranda",
      breadcrumbVilla: "Villa",
      capacity: "Kapasitas",
      capacityValue: "hingga {count} orang",
      bedrooms: "Kamar Tidur",
      bathrooms: "Kamar Mandi",
      amenities: "Fasilitas",
      pricePerNight: "Harga per malam",
      bookingButton: "Booking via WhatsApp",
      ctaHeadline: "Bayangkan akhir pekan di sini",
      ctaButton: "Reserve now",
      whatsappMessage: "Halo, saya tertarik untuk booking {villaName}. Bisa info ketersediaan dan harganya?",
    },
  },
};

const en: UiTranslations = {
  // ... existing translations ...
  
  villa: {
    index: {
      title: "Our Villas",
      label: "Accommodation",
      subtitle: "10 villas in the heart of the forest, each with a unique view and experience.",
      from: "Starts from Rp",
      night: "/night",
      viewDetail: "View Details",
    },
    detail: {
      breadcrumbHome: "Home",
      breadcrumbVilla: "Villa",
      capacity: "Capacity",
      capacityValue: "up to {count} people",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      amenities: "Amenities",
      pricePerNight: "Price per night",
      bookingButton: "Book via WhatsApp",
      ctaHeadline: "Imagine You're next weekend here",
      ctaButton: "Reserve now",
      whatsappMessage: "Hello, I am interested in booking {villaName}. Can I get availability and pricing details?",
    },
  },
};
```

### Step 3: Create Single Unified Page

**Option A: Keep Existing Structure** (Simpler, recommended for now)

Update **both** existing files to use translations:

**File: `src/pages/id/villa/index.astro`**
```astro
---
import BaseLayout from "../../../layouts/BaseLayout.astro";
import SectionHeader from "../../../components/ui/SectionHeader.astro";
import { villas, formatVillaPrice } from "../../../lib/villas";
import { useTranslations } from "../../../i18n/ui";
import type { Locale } from "../../../i18n/utils";

const locale = "id" as Locale;  // Explicitly set for /id route
const t = useTranslations(locale);
---

<BaseLayout title={t.villa.index.title}>
    <section class="px-6 pt-32 pb-20">
        <div class="mx-auto max-w-6xl">
            <SectionHeader
                label={t.villa.index.label}
                title={t.villa.index.title}
                subtitle={t.villa.index.subtitle}
            />
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {villas.map((villa) => (
                    <a
                        href={`/${locale}/villa/${villa.id}`}
                        class="group overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <img
                            src={villa.heroImage}
                            alt={villa.name}
                            loading="lazy"
                            class="aspect-square object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        <div class="space-y-3 p-5">
                            <h3 class="font-heading text-2xl text-dark">
                                {villa.name}
                            </h3>
                            <p class="text-sm leading-relaxed text-dark/70">
                                {villa.shortDescription[locale]}
                            </p>
                            <p class="font-semibold text-primary">
                                {t.villa.index.from} {formatVillaPrice(villa.price, locale)}{t.villa.index.night}
                            </p>
                            <span class="inline-block text-sm font-semibold text-secondary">
                                {t.villa.index.viewDetail}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
</BaseLayout>
```

**File: `src/pages/en/villa/index.astro`**
```astro
---
import BaseLayout from "../../../layouts/BaseLayout.astro";
import SectionHeader from "../../../components/ui/SectionHeader.astro";
import { villas, formatVillaPrice } from "../../../lib/villas";
import { useTranslations } from "../../../i18n/ui";
import type { Locale } from "../../../i18n/utils";

const locale = "en" as Locale;  // Explicitly set for /en route
const t = useTranslations(locale);
---

<!-- Same template as above - only the locale variable changes -->
```

**Option B: Single Dynamic Route** (Advanced, more maintenance-friendly long-term)

This requires restructuring your routing to use Astro's dynamic routes:

1. Delete both `src/pages/id/villa/` and `src/pages/en/villa/`
2. Create `src/pages/[locale]/villa/index.astro`:

```astro
---
import BaseLayout from "../../../layouts/BaseLayout.astro";
import SectionHeader from "../../../components/ui/SectionHeader.astro";
import { villas, formatVillaPrice } from "../../../lib/villas";
import { useTranslations } from "../../../i18n/ui";
import type { Locale } from "../../../i18n/utils";

// Generate static paths for both locales
export function getStaticPaths() {
  return [
    { params: { locale: "id" } },
    { params: { locale: "en" } }
  ];
}

const { locale } = Astro.params as { locale: Locale };
const t = useTranslations(locale);
---

<!-- Same template as Option A -->
```

### Step 4: Update Detail Pages

Follow the same pattern for `[id].astro`:

**File: `src/pages/id/villa/[id].astro` or `src/pages/en/villa/[id].astro`**

```astro
---
import BaseLayout from "../../../layouts/BaseLayout.astro";
import { getVillaById, villas, formatVillaPrice } from "../../../lib/villas";
import { getWhatsAppUrl } from "../../../lib/whatsapp";
import { useTranslations } from "../../../i18n/ui";
import type { Locale } from "../../../i18n/utils";

export function getStaticPaths() {
    return villas.map((villa) => ({ params: { id: villa.id } }));
}

const locale = "id" as Locale;  // or "en" for English version
const t = useTranslations(locale);

const { id } = Astro.params;
const villa = getVillaById(id ?? "");

if (!villa) {
    return Astro.redirect(`/${locale}/villa`);
}

// Helper function to replace placeholders
function formatMessage(template: string, values: Record<string, string>): string {
    return template.replace(/{(\w+)}/g, (_, key) => values[key] || '');
}

const whatsappMsg = formatMessage(t.villa.detail.whatsappMessage, { villaName: villa.name });
const capacityText = formatMessage(t.villa.detail.capacityValue, { count: villa.capacity.toString() });
---

<BaseLayout title={villa.name}>
    <section class="px-6 pt-32 pb-20">
        <div class="mx-auto max-w-6xl space-y-10">
            <a
                href={`/${locale}/villa`}
                class="inline-block text-sm font-medium text-dark/60 hover:text-dark"
            >
                {t.villa.detail.breadcrumbHome} / {t.villa.detail.breadcrumbVilla} / {villa.name}
            </a>

            <img
                src={villa.heroImage}
                alt={villa.name}
                class="aspect-video h-[40svh] w-full rounded-2xl object-cover"
            />

            <div class="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
                <article class="space-y-6">
                    <h1 class="font-heading text-4xl text-dark md:text-5xl">
                        {villa.name}
                    </h1>
                    <p class="leading-relaxed text-dark/75">
                        {villa.description[locale]}
                    </p>

                    <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
                        <div class="rounded-xl bg-highlight p-4">
                            <p class="text-xs uppercase tracking-wide text-dark/60">
                                {t.villa.detail.capacity}
                            </p>
                            <p class="mt-1 text-xl font-semibold text-dark">
                                {capacityText}
                            </p>
                        </div>
                        <div class="rounded-xl bg-highlight p-4">
                            <p class="text-xs uppercase tracking-wide text-dark/60">
                                {t.villa.detail.bedrooms}
                            </p>
                            <p class="mt-1 text-xl font-semibold text-dark">
                                {villa.bedrooms}
                            </p>
                        </div>
                        <div class="rounded-xl bg-highlight p-4">
                            <p class="text-xs uppercase tracking-wide text-dark/60">
                                {t.villa.detail.bathrooms}
                            </p>
                            <p class="mt-1 text-xl font-semibold text-dark">
                                {villa.bathrooms}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 class="font-heading text-2xl text-dark">
                            {t.villa.detail.amenities}
                        </h2>
                        <ul class="mt-4 grid gap-2 sm:grid-cols-2">
                            {villa.amenities.map((amenity) => (
                                <li class="rounded-lg border border-dark/10 px-3 py-2 text-sm text-dark/75">
                                    {amenity[locale]}
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>

                <aside class="h-fit rounded-2xl border border-dark/10 bg-white p-6 shadow-sm lg:sticky lg:top-28">
                    <p class="text-sm text-dark/60">{t.villa.detail.pricePerNight}</p>
                    <p class="mt-2 text-3xl font-bold text-primary">
                        Rp {formatVillaPrice(villa.price, locale)}
                    </p>
                    <a
                        href={getWhatsAppUrl(whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-dark transition-opacity hover:opacity-90"
                    >
                        {t.villa.detail.bookingButton}
                    </a>
                </aside>
            </div>
        </div>
        <div class="mt-24 flex flex-col items-center justify-between">
            <h2 class="text-2xl font-bold">{t.villa.detail.ctaHeadline}</h2>
            <a
                href={getWhatsAppUrl(whatsappMsg)}
                class="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-dark transition-opacity hover:opacity-90"
            >
                {t.villa.detail.ctaButton}
            </a>
        </div>
    </section>
</BaseLayout>
```

### Step 5: Test Your Changes

1. Start dev server: `npm run dev`
2. Visit both language versions:
   - `http://localhost:4321/id/villa`
   - `http://localhost:4321/en/villa`
   - `http://localhost:4321/id/villa/gake`
   - `http://localhost:4321/en/villa/gake`
3. Verify all text appears in the correct language
4. Check that links work correctly

### Step 6: Clean Up (Optional)

If you chose **Option B** (dynamic routes), you can delete the old duplicate files after verifying everything works.

## Applying to Other Pages

### For Gallery Page

1. Add to `ui.ts`:
```typescript
gallery: {
  title: string;
  subtitle: string;
}
```

2. Update `src/pages/id/gallery.astro` and create `src/pages/en/gallery.astro`

### For Contact Page

1. Add to `ui.ts`:
```typescript
contact: {
  title: string;
  subtitle: string;
  addressLabel: string;
  emailLabel: string;
  whatsappLabel: string;
  socialLabel: string;
  directionsTitle: string;
  fromJakarta: string;
  fromBogor: string;
}
```

2. Update pages accordingly

### For Camping Pages

Follow the same pattern as Villa pages:
1. Identify translatable strings
2. Add to `ui.ts` under a `camping` section
3. Update pages to use `useTranslations()`
4. Test both languages

### For Blog Pages

Blog content is typically stored in MDX/Markdown files, so you might want to:
1. Store posts in `src/content/blog/id/` and `src/content/blog/en/`
2. Use Astro's Content Collections with i18n
3. Follow Astro's content collections guide for multilingual content

## Pro Tips

1. **Use placeholders** for dynamic content: `"Hello {name}"` instead of string concatenation
2. **Keep translations together** by feature/page in `ui.ts` for easy maintenance
3. **Use TypeScript** to enforce translation completeness (if a key exists in `id`, it must exist in `en`)
4. **Test both languages** every time you add new text
5. **Document context** when translations need nuance (add comments in `ui.ts`)

## Common Pitfalls to Avoid

❌ **Don't hardcode text in templates**
```astro
<h1>Villa Kami</h1>  <!-- BAD -->
```

✅ **Always use translations**
```astro
<h1>{t.villa.index.title}</h1>  <!-- GOOD -->
```

❌ **Don't forget to update both languages**
```typescript
id: { newFeature: "Fitur Baru" }
en: { /* forgot to add newFeature */ }  // BAD
```

✅ **Keep translations in sync**
```typescript
id: { newFeature: "Fitur Baru" }
en: { newFeature: "New Feature" }  // GOOD
```

## Summary

**Before**: Edit 2+ files for every text change
**After**: Edit 1 file (`ui.ts`) + 1 template file

**Benefits**:
- Single source of truth
- Less code duplication
- Easier maintenance
- Type-safe translations
- Consistent user experience

## Next Steps

1. ✅ Start with Villa pages (highest priority)
2. Move to Contact page
3. Handle Gallery page
4. Refactor Camping pages
5. Set up Blog multilingual content
6. Consider creating helper utilities for common patterns

## Questions?

Refer to:
- `src/components/sections/HeroSection.astro` - Working example
- `src/i18n/ui.ts` - Existing translation structure
- [Astro i18n Docs](https://docs.astro.build/en/guides/internationalization/)
