import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import SiteHeader from "@/components/SiteHeader"
import { getBrandBySlug, getProductsByBrand, getAllProducts } from "@/lib/products"
import type { Product } from "@/lib/products"
import SpecTable from "@/components/SpecTable"
import CompareTable from "@/components/CompareTable"
import AffiliateLink from "@/components/AffiliateLink"

export function generateStaticParams() {
  return getAllProducts().map((p) => ({
    brand: p.brand,
    product: p.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string; product: string }> }): Promise<Metadata> {
  const { brand: brandSlug, product: productSlug } = await params
  const brand = getBrandBySlug(brandSlug)
  if (!brand) return {}
  const products = getProductsByBrand(brandSlug)
  const product = products.find((p) => p.slug === productSlug)
  if (!product) return {}

  return {
    title: `${brand.name} ${product.name} — Specs, Prices & Reviews`,
    description: product.description,
    alternates: { canonical: `/brands/${brandSlug}/${productSlug}` },
    openGraph: {
      title: `${brand.name} ${product.name} — Specs, Prices & Reviews | CompositeChoice`,
      description: product.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${brand.name} ${product.name} — Specs, Prices & Reviews | CompositeChoice`,
      description: product.description,
    },
  }
}

function productJsonLd(product: Product, brandName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${brandName} ${product.name}`,
    brand: { "@type": "Brand", name: brandName },
    description: product.description,
    category: product.material_type,
    material: product.material_type,
    color: product.colors.join(", "),
    offers: {
      "@type": "Offer",
      price: product.price_per_sqft,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  }
}

function breadcrumbJsonLd(brandSlug: string, brandName: string, productName: string, productSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://compositechoice.com" },
      { "@type": "ListItem", position: 2, name: "Brands", item: "https://compositechoice.com/brands" },
      { "@type": "ListItem", position: 3, name: brandName, item: `https://compositechoice.com/brands/${brandSlug}` },
      { "@type": "ListItem", position: 4, name: productName, item: `https://compositechoice.com/brands/${brandSlug}/${productSlug}` },
    ],
  }
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product, brand.name)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(brandSlug, brand.name, product.name, productSlug)) }}
      />
      <SiteHeader />
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
        <img
          src={`/images/brands/${brandSlug}.svg`}
          alt={brand.name}
          loading="lazy"
          className="h-12 w-auto"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{brand.name} {product.name}</h1>
          <p className="text-gray-500 text-sm capitalize">{product.collection} &middot; {product.material_type} decking</p>
        </div>
      </div>

      <p className="text-gray-600 max-w-3xl mb-8">{product.description}</p>

      <div className="flex flex-wrap gap-3 mb-10">
        {product.affiliate_links.amazon && (
          <AffiliateLink href={product.affiliate_links.amazon} store="amazon" />
        )}
        {!product.affiliate_links.amazon && product.affiliate_links.homedepot && (
          <AffiliateLink href={product.affiliate_links.homedepot} store="homedepot" />
        )}
        {!product.affiliate_links.amazon && product.affiliate_links.lowes && (
          <AffiliateLink href={product.affiliate_links.lowes} store="lowes" />
        )}
        {!product.affiliate_links.amazon && !product.affiliate_links.homedepot && !product.affiliate_links.lowes && (
          <p className="text-sm text-gray-400 italic">Check manufacturer website for purchasing options</p>
        )}
        <p className="text-xs text-gray-400 w-full">*Prices vary by retailer. Affiliate commissions support this site.</p>
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
          <div className="bg-white border border-gray-200 rounded-xl">
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
    </>
  )
}
