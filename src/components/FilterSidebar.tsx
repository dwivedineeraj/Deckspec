"use client"

import type { FilterState } from "@/hooks/use-filters"
import type { Brand } from "@/lib/products"

interface FilterSidebarProps {
  filters: FilterState
  setFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void
  clearFilters: () => void
  brands: Brand[]
  uniqueCollections: string[]
  activeFilterCount: number
  isOpen: boolean
  onClose: () => void
}

const allMaterials = ["composite", "pvc"]
const scratchOptions = [
  { value: "high", label: "High (4.1–5.0)" },
  { value: "medium", label: "Medium (3.1–4.0)" },
  { value: "low", label: "Low (0–3.0)" },
]
const colorOptions = [
  { value: "1-5", label: "1–5 colors" },
  { value: "6-10", label: "6–10 colors" },
  { value: "11+", label: "11+ colors" },
]

function CheckboxGroup({
  label,
  options,
  selected,
  onChange,
}: {
  label: string
  options: { value: string; label: string }[]
  selected: string[]
  onChange: (value: string) => void
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-2">{label}</p>
      <div className="space-y-1.5">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(opt.value)}
              onChange={() => onChange(opt.value)}
              className="accent-blue-600 w-4 h-4 rounded border-gray-300"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  )
}

export default function FilterSidebar({
  filters,
  setFilter,
  clearFilters,
  brands,
  uniqueCollections,
  activeFilterCount,
  isOpen,
  onClose,
}: FilterSidebarProps) {
  const content = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-2 text-sm font-normal text-gray-500">({activeFilterCount} active)</span>
          )}
        </h2>
        <div className="flex items-center gap-2">
          {activeFilterCount > 0 && (
            <button onClick={clearFilters} className="text-sm text-blue-600 hover:text-blue-700">
              Clear all
            </button>
          )}
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 hidden max-md:block" aria-label="Close filters">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <CheckboxGroup
          label="Brand"
          options={brands.map((b) => ({ value: b.slug, label: b.name }))}
          selected={filters.brands}
          onChange={(v) => {
            const next = filters.brands.includes(v)
              ? filters.brands.filter((x) => x !== v)
              : [...filters.brands, v]
            setFilter("brands", next)
          }}
        />

        <CheckboxGroup
          label="Material Type"
          options={allMaterials.map((m) => ({ value: m, label: m.charAt(0).toUpperCase() + m.slice(1) }))}
          selected={filters.materials}
          onChange={(v) => {
            const next = filters.materials.includes(v)
              ? filters.materials.filter((x) => x !== v)
              : [...filters.materials, v]
            setFilter("materials", next)
          }}
        />

        {uniqueCollections.length > 0 && (
          <CheckboxGroup
            label="Collection"
            options={uniqueCollections.map((c) => ({ value: c, label: c }))}
            selected={filters.collections}
            onChange={(v) => {
              const next = filters.collections.includes(v)
                ? filters.collections.filter((x) => x !== v)
                : [...filters.collections, v]
              setFilter("collections", next)
            }}
          />
        )}

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Price Range</p>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.priceMin ?? ""}
              onChange={(e) => setFilter("priceMin", e.target.value ? Number(e.target.value) : null)}
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-400">—</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.priceMax ?? ""}
              onChange={(e) => setFilter("priceMax", e.target.value ? Number(e.target.value) : null)}
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <CheckboxGroup
          label="Scratch Resistance"
          options={scratchOptions}
          selected={filters.scratchResistance}
          onChange={(v) => {
            const next = filters.scratchResistance.includes(v)
              ? filters.scratchResistance.filter((x) => x !== v)
              : [...filters.scratchResistance, v]
            setFilter("scratchResistance", next)
          }}
        />

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Color Count</p>
          <select
            value={filters.colorsRange ?? ""}
            onChange={(e) => setFilter("colorsRange", e.target.value || null)}
            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any</option>
            {colorOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Warranty</p>
          <div className="space-y-1.5">
            {(["warrantyFade", "warrantyStain", "warrantyStructural"] as const).map((key) => (
              <label key={key} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters[key] !== null}
                  onChange={() => setFilter(key, filters[key] === null ? 25 : null)}
                  className="accent-blue-600 w-4 h-4 rounded border-gray-300"
                />
                {key === "warrantyFade" ? "Fade ≥ 25yr" : key === "warrantyStain" ? "Stain ≥ 25yr" : "Structural ≥ 30yr"}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 md:hidden">
        <button
          onClick={onClose}
          className="w-full py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Show results
        </button>
      </div>
    </div>
  )

  return (
    <>
      <aside className="hidden md:block w-[280px] flex-shrink-0 border-r border-gray-200 bg-white h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
        {content}
      </aside>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="absolute left-0 top-0 bottom-0 w-[360px] max-w-full bg-white shadow-xl z-10 overflow-y-auto">
            {content}
          </div>
        </div>
      )}
    </>
  )
}
