import type { Metadata } from "next"
import { Suspense } from "react"
import CompareContent from "./compare-content"

export const metadata: Metadata = {
  title: "Compare Decking Products Side by Side",
  description:
    "Select 2-4 composite or PVC decking products and compare them across all specifications including price, warranty, colors, and material features.",
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: "Compare Decking Products Side by Side | CompositeChoice",
    description:
      "Select 2-4 composite or PVC decking products and compare them across all specifications including price, warranty, colors, and material features.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Decking Products Side by Side | CompositeChoice",
    description:
      "Select 2-4 composite or PVC decking products and compare them across all specifications including price, warranty, colors, and material features.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://compositechoice.com" },
    { "@type": "ListItem", position: 2, name: "Compare", item: "https://compositechoice.com/compare" },
  ],
}

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-center text-gray-400">Loading...</div>}>
        <CompareContent />
      </Suspense>
    </>
  )
}
