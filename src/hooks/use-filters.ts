"use client"

import { useState, useMemo, useCallback, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Fuse from "fuse.js"
import { getAllProducts } from "@/lib/products"
import type { Product } from "@/lib/products"

export interface FilterState {
  brands: string[]
  materials: string[]
  collections: string[]
  priceMin: number | null
  priceMax: number | null
  scratchResistance: string[]
  colorsRange: string | null
  warrantyFade: number | null
  warrantyStain: number | null
  warrantyStructural: number | null
}

const initialFilter: FilterState = {
  brands: [],
  materials: [],
  collections: [],
  priceMin: null,
  priceMax: null,
  scratchResistance: [],
  colorsRange: null,
  warrantyFade: null,
  warrantyStain: null,
  warrantyStructural: null,
}

function parseFiltersFromParams(params: URLSearchParams): FilterState {
  return {
    brands: params.get("brand")?.split(",").filter(Boolean) ?? [],
    materials: params.get("material")?.split(",").filter(Boolean) ?? [],
    collections: params.get("collection")?.split(",").filter(Boolean) ?? [],
    priceMin: params.has("price_min") ? Number(params.get("price_min")) : null,
    priceMax: params.has("price_max") ? Number(params.get("price_max")) : null,
    scratchResistance: params.get("scratch")?.split(",").filter(Boolean) ?? [],
    colorsRange: params.get("colors") ?? null,
    warrantyFade: params.has("warranty_fade") ? Number(params.get("warranty_fade")) : null,
    warrantyStain: params.has("warranty_stain") ? Number(params.get("warranty_stain")) : null,
    warrantyStructural: params.has("warranty_structural") ? Number(params.get("warranty_structural")) : null,
  }
}

function filtersToParams(filters: FilterState): Record<string, string> {
  const p: Record<string, string> = {}
  if (filters.brands.length) p.brand = filters.brands.join(",")
  if (filters.materials.length) p.material = filters.materials.join(",")
  if (filters.collections.length) p.collection = filters.collections.join(",")
  if (filters.priceMin !== null) p.price_min = String(filters.priceMin)
  if (filters.priceMax !== null) p.price_max = String(filters.priceMax)
  if (filters.scratchResistance.length) p.scratch = filters.scratchResistance.join(",")
  if (filters.colorsRange) p.colors = filters.colorsRange
  if (filters.warrantyFade !== null) p.warranty_fade = String(filters.warrantyFade)
  if (filters.warrantyStain !== null) p.warranty_stain = String(filters.warrantyStain)
  if (filters.warrantyStructural !== null) p.warranty_structural = String(filters.warrantyStructural)
  return p
}

const scratchMap: Record<string, [number, number]> = {
  "high": [4.1, 5],
  "medium": [3.1, 4],
  "low": [0, 3],
}

const colorRanges: Record<string, [number, number]> = {
  "1-5": [1, 5],
  "6-10": [6, 10],
  "11+": [11, Infinity],
}

function meetsWarranty(value: number | string, min: number | null): boolean {
  if (min === null) return true
  const v = typeof value === "string" ? Infinity : value
  return v >= min
}

function meetsPrice(product: Product, min: number | null, max: number | null): boolean {
  if (min !== null && product.price_per_sqft < min) return false
  if (max !== null && product.price_per_sqft > max) return false
  return true
}

function meetsScratch(product: Product, values: string[]): boolean {
  if (!values.length) return true
  const score = product.slip_resistance_crof
  return values.some((v) => {
    const range = scratchMap[v]
    if (!range) return false
    return score >= range[0] && score <= range[1]
  })
}

function meetsColors(product: Product, rangeKey: string | null): boolean {
  if (!rangeKey) return true
  const range = colorRanges[rangeKey]
  if (!range) return true
  return product.colors_count >= range[0] && product.colors_count <= range[1]
}

export function useFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const allProducts = useMemo(() => getAllProducts(), [])

  const [filters, setFilters] = useState<FilterState>(() => parseFiltersFromParams(searchParams))
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get("q") ?? "")
  const [compareIds, setCompareIds] = useState<string[]>([])

  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }
    const fp = filtersToParams(filters)
    if (searchQuery) fp.q = searchQuery
    const qs = new URLSearchParams(fp).toString()
    router.replace(qs ? `/?${qs}` : "/", { scroll: false })
  }, [filters, searchQuery, router])

  const fuse = useMemo(
    () =>
      new Fuse(allProducts, {
        keys: ["name", "brand", "collection", "material_type", "construction", "description", "special_features"],
        threshold: 0.4,
        ignoreLocation: true,
      }),
    [allProducts],
  )

  const filteredProducts = useMemo(() => {
    let result = [...allProducts]

    if (filters.brands.length) result = result.filter((p) => filters.brands.includes(p.brand))
    if (filters.materials.length) result = result.filter((p) => filters.materials.includes(p.material_type))
    if (filters.collections.length) result = result.filter((p) => filters.collections.includes(p.collection))
    result = result.filter((p) => meetsPrice(p, filters.priceMin, filters.priceMax))
    result = result.filter((p) => meetsScratch(p, filters.scratchResistance))
    result = result.filter((p) => meetsColors(p, filters.colorsRange))
    result = result.filter((p) => meetsWarranty(p.warranty_fade, filters.warrantyFade))
    result = result.filter((p) => meetsWarranty(p.warranty_stain, filters.warrantyStain))
    result = result.filter((p) => meetsWarranty(p.warranty_structural, filters.warrantyStructural))

    if (searchQuery.trim()) {
      const searched = fuse.search(searchQuery.trim())
      const searchedIds = new Set(searched.map((r) => r.item.id))
      result = result.filter((p) => searchedIds.has(p.id))
    }

    return result
  }, [allProducts, filters, searchQuery, fuse])

  const setFilter = useCallback(<K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }, [])

  const clearFilters = useCallback(() => {
    setFilters(initialFilter)
    setSearchQuery("")
  }, [])

  const uniqueCollections = useMemo(() => {
    let pool = allProducts
    if (filters.brands.length) pool = pool.filter((p) => filters.brands.includes(p.brand))
    if (filters.materials.length) pool = pool.filter((p) => filters.materials.includes(p.material_type))
    return [...new Set(pool.map((p) => p.collection))].sort()
  }, [allProducts, filters.brands, filters.materials])

  const toggleCompare = useCallback((id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id)
      if (prev.length >= 4) return prev
      return [...prev, id]
    })
  }, [])

  const clearCompare = useCallback(() => setCompareIds([]), [])

  const activeFilterCount = useMemo(() => {
    let count = 0
    if (filters.brands.length) count++
    if (filters.materials.length) count++
    if (filters.collections.length) count++
    if (filters.priceMin !== null || filters.priceMax !== null) count++
    if (filters.scratchResistance.length) count++
    if (filters.colorsRange) count++
    if (filters.warrantyFade !== null) count++
    if (filters.warrantyStain !== null) count++
    if (filters.warrantyStructural !== null) count++
    return count
  }, [filters])

  return {
    allProducts,
    filteredProducts,
    filters,
    setFilter,
    setFilters,
    clearFilters,
    searchQuery,
    setSearchQuery,
    compareIds,
    toggleCompare,
    clearCompare,
    uniqueCollections,
    activeFilterCount,
  }
}
