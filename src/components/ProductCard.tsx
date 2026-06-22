"use client"

import Link from "next/link"
import type { Product } from "@/lib/products"
import AffiliateLink from "./AffiliateLink"

interface ProductCardProps {
  product: Product
  selected: boolean
  compareDisabled: boolean
  onToggleCompare: (id: string) => void
}

export default function ProductCard({ product, selected, compareDisabled, onToggleCompare }: ProductCardProps) {
  return (
    <Link
      href={`/brands/${product.brand}/${product.slug}`}
      className={`block bg-white rounded-xl border transition-all overflow-hidden ${
        selected ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-gray-300"
      }`}
    >
      <div className="p-4 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <img
            src={`/images/brands/${product.brand}.svg`}
            alt={product.brand}
            loading="lazy"
            className="h-6 w-auto"
          />
          {product.colors_count > 0 && (
            <span className="text-xs text-gray-500">{product.colors_count} colors</span>
          )}
        </div>

        <h3 className="text-base font-semibold text-gray-900 leading-tight">{product.name}</h3>

        <p className="text-sm text-gray-500 capitalize">
          {product.collection}{product.collection ? " — " : ""}{product.material_type}
        </p>

        <div>
          <span className="text-2xl font-bold text-[#1a6b4f]">${product.price_per_sqft.toFixed(2)}</span>
          <span className="text-xs text-gray-500 ml-1">/ sq ft</span>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
          <span>Fade: {product.warranty_fade}yr</span>
          <span>Stain: {product.warranty_stain}yr</span>
          <span>Scratch: {product.scratch_resistance}</span>
        </div>

        <div className="flex items-center justify-between pt-1 mt-auto">
          <label
            className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer select-none"
            onClick={(e) => e.preventDefault()}
          >
            <input
              type="checkbox"
              checked={selected}
              disabled={!selected && compareDisabled}
              onChange={() => onToggleCompare(product.id)}
              className="accent-blue-600 w-4 h-4 rounded border-gray-300"
            />
            Compare
          </label>

          {product.affiliate_links.homedepot && (
            <div onClick={(e) => e.stopPropagation()}>
              <AffiliateLink href={product.affiliate_links.homedepot} store="homedepot">
                Shop &rarr;
              </AffiliateLink>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

