import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─── Blog Collection ──────────────────────────────────────────────────
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			author: z.string().default('Kasumi Resort'),
			category: z.string().optional(),
			tags: z.array(z.string()).default([]),
		}),
});

// ─── Villas Collection ────────────────────────────────────────────────
const villas = defineCollection({
	loader: glob({ base: './src/content/villas', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			tagline: z.string().optional(),
			description: z.string(),
			heroImage: image().optional(),
			images: z.array(image()).default([]),
			capacity: z.number(),
			bedrooms: z.number(),
			bathrooms: z.number(),
			area: z.number().optional(), // m²
			price: z.number(), // weekday price in IDR
			weekendPrice: z.number().optional(),
			amenities: z.array(z.string()).default([]),
			order: z.number().default(0),
		}),
});

// ─── Camping Collection ───────────────────────────────────────────────
const camping = defineCollection({
	loader: glob({ base: './src/content/camping', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			type: z.string(), // e.g. "Forest & Riverside", "Mountain View"
			tagline: z.string().optional(),
			description: z.string(),
			heroImage: image().optional(),
			images: z.array(image()).default([]),
			spots: z.number().optional(),
			priceAdults: z.number().optional(),
			priceChildren: z.number().optional(),
			amenities: z.array(z.string()).default([]),
			order: z.number().default(0),
		}),
});

export const collections = { blog, villas, camping };
