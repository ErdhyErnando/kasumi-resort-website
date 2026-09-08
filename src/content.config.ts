import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// ─── Blog Collection (locale folders: src/content/blog/id, .../en) ─────
const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		/** Public URL e.g. /images/blog/placeholder.svg — swap when assets are ready */
		heroImage: z.string().optional(),
		author: z.string().default("Kasumi Resort"),
		category: z.string().optional(),
		tags: z.array(z.string()).default([]),
		readingTimeMinutes: z.number().optional(),
		/** Matches filter chips on /blog (tips, wisata, resort, nature) */
		blogFilters: z.array(z.enum(["tips", "wisata", "resort", "nature"])).min(1),
	}),
});

export const collections = { blog };
