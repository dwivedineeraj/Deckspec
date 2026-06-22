import type { Metadata } from "next"
import { Suspense } from "react"
import HomeContent from "./home-content"

export const metadata: Metadata = {
  title: "CompositeChoice — Decking Material Comparison Tool",
  description:
    "Compare composite and PVC decking brands like Trex, TimberTech, Fiberon, Deckorators, and MoistureShield side by side. Find specs, prices, and where to buy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CompositeChoice — Decking Material Comparison Tool",
    description:
      "Compare composite and PVC decking brands like Trex, TimberTech, Fiberon, Deckorators, and MoistureShield side by side. Find specs, prices, and where to buy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CompositeChoice — Decking Material Comparison Tool",
    description:
      "Compare composite and PVC decking brands like Trex, TimberTech, Fiberon, Deckorators, and MoistureShield side by side. Find specs, prices, and where to buy.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://compositechoice.com" },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-gray-400">Loading...</p>
        </div>
      }>
        <HomeContent />
      </Suspense>
    </>
  )
}
