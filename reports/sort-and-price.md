# Sort + Price Slider — Implementation Report

## 1. Sort Dropdown

**File changes:**
- `src/hooks/use-filters.ts` — Added `sortBy` state (default `"name-asc"`) and sorting logic in the `filteredProducts` memo after filtering.
- `src/app/home-content.tsx` — Added a `<select>` dropdown in the product grid header, positioned between the heading and the results count.

**Options:** Name (A-Z), Price: Low to High, Price: High to Low, Warranty: Best First (by structural warranty, then fade), Scratch Resistance: Best First.

## 2. Price Range Slider

**File changes:**
- `src/components/FilterSidebar.tsx` — Replaced the two `<input type="number">` elements with two overlapped `<input type="range">` elements (min=2, max=10, step=0.5). Both handles are pointer-events-aware so only one drags at a time. Crossing values auto-adjusts the other handle. Current values are displayed as `$2 – $10` above the track.

## Build Result

`bun run build` passed successfully (Next.js 16.2.9, Turbopack, 0 errors, 0 warnings, 64 static pages generated).
