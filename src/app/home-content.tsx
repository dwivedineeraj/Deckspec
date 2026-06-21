"use client"

import { useState, useCallback } from "react"
import SearchBar from "@/components/SearchBar"
import FilterSidebar from "@/components/FilterSidebar"
import ProductCard from "@/components/ProductCard"
import CompareBar from "@/components/CompareBar"
import { useFilters } from "@/hooks/use-filters"
import { getBrands, getProductById } from "@/lib/products"

export default function HomeContent() {
  const {
    allProducts,
    filteredProducts,
    filters,
    setFilter,
    clearFilters,
    searchQuery,
    setSearchQuery,
    compareIds,
    toggleCompare,
    clearCompare,
    uniqueCollections,
    activeFilterCount,
  } = useFilters()

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const brands = getBrands()

  const toggleSidebar = useCallback(() => setSidebarOpen((v) => !v), [])

  const selectedProducts = compareIds
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => p != null)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          <h1 className="sr-only">DeckCompare — Decking Material Comparison</h1>
          <a href="/" className="text-xl font-bold text-gray-900 flex-shrink-0">
            DeckCompare
          </a>

          <div className="flex-1 flex justify-center">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          <button
            onClick={toggleSidebar}
            className="md:hidden flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            aria-label="Toggle filters"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1zm4 6a1 1 0 011-1h8a1 1 0 010 2H8a1 1 0 01-1-1zm2 6a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1z" />
            </svg>
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto">
        <FilterSidebar
          filters={filters}
          setFilter={setFilter}
          clearFilters={clearFilters}
          brands={brands}
          uniqueCollections={uniqueCollections}
          activeFilterCount={activeFilterCount}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 min-w-0 px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold text-gray-900">Composite &amp; PVC Decking Products</h1>
            <p className="text-sm text-gray-500">
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
          </div>

          <h2 className="sr-only">Product List</h2>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  selected={compareIds.includes(product.id)}
                  compareDisabled={compareIds.length >= 4 && !compareIds.includes(product.id)}
                  onToggleCompare={toggleCompare}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-gray-500 mb-2">No products match your search or filters.</p>
              <p className="text-sm text-gray-400 mb-4">Try adjusting your filters or search terms.</p>
              <button
                onClick={() => { clearFilters(); setSearchQuery("") }}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
              >
                Clear all
              </button>
            </div>
          )}
        </main>
      </div>

      <CompareBar
        selectedProducts={selectedProducts}
        onRemove={(id) => toggleCompare(id)}
        onClear={clearCompare}
      />
    </div>
  )
}
