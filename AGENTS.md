# Kasumi Resort Website — Agent Guidelines

## Build & Development Commands

```bash
pnpm dev          # Start local dev server at localhost:4321
pnpm build        # Build production site to ./dist/
pnpm preview      # Preview built site locally
pnpm astro check  # Type-check all files
```

**Note:** This project uses `pnpm` as the package manager. No test framework is configured.

## Code Style Guidelines

### Imports
- Use path aliases: `@/*`, `@components/*`, `@layouts/*`, `@lib/*`, `@styles/*`
- Import React hooks from `'react'` explicitly
- Group imports: standard library → relative → aliases
- Place `---` separator after imports in Astro components

### Formatting & Types
- **TypeScript strict mode** enabled (strictNullChecks, astro/tsconfigs/strict)
- Use `type` for interfaces; prefer `interface` for object contracts
- Type Astro.currentLocale: `as Locale` (never assume `undefined`)
- Provide JSDoc comments for exported functions and components

### Naming Conventions
- **Components**: PascalCase (`.tsx`, `.astro`)
- **Utilities/constants**: camelCase, uppercase constants (SITE_NAME, WHATSAPP_NUMBER)
- **Astro files**: Full-word names (HeroSection.astro, not HeroSec.astro)
- **React props**: Suffix with `Props` interface

### Error Handling & Safety
- Always check DOM elements exist before manipulation: `if (!element) return;`
- Provide default values for optional data: `images = []`
- Validate locale string before use; default to `'id'`
- Use optional chaining `?.` and nullish coalescing `??` liberally

### Stylesheets
- Use **Tailwind CSS 4** (via `@tailwindcss/vite`)
- Use `clamp()` for responsive font sizing
- Respect color scheme: dark backgrounds with highlight text overlays
- Stagger animations with GSAP for reveal effects
