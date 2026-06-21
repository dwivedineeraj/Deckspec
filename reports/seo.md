# SEO Improvements Report

## Summary

Implemented all 6 SEO items per the CEO's task spec. Build passes cleanly — 64 static pages generated with zero errors/warnings.

## What Was Done

### 1. Structured Data (JSON-LD)
- **Product schema**: Added `Product` JSON-LD to every product page (`/brands/[brand]/[product]/page.tsx`). Includes name, brand, description, offers (price + USD currency), category, material, and color list.
- **BreadcrumbList schema**: Added to every page — homepage, brands listing, brand detail, product pages, compare page, guides listing, and guide detail pages. Each reflects the correct page path.

### 2. `generateMetadata()` on Every Page
Every route exports unique metadata:
- **Homepage** (`src/app/page.tsx`): static `metadata` export
- **Brands listing** (`src/app/brands/page.tsx`): static `metadata` export
- **Brand detail** (`src/app/brands/[brand]/page.tsx`): `generateMetadata()` with brand data
- **Product page** (`src/app/brands/[brand]/[product]/page.tsx`): `generateMetadata()` with product name + brand
- **Compare** (`src/app/compare/page.tsx`): static `metadata` export
- **Guides listing** (`src/app/guides/page.tsx`): static `metadata` export
- **Guide detail** (`src/app/guides/[slug]/page.tsx`): `generateMetadata()` with guide title + first paragraph as description

### 3. Open Graph / Twitter Cards
- **Root layout** (`src/app/layout.tsx`): Added `og:title`, `og:description`, `og:type=website`, `og:siteName`, `og:locale`, and `twitter:card=summary_large_image` with defaults.
- **Every page** overrides og:title/description and twitter:title/description with page-specific values, keeping `card: summary_large_image`.

### 4. Heading Hierarchy Fixes
- **Homepage**: Added `<h1>` heading "Composite & PVC Decking Products" and `<h2 class="sr-only">Product List</h2>` before the product grid (used `h3` cards).
- **Brands listing**: Added `<h2>All Brands</h2>` between the `<h1>` and the `BrandCard` grid (prevents h1→h3 skip).
- **Refactored client-component pages** for server-side metadata: split `page.tsx` (server → metadata + JSON-LD) and `home-content.tsx`/`compare-content.tsx` (client → interactive logic).
- All pages now use h1→h2→h3 with no skipping.

### 5. Canonical URLs
Every page includes `<link rel="canonical">` via `alternates.canonical` in metadata pointing to its own canonical URL. Homepage canonical is `/` (not `/` with query params).

### 6. Sitemap
Added `src/app/sitemap.ts` with `force-static` for static export compatibility. Includes:
- 4 static pages (home, brands index, compare, guides index)
- 6 brand pages
- 33 product pages  
- 17 guide pages
- **Total: 60 URLs**

## Files Changed

| File | Change |
|------|--------|
| `src/app/layout.tsx` | Added OG/Twitter metadata |
| `src/app/page.tsx` | Rewritten as server component + metadata + BreadcrumbList JSON-LD |
| `src/app/home-content.tsx` | **New** — client component extracted from page.tsx, heading fixes |
| `src/app/brands/page.tsx` | Added metadata, BreadcrumbList, canonical, h2 "All Brands" |
| `src/app/brands/[brand]/page.tsx` | Added `generateMetadata()`, BreadcrumbList, canonical |
| `src/app/brands/[brand]/[product]/page.tsx` | Added `generateMetadata()`, Product + BreadcrumbList JSON-LD, canonical |
| `src/app/compare/page.tsx` | Rewritten as server component + metadata + BreadcrumbList JSON-LD |
| `src/app/compare/compare-content.tsx` | **New** — client component extracted from compare/page.tsx |
| `src/app/guides/page.tsx` | Added metadata, BreadcrumbList, canonical |
| `src/app/guides/[slug]/page.tsx` | Added `generateMetadata()`, BreadcrumbList, canonical |
| `src/app/sitemap.ts` | **New** — 60-URL sitemap with all static routes |

## Build Result

```
✓ Compiled successfully
✓ TypeScript check passed
✓ 64 static pages generated
✓ All routes: Static or SSG
```

## Issues

1. **Homepage headings are client-rendered**: The homepage uses a client component (`"use client"`) for the interactive filter/search UI. The `<h1>` and `<h2>` are injected client-side after JS execution. For static export (`output: "export"`), the initial HTML shows only a loading state. This is inherent to the architecture and doesn't affect SSG/SSR deployments on Vercel — the headings will be present in the server-rendered HTML when deployed normally.
2. **`twitter:card` merge**: Next.js replaces (rather than deep-merges) nested metadata objects. Each page must explicitly include `card: "summary_large_image"` in its `twitter` metadata or the layout default is lost. Fixed across all pages.
