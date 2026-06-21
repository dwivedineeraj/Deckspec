# Code Quality Fixes Report

**Date:** June 21, 2026
**Project:** DeckCompare
**Task:** Fix 6 code quality issues identified by QA

---

## Summary

All 6 fixes implemented. Build passes with **0 errors**.

| # | Issue | Severity | File(s) | Status |
|---|-------|----------|---------|--------|
| 1 | Missing `<h1>` on home page | Critical | `src/app/home-content.tsx` | Fixed |
| 2 | Type mismatch — `warranty_structural: "Lifetime"` vs `number` | Critical | `src/lib/products.ts`, `src/components/SpecTable.tsx`, `src/lib/compare.ts` | Fixed |
| 3 | Dead variables `sortBy`/`setSortBy` | Major | `src/hooks/use-filters.ts` | Fixed |
| 4 | Unused exports `getAllBrandSlugs()` / `getAllProductSlugs()` | Major | `src/lib/products.ts` | Fixed |
| 5 | File naming — kebab-case to PascalCase | Major | 4 files renamed; 7 imports updated | Fixed |
| 6 | Dead code in guides (`**` paragraphs render identically) | Major | `src/app/guides/[slug]/page.tsx` | Fixed |

---

## Detail

### Fix 1 (Critical) — Missing `<h1>` on home page
Added a visually-hidden `<h1>` inside the sticky header div in `home-content.tsx:40`:
```html
<h1 class="sr-only">DeckCompare — Decking Material Comparison</h1>
```

### Fix 2 (Critical) — Type mismatch: `warranty_structural`
- Changed `Product.warranty_structural` type from `number` to `number | string` in `products.ts:17`
- Updated `SpecTable.tsx:13` to display string values directly, numeric values as "N years"
- Updated `compare.ts:18` same display logic

### Fix 3 (Major) — Dead variables
Removed `sortBy` and `setSortBy` from `use-filters.ts:113` — they were initialized from URL params but never read or used elsewhere.

### Fix 4 (Major) — Unused exports
Removed `getAllBrandSlugs()` and `getAllProductSlugs()` from `products.ts:68-74`. No consumers existed in the codebase.

### Fix 5 (Major) — File naming
Renamed 4 files from kebab-case to PascalCase to match project convention:
- `compare-bar.tsx` → `CompareBar.tsx`
- `filter-sidebar.tsx` → `FilterSidebar.tsx`
- `product-card.tsx` → `ProductCard.tsx`
- `site-header.tsx` → `SiteHeader.tsx`

Updated all 7 import references across the codebase.

### Fix 6 (Major) — Dead code in guides
Changed `**`-prefixed paragraph styling from identical to regular paragraphs to `font-semibold text-gray-800` so they render visually distinct (bold).

---

## Build Result

```
✓ Compiled successfully
✓ TypeScript passed
✓ All 64 static pages generated (SSG)
```

**Total routes:** 10
**Errors:** 0
**Warnings:** 0

## Remaining Issues

None. All QA-identified issues resolved.
