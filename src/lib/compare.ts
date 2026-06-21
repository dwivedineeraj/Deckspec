import { Product } from "./products"

export interface CompareRow {
  label: string
  key: string
  values: string[]
}

const specFields: { label: string; key: keyof Product; format?: (product: Product) => string }[] = [
  { label: "Brand", key: "brand", format: (p) => p.brand.charAt(0).toUpperCase() + p.brand.slice(1) },
  { label: "Collection", key: "collection" },
  { label: "Material Type", key: "material_type" },
  { label: "Construction", key: "construction" },
  { label: "Profile", key: "profile" },
  { label: "Price per sq ft", key: "price_per_sqft", format: (p) => `$${p.price_per_sqft.toFixed(2)}` },
  { label: "Warranty (Fade)", key: "warranty_fade", format: (p) => `${p.warranty_fade} years` },
  { label: "Warranty (Stain)", key: "warranty_stain", format: (p) => `${p.warranty_stain} years` },
  { label: "Warranty (Structural)", key: "warranty_structural", format: (p) => typeof p.warranty_structural === "string" ? p.warranty_structural : `${p.warranty_structural} years` },
  { label: "Colors Available", key: "colors_count", format: (p) => String(p.colors_count) },
  { label: "Scratch Resistance", key: "scratch_resistance" },
  { label: "Moisture Resistance", key: "moisture_resistance" },
  { label: "Grain Patterns", key: "grain_patterns", format: (p) => p.grain_patterns.join(", ") },
  { label: "Slip Resistance (COF)", key: "slip_resistance_crof", format: (p) => p.slip_resistance_crof.toFixed(2) },
  { label: "Max Joist Spacing", key: "joist_spacing_max", format: (p) => `${p.joist_spacing_max}"` },
  { label: "Special Features", key: "special_features", format: (p) => p.special_features.join(", ") || "None" },
  { label: "Available Colors", key: "colors", format: (p) => p.colors.join(", ") },
]

function getFieldValue(product: Product, key: keyof Product): string {
  const field = specFields.find((f) => f.key === key)
  if (field?.format) return field.format(product)
  return String(product[key] ?? "")
}

export function buildComparisonTable(products: Product[]): CompareRow[] {
  return specFields.map((field) => ({
    label: field.label,
    key: field.key,
    values: products.map((p) => getFieldValue(p, field.key)),
  }))
}
