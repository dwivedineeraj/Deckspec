# Brand Logos & Mobile Compare Table

## Task 1: Brand Logos

### Files Changed

| File | Change |
|------|--------|
| `src/components/ProductCard.tsx` | Replaced colored text badge (`getBrandColor` span) with `<img src="/images/brands/{slug}.svg">`. Removed `getBrandColor` helper. Logo is `h-6 w-auto`. |
| `src/app/brands/[brand]/page.tsx` | Replaced colored circle with initial letter with the SVG logo (`h-14 w-auto`). |
| `src/app/brands/[brand]/[product]/page.tsx` | Same as brand page, using `h-12 w-auto`. |

### How it works

The brand slug in product/brand data maps directly to the SVG filename under `public/images/brands/`. Six SVGs exist: `trex.svg`, `timbertech.svg`, `fiberon.svg`, `deckorators.svg`, `moistureshield.svg`, `azek.svg`. All have `viewBox="0 0 120 40"` (3:1 aspect ratio), so `h-*` with `w-auto` preserves proportions.

---

## Task 2: Mobile Compare Table

### Files Changed

| File | Change |
|------|--------|
| `src/components/CompareTable.tsx` | Wrapped in `relative` container. Table scroll container uses `overflow-x-auto`. First column (`Specification` + all label cells) is `sticky left-0 z-10` with matching row background. Added a `absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none` overlay for the fade hint. |
| `src/app/compare/compare-content.tsx` | Removed redundant `overflow-x-auto` from the wrapper div. |
| `src/app/brands/[brand]/[product]/page.tsx` | Same — removed `overflow-x-auto` from the wrapper div. |

### Approach

- **Sticky first column**: Each `<th>` and `<td>` in the first column gets `sticky left-0 z-10` plus an explicit background (`bg-gray-50` for header, `bg-white`/`bg-gray-50` for rows). This keeps the spec labels visible while the product columns scroll horizontally.
- **Scroll gradient**: An absolutely-positioned `<div>` sits on the right edge of the `relative` container, drawing a `bg-gradient-to-l from-white to-transparent`. It's `pointer-events-none` so it doesn't block scrolling. On screens wide enough for the table, the gradient is invisible since `bg-white` on the parent background matches.
- **No overflow on callers**: The `overflow-x-auto` was pushed into `CompareTable` itself so the gradient overlay stays within the table's bounds.

---

## Build Result

`bun run build` passes cleanly — 64 static pages generated, 0 errors, 0 typecheck issues.
