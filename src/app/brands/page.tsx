import Link from "next/link"
import type { Metadata } from "next"
import BrandCard from "@/components/BrandCard"
import SiteHeader from "@/components/SiteHeader"
import { getBrands } from "@/lib/products"

export const metadata: Metadata = {
  title: "Decking Brands — Compare Composite & PVC Manufacturers",
  description:
    "Browse decking products by brand. Compare Trex, TimberTech, Fiberon, Deckorators, MoistureShield, and Azek side by side.",
  alternates: {
    canonical: "/brands",
  },
  openGraph: {
    title: "Decking Brands — Compare Composite & PVC Manufacturers | DeckCompare",
    description:
      "Browse decking products by brand. Compare Trex, TimberTech, Fiberon, Deckorators, MoistureShield, and Azek side by side.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decking Brands — Compare Composite & PVC Manufacturers | DeckCompare",
    description:
      "Browse decking products by brand. Compare Trex, TimberTech, Fiberon, Deckorators, MoistureShield, and Azek side by side.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://deckcompare.com" },
    { "@type": "ListItem", position: 2, name: "Brands", item: "https://deckcompare.com/brands" },
  ],
}

export default function BrandsPage() {
  const brands = getBrands()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Decking Brands</h1>
      <p className="text-gray-600 mb-8">Browse decking products by brand. Each brand offers multiple product lines at different price points.</p>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">All Brands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
    </>
  )
}
