"use client"

import Link from "next/link"
import type { Product } from "@/lib/products"

interface CompareBarProps {
  selectedProducts: Product[]
  onRemove: (id: string) => void
  onClear: () => void
}

export default function CompareBar({ selectedProducts, onRemove, onClear }: CompareBarProps) {
  if (selectedProducts.length === 0) return null

  const compareUrl = `/compare?${selectedProducts.map((p, i) => `p${i + 1}=${p.id}`).join("&")}`

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 min-w-0">
          {selectedProducts.slice(0, 4).map((p) => (
            <span
              key={p.id}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              <span className="truncate max-w-[100px]">{p.name}</span>
              <button
                onClick={() => onRemove(p.id)}
                className="text-gray-400 hover:text-gray-600 ml-0.5"
                aria-label={`Remove ${p.name}`}
              >
                &times;
              </button>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-sm text-gray-500 whitespace-nowrap">
            {selectedProducts.length} of 4 selected
          </span>
          <button onClick={onClear} className="text-sm text-gray-500 hover:text-gray-700">
            Clear
          </button>
          {selectedProducts.length >= 2 ? (
            <Link
              href={compareUrl}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Compare ({selectedProducts.length})
            </Link>
          ) : (
            <span className="px-4 py-2 bg-gray-200 text-gray-500 text-sm font-medium rounded-lg cursor-not-allowed">
              Select at least 2
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
