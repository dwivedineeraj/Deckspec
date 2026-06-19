import Link from "next/link"
import BrandCard from "@/components/BrandCard"
import SearchBar from "@/components/SearchBar"
import { getBrands, getAllProducts } from "@/lib/products"

export default function Home() {
  const brands = getBrands()
  const products = getAllProducts()

  return (
    <div>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find the Perfect Decking Material
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Compare specs, prices, and features across Trex, TimberTech, Fiberon, Deckorators, MoistureShield, and more.
          </p>
          <SearchBar products={products} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Browse by Brand</h2>
          <Link href="/brands" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View all brands &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/compare?p1=trex-transcend&p2=timbertech-azek-vintage"
              className="block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Trex Transcend vs. Azek Vintage</h3>
              <p className="text-sm text-gray-600">Compare the top-tier offerings from two leading brands.</p>
            </Link>
            <Link
              href="/compare?p1=trex-enhance&p2=timbertech-terrain-plus&p3=fiberon-good-life"
              className="block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Budget Decking Face-Off</h3>
              <p className="text-sm text-gray-600">Trex Enhance vs. TimberTech Terrain+ vs. Fiberon Good Life.</p>
            </Link>
            <Link
              href="/compare?p1=fiberon-paramount&p2=timbertech-azek-landmark&p3=deckorators-voyage"
              className="block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Premium PVC Showdown</h3>
              <p className="text-sm text-gray-600">Compare premium PVC options side by side.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Compare on DeckCompare?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Real Specs</h3>
            <p className="text-sm text-gray-600">
              Every product includes warranty info, pricing, scratch resistance, and more — all in one place.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Side by Side</h3>
            <p className="text-sm text-gray-600">
              Compare 2-4 products at a time across every spec that matters for your deck project.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Buy with Confidence</h3>
            <p className="text-sm text-gray-600">
              Affiliate links to Home Depot and Lowe&apos;s help you find the best price for your chosen material.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
