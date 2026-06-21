import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import SiteHeader from "@/components/SiteHeader"
import { getBrandBySlug, getProductsByBrand, getBrands } from "@/lib/products"

export function generateStaticParams() {
  return getBrands().map((b) => ({ brand: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand: brandSlug } = await params
  const brand = getBrandBySlug(brandSlug)
  if (!brand) return {}
  return {
    title: `${brand.name} Decking — Product Lines, Specs & Prices`,
    description: brand.description,
    alternates: { canonical: `/brands/${brandSlug}` },
    openGraph: {
      title: `${brand.name} Decking — Product Lines, Specs & Prices | DeckCompare`,
      description: brand.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${brand.name} Decking — Product Lines, Specs & Prices | DeckCompare`,
      description: brand.description,
    },
  }
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: brandSlug } = await params
  const brand = getBrandBySlug(brandSlug)
  if (!brand) notFound()

  const products = getProductsByBrand(brandSlug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deckcompare.com" },
      { "@type": "ListItem", position: 2, name: "Brands", item: "https://deckcompare.com/brands" },
      { "@type": "ListItem", position: 3, name: brand.name, item: `https://deckcompare.com/brands/${brandSlug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/brands" className="text-sm text-blue-600 hover:text-blue-700">
          &larr; All Brands
        </Link>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl"
          style={{ backgroundColor: brand.color }}
        >
          {brand.name[0]}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{brand.name}</h1>
          <p className="text-sm text-gray-500">
            Founded {brand.founded} &middot; {brand.headquarters}
          </p>
        </div>
      </div>
      <p className="text-gray-600 mb-8 max-w-3xl">{brand.description}</p>

      <h2 className="text-xl font-semibold text-gray-900 mb-6">Product Lines ({products.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/brands/${brandSlug}/${product.slug}`}
            className="block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <span className="text-xs font-medium text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">
                {product.collection}
              </span>
            </div>
            <div className="space-y-1.5 text-sm text-gray-600">
              <p>Material: <span className="capitalize">{product.material_type}</span></p>
              <p>From ${product.price_per_sqft.toFixed(2)}/sq ft</p>
              <p>{product.warranty_structural}-year structural warranty</p>
              <p>{product.colors_count} colors</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              {product.special_features.slice(0, 2).map((f) => (
                <span key={f} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                  {f}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}
