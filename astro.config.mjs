// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://kasumiresort.com',
	// Phase 2 (Astro 7): keep v5/v6 whitespace behavior during migration;
	// remove in a follow-up after visual QA (see docs/MIGRATION_V7.md §5.5).
	compressHTML: true,
	integrations: [
		mdx(),
		// Exclude the root instant-redirect page (noindex, no content) — issue #22.
		sitemap({
			filter: (page) => page !== 'https://kasumiresort.com/',
		}),
	],
	i18n: {
		defaultLocale: 'id',
		locales: ['id', 'en'],
		routing: {
			prefixDefaultLocale: true,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
