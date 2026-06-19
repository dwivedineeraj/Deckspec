import { readFileSync } from "fs"
import { join } from "path"
import yaml from "js-yaml"

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
  warranty_structural: number
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

let productsCache: Product[] | null = null
let brandsCache: Brand[] | null = null

function loadYaml<T>(filename: string): T {
  const filePath = join(process.cwd(), "data", filename)
  return yaml.load(readFileSync(filePath, "utf-8")) as T
}

export function getAllProducts(): Product[] {
  if (!productsCache) {
    productsCache = loadYaml<Product[]>("products.yaml")
  }
  return productsCache
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find((p) => p.id === id)
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return getAllProducts().filter((p) => p.brand === brandSlug)
}

export function getBrands(): Brand[] {
  if (!brandsCache) {
    brandsCache = loadYaml<Brand[]>("brands.yaml")
  }
  return brandsCache
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return getBrands().find((b) => b.slug === slug)
}

export function getAllBrandSlugs(): string[] {
  return getBrands().map((b) => b.slug)
}

export function getAllProductSlugs(): string[] {
  return getAllProducts().map((p) => p.id)
}
