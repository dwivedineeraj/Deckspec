import Link from "next/link"
import { notFound } from "next/navigation"
import { getBrandBySlug, getProductsByBrand, getAllProducts } from "@/lib/products"
import SpecTable from "@/components/SpecTable"
import CompareTable from "@/components/CompareTable"
import AffiliateLink from "@/components/AffiliateLink"

export function generateStaticParams() {
  return getAllProducts().map((p) => ({
    brand: p.brand,
    product: p.slug,
  }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ brand: string; product: string }>
}) {
  const { brand: brandSlug, product: productSlug } = await params
  const brand = getBrandBySlug(brandSlug)
  if (!brand) notFound()

  const products = getProductsByBrand(brandSlug)
  const product = products.find((p) => p.slug === productSlug)
  if (!product) notFound()

  const similar = getAllProducts()
    .filter((p) => p.id !== product.id && p.material_type === product.material_type)
    .sort((a, b) => Math.abs(a.price_per_sqft - product.price_per_sqft) - Math.abs(b.price_per_sqft - product.price_per_sqft))
    .slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-6 text-sm">
        <Link href="/brands" className="text-blue-600 hover:text-blue-700">
          Brands
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href={`/brands/${brandSlug}`} className="text-blue-600 hover:text-blue-700">
          {brand.name}
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">{product.name}</span>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: brand.color }}
        >
          {brand.name[0]}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{brand.name} {product.name}</h1>
          <p className="text-gray-500 text-sm capitalize">{product.collection} &middot; {product.material_type} decking</p>
        </div>
      </div>

      <p className="text-gray-600 max-w-3xl mb-8">{product.description}</p>

      <div className="flex flex-wrap gap-3 mb-10">
        {product.affiliate_links.homedepot && (
          <AffiliateLink href={product.affiliate_links.homedepot} store="homedepot" />
        )}
        {product.affiliate_links.lowes && (
          <AffiliateLink href={product.affiliate_links.lowes} store="lowes" />
        )}
        {product.affiliate_links.amazon && (
          <AffiliateLink href={product.affiliate_links.amazon} store="amazon" />
        )}
        {!product.affiliate_links.homedepot && !product.affiliate_links.lowes && !product.affiliate_links.amazon && (
          <p className="text-sm text-gray-400 italic">Check manufacturer website for purchasing options</p>
        )}
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h2>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
        <SpecTable product={product} />
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Colors</h2>
      <div className="flex flex-wrap gap-2 mb-12">
        {product.colors.map((color) => (
          <span
            key={color}
            className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700"
          >
            {color}
          </span>
        ))}
      </div>

      {similar.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Compare with Similar Products</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
            <CompareTable products={[product, ...similar]} />
          </div>
        </div>
      )}

      <div className="text-center border-t border-gray-200 pt-8">
        <Link
          href="/compare"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open Full Comparison Tool
        </Link>
      </div>
    </div>
  )
}
