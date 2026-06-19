"use client"

import { useState, useMemo, useCallback } from "react"
import Fuse from "fuse.js"
import { Product } from "@/lib/products"
import Link from "next/link"

interface SearchBarProps {
  products: Product[]
}

export default function SearchBar({ products }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [showResults, setShowResults] = useState(false)

  const fuse = useMemo(
    () =>
      new Fuse(products, {
        keys: ["name", "brand", "collection", "description", "material_type"],
        threshold: 0.4,
      }),
    [products],
  )

  const results = useMemo(() => {
    if (!query.trim()) return []
    return fuse.search(query).slice(0, 8)
  }, [query, fuse])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setShowResults(true)
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 200)}
        placeholder="Search decking products..."
        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {showResults && results.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {results.map(({ item }) => (
            <Link
              key={item.id}
              href={`/brands/${item.brand}/${item.slug}`}
              className="block px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{item.name}</span>
              <span className="text-gray-500 ml-2 capitalize">— {item.brand}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
