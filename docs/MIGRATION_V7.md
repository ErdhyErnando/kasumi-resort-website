# Astro v7 Migration Roadmap — Kasumi Resort Website

> **Status:** Phase 1 merged (`fix/astro-6-upgrade` → `main` as PR #40, Astro `6.4.8`); Phase 2 in review on `fix/astro-7-upgrade` (audit: 2026-09-07, updated: 2026-09-08)
> **Current:** Astro `7.3.1` (branch) · **Target:** Astro `7.3.x` ✅ reached
> **Migration path:** v5 → v6 → v7 (two major hops — see [official guidance](https://docs.astro.build/en/upgrade-astro/))

---

## 1. Current State

| Package | Installed | Target for v7 | Action |
| --- | --- | --- | --- |
| `astro` | ^7.3.1 ✅ | ^7.3.1 | Done via `@astrojs/upgrade astro@7` (Phase 2) |
| `@astrojs/mdx` | ^8.0.0 ✅ | ^8.0.0 | Done via `@astrojs/upgrade` |
| `@astrojs/react` | — (removed, PR #37) | n/a | Removed — 0 islands in use (see §5.4) |
| `@astrojs/sitemap` | ^3.7.4 ✅ | ^3.7.4 | Done (Phase 1) |
| `@astrojs/rss` | ^4.0.19 ✅ | ^4.0.19 | Done (Phase 1) |
| `@tailwindcss/vite` | ^4.3.3 ✅ | ^4.3.3 | Done via `pnpm up` (Phase 2; required for Vite 8) |
| `tailwindcss` | ^4.3.3 ✅ | ^4.3.3 | Done alongside the Vite plugin (Phase 2) |
| `@astrojs/check` | ^0.9.10 ✅ | ^0.9.10 | Keep; pins TS 6 (see §5.6) |
| `typescript` | 6.x (just added) | 6.x | **Do not install TS 7** — `astro check` needs TS's JS API (see §5.5) |
| Node.js (dev) | v24.18.0 | ≥ 22.12.0 | ✅ Already compliant |

**Deployment:** Static output to Cloudflare Workers Assets via `wrangler.jsonc` (no server adapter). Static builds are unaffected by the v6 adapter API overhaul.

---

## 2. Environment Readiness (Node 22+)

- Astro v6 raised the minimum to **Node `22.12.0`** (drops Node 18/20); v7 keeps `22.12.0` as the floor.
- Local dev machine runs **Node v24.18.0** — compliant.
- Astro only supports **even-numbered** Node versions; v24 is fine.

**TODO before upgrading — pin the runtime for CI/teammates:** ✅ Done (PR #39: `.nvmrc` = `24`, `engines` set)

```bash
# 1. Add .nvmrc
echo "24" > .nvmrc

# 2. Add engines field to package.json
"engines": { "node": ">=22.12.0" }
```

---

## 3. Deprecated-Feature Scan Results (Codebase Audit)

Scanned the full `src/` tree for legacy patterns. **The codebase is already largely modern** — the big v5→v6 content-collection and View-Transitions migrations were done preemptively.

| Legacy pattern | Status in this repo | v6/v7 consequence |
| --- | --- | --- |
| `Astro.glob()` | ✅ Not used (uses `getCollection()` + Content Layer `glob()` loader) | None |
| `<ViewTransitions />` | ✅ Not used (`<ClientRouter />` in `BaseLayout.astro:75`) | None — removed in v6 |
| Legacy collections (`type: 'content'`, `entry.render()`, `entry.slug`) | ✅ Not used (`render(post)` imported from `astro:content`) | None — removed in v6 |
| `z` imported from `astro:content` | ✅ Fixed — `src/content.config.ts` now imports `z` from `astro/zod` (Phase 1) | Fixed in v6, required for v7 (§5.1) |
| `legacy.collections` flag | ✅ Not used | None |
| `astro:transitions` internals (`createAnimationScope`, `TRANSITION_*` consts, `isTransition*Event`) | ✅ Not used (only string event names `astro:page-load` / `astro:before-swap`, which remain valid) | None — removed in v7 |
| `Astro` object inside `getStaticPaths()` | ✅ Not used | Deprecated in v6 |
| `@astrojs/db` | ✅ Not used | None — removed in v7 |
| `src/fetch.ts` | ✅ Does not exist | Reserved filename in v7 — **do not create one accidentally** |
| `getContainerRenderer()` from package root | ✅ Not used | Deprecated in v7 |
| remark/rehype plugins | ✅ None configured | v7's Sätteri pipeline is a drop-in (§5.3) |
| `@astrojs/tailwind` integration | ✅ Not used (Tailwind 4 via `@tailwindcss/vite`) | None — correct setup for Tailwind v4 |

---

## 4. What Breaks in v6 (First Hop) — Impact on This Project

1. **Node 22.12+** — handled (§2).
2. **Vite 7** — `@tailwindcss/vite@4.2.1` already declares `vite ^7` support. No custom Vite plugins/config in `astro.config.mjs` beyond the Tailwind plugin. Low risk.
3. **Zod 4** — all schemas in `src/content.config.ts` use plain primitives (`z.string`, `z.coerce.date`, `z.number`, `z.array`, `z.enum`, `image()`). **No Zod-3-only APIs** (no `z.string().email()`, no `errorsMap`, no transform+default). Compatible as-is.
4. **`z` from `astro:content` deprecated** — one-line change (§5.1).
5. Content Layer, ViewTransitions, Shiki, sessions, adapters — not applicable (static site, no plugins).

**Expected effort for v6:** ≈ 15 minutes (dependency bump + one import change + build verification).

---

## 5. What Breaks in v7 (Second Hop) — Impact on This Project

### 5.1 Zod import (do during the v6 hop)

```ts
// src/content.config.ts — BEFORE
import { defineCollection, z } from 'astro:content';
// AFTER
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
```

### 5.2 Rust compiler (stricter templates)

The Rust compiler **errors on unclosed tags** and **no longer auto-corrects invalid HTML nesting** (e.g. `<div>` inside `<p>`).

- Risk here is low: templates are component-generated and well-formed; void elements (`<img>`, `<br>`, `<input>`) are used correctly.
- **Verify:** run `pnpm build` immediately after the bump; fix any "unexpected token / unclosed tag" errors. Diff rendered HTML spot-checks on homepage + one villa + one blog post.

### 5.3 Sätteri Markdown pipeline

- No remark/rehype plugins are configured, so the default switch is transparent (GFM + SmartyPants behavior is preserved).
- The 6 blog `.md` files use standard Markdown. **Verify** blog post rendering (headings, lists, links, images) after upgrade.
- If rendering regressions appear, opt back into the unified pipeline: `pnpm add @astrojs/markdown-remark` + `markdown: { processor: unified() }`.

### 5.4 Vite 8 + Rolldown

- **Required:** bump `@tailwindcss/vite` and `tailwindcss` to `^4.3.3` (4.2.x does not declare Vite 8 support).
- No other Vite-specific config or plugins exist. GSAP/React are plain ESM imports — Rolldown handles them the same way.
- **Recommended ordering:** resolve the "unused React stack" audit issue *before* migrating — removing `@astrojs/react`, `react`, `react-dom`, `embla-carousel-react`, `yet-another-react-lightbox`, `lucide-react` shrinks the upgrade surface (one less integration to bump and test).

### 5.5 `compressHTML: 'jsx'` default (whitespace behavior change)

v7 strips whitespace between elements using JSX rules. Inline-element sequences separated by newlines/indentation can lose their separating space.

Known spots to eyeball in this repo:
- Blog card meta row: date · reading time — `<span aria-hidden="true">·</span>` between two text nodes (`src/pages/[locale]/blog/index.astro:166-170`)
- Villa card price line: `{t.villa.index.from}{" "}{formatVillaPrice(...)}` — already uses explicit `{" "}` ✅
- Footer credit row (`src/components/layout/Footer.astro:140-155`)

**Mitigation:** set `compressHTML: true` in `astro.config.mjs` during the migration PR to keep v5/v6 whitespace behavior, then remove it in a follow-up after visual QA (or keep it — it's a supported value).

### 5.6 `astro check` and TypeScript 7

`@astrojs/check@0.9.10` peers on `typescript ^5 || ^6`. TypeScript 7 (native compiler) does not expose the programmatic API `astro check` relies on. **Pin `typescript@^6`** in devDependencies (already done during the audit) and do not `pnpm up typescript@latest` past 6.x until `@astrojs/check` announces TS 7 support.

### 5.7 `astro:transitions`

`<ClientRouter />` and the `astro:page-load` / `astro:before-swap` DOM events used in `BaseLayout.astro`, `Navbar.astro`, `gallery.astro`, `camping/index.astro` are all stable APIs in v7. Only the *internal* helpers (not used here) were removed.

---

## 6. Step-by-Step Roadmap

### Phase 0 — Pre-migration cleanup ✅ Done (on v5, before any bump)

1. ✅ Fresh-clone build failure fixed (`pnpm-workspace.yaml` `allowBuilds`).
2. ✅ `astro check` green (0 errors/warnings/hints, PR #36).
3. ✅ React stack removed (PR #37 — 0 islands in use).
4. ✅ Empty `villas`/`camping` collections removed (PR #38).
5. ✅ `.nvmrc` + `engines` pinned (PR #39).

### Phase 1 — Upgrade to v6 ✅ Done (merged as PR #40)

```bash
npx @astrojs/upgrade astro@6   # bumped astro 5.18.0 → 6.4.8 + compatible official integrations
pnpm up @astrojs/sitemap@^3.7 @astrojs/rss@^4
pnpm install
```

- ✅ Applied the `astro/zod` import change (§5.1).
- ✅ `pnpm build` + `astro check` → 0 errors.
- ✅ `pnpm preview` → smoke-tested all routes.
- ✅ Committed + merged to `main`.

### Phase 2 — Upgrade to v7 ✅ Done on `fix/astro-7-upgrade` (in review, not pushed)

```bash
printf '\n' | npx -y @astrojs/upgrade astro@7   # astro 6.4.8 → 7.3.1, @astrojs/mdx 5.0.6 → 8.0.0
pnpm up @tailwindcss/vite@^4.3.3 tailwindcss@^4.3.3   # 4.2.1 → 4.3.3 (Vite 8)
pnpm install
```

- ✅ Set `compressHTML: true` in `astro.config.mjs` (§5.5).
- ✅ `pnpm build` — 44 pages, no Rust-compiler strictness errors (§5.2).
- ✅ `pnpm check` — 0 errors, 0 warnings, 0 hints.
- ✅ `dist/` verified: sitemap-index.xml + sitemap-0.xml + rss.xml (all HTTP 200), 4 client JS bundles.
- ✅ Smoke-test: 44/44 routes HTTP 200 via `pnpm preview` (both locales).
- ✅ Blog prose identical v6 → v7 on sample post (h2 x5, ul x1, links x23, img x1; §5.3).
- ✅ Whitespace diff v6 → v7: blog card meta, footer credit, price lines byte-identical; only deltas are generator version, `data-astro-*` id churn, JS bundle hashes, and view-transitions meta spacing (head-only, no visual impact).
- ⬜ Full visual QA pass (all pages, both locales, mobile + desktop) — for reviewers.
- ⬜ Lighthouse re-run vs baseline — deferred, out of scope for this branch.

### Phase 3 — Post-migration hardening

1. Remove `compressHTML: true` after whitespace QA (optional).
2. Adopt stable route caching (`cache` / `routeRules` config) for the CDN — v7 stabilizes this; useful for the Cloudflare deployment.
3. Re-run the full audit issue list and close out remaining Performance/SEO items with the new build.
4. Consider the experimental CDN cache providers for Cloudflare once documented as stable.

---

## 7. Testing & Rollback Plan

| Check | Command / method | Pass criteria |
| --- | --- | --- |
| Build | `pnpm build` | 44 pages, no compiler errors (v7: ✅ 44 pages) |
| Types | `pnpm exec astro check` | 0 errors (warnings: 0 after cleanup) |
| Routes | `pnpm preview` + click-through both locales | All nav links + language toggle work |
| View transitions | Navigate villa index ↔ detail | `transition:name` image morph persists |
| Images | Villa/camping/gallery pages | No 404s in network tab |
| Markdown | 3 blog posts × 2 locales | Prose renders identically to v5 |
| Whitespace | Blog card meta, footer credit, price lines | No missing spaces between inline elements |
| Performance | Lighthouse mobile `/id/`, `/id/villa/` | No regression vs. audit baseline |
| Rollback | `git revert` the upgrade commit; `pnpm install` | Previous version restores |

**Estimated effort:** Phase 0: 0.5–1 day · Phase 1: <1 hour · Phase 2: 0.5 day (incl. QA) · Phase 3: optional, 0.5 day.

---

## 8. Sources

- Upgrade to Astro v7 — https://docs.astro.build/en/guides/upgrade-to/v7/
- Upgrade to Astro v6 — https://docs.astro.build/en/guides/upgrade-to/v6/
- Astro 7.0 announcement — https://astro.build/blog/astro-7/
- astro@7.0.0 release notes — https://github.com/withastro/astro/releases/tag/astro@7.0.0
- Vite 8 migration — https://vite.dev/guide/migration
- Zod 4 changelog — https://zod.dev/v4/changelog
- npm registry metadata for `@astrojs/*`, `@tailwindcss/vite` (verified 2026-09-07)
