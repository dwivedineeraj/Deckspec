# DeckCompare Brand Logos

Created 6 brand logo SVGs for DeckCompare at `public/images/brands/`.

| File | Brand Color | Elements | Description |
|------|------------|----------|-------------|
| `trex.svg` | `#2d6b38` (green) | Stylized leaf stroke + bold "TREX" sans-serif | A curved leaf path representing the brand's natural/composite identity |
| `timbertech.svg` | `#4a4a4a` (dark gray) | Wood-grain square icon + serif "TimberTech" | Dark block with white lines evoking timber planks, paired with serif wordmark |
| `fiberon.svg` | `#1a5276` (navy) | Curved leaf arc + bold "FIBERON" sans-serif | Sweeping open curve suggesting a leaf/fiber motif, text below at left |
| `deckorators.svg` | `#8b4513` (brown) | Circle with chevron D-mark + "DECKORATORS" sans-serif | Geometric D formed by a V-chevron inside a circle, compact text |
| `moistureshield.svg` | `#1e3a5f` (dark navy) | Shield outline with checkmark + "MOISTURESHIELD" sans-serif | Classic shield shape with interior checkmark representing protection |
| `azek.svg` | `#2c3e50` (dark slate) | Triangle/arrow A-mark + bold "AZEK" sans-serif | Minimal upward-pointing triangle referencing the letter A, clean wordmark |

## Design decisions

- **viewBox** `"0 0 120 40"` throughout — all fit the required 120×40 pixel aspect ratio
- **Text + icon layout** — each SVG pairs a small brand mark (left side) with the brand name (right side)
- **Pure inline SVG** — no external fonts, images, or dependencies; standard web-safe font stacks
- **Brand colors** — each uses its assigned hex color as the primary stroke/fill, with white used only in the TimberTech wood-grain icon for contrast

## Validation

All 6 files pass Python `xml.etree.ElementTree` parsing as valid XML.
