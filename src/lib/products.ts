import productsData from "@/data/products.json" with { type: "json" }
import brandsData from "@/data/brands.json" with { type: "json" }

export interface Product {
  brand: string
  id: string
  name: string
  slug: string
  collection: string
  material_type: string
  construction: string
  profile: string
  description: string
  price_per_sqft: number
  warranty_fade: number
  warranty_stain: number
  warranty_structural: number | string
  colors_count: number
  scratch_resistance: string
  moisture_resistance: string
  grain_patterns: string[]
  slip_resistance_crof: number
  joist_spacing_max: number
  special_features: string[]
  colors: string[]
  affiliate_links: {
    amazon: string | null
    homedepot: string | null
    lowes: string | null
  }
}

export interface Brand {
  id: string
  name: string
  slug: string
  description: string
  website: string
  founded: number
  headquarters: string
  material_types: string[]
  color: string
}

const allProducts = productsData as Product[]
const brands = brandsData as Brand[]

export function getAllProducts(): Product[] {
  return allProducts
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id)
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return allProducts.filter((p) => p.brand === brandSlug)
}

export function getBrands(): Brand[] {
  return brands
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug)
}


