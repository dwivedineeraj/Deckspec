import Link from "next/link"
import BrandCard from "@/components/BrandCard"
import { getBrands } from "@/lib/products"

export default function BrandsPage() {
  const brands = getBrands()

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Decking Brands</h1>
      <p className="text-gray-600 mb-8">Browse decking products by brand. Each brand offers multiple product lines at different price points.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  )
}
