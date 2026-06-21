import Link from "next/link"
import type { Metadata } from "next"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Decking Buying Guides & Resources",
  description:
    "Educational content to help you make an informed decision about your decking project — composite vs PVC, cost guides, warranty comparisons, and more.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Decking Buying Guides & Resources | DeckCompare",
    description:
      "Educational content to help you make an informed decision about your decking project — composite vs PVC, cost guides, warranty comparisons, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decking Buying Guides & Resources | DeckCompare",
    description:
      "Educational content to help you make an informed decision about your decking project — composite vs PVC, cost guides, warranty comparisons, and more.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://deckcompare.com" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://deckcompare.com/guides" },
  ],
}

const guides = [
  {
    slug: "composite-vs-pvc-decking",
    title: "Composite vs. PVC Decking: Which Is Right for You?",
    excerpt:
      "The key differences between composite and PVC decking materials, including durability, cost, maintenance, and appearance.",
    category: "Material Guide",
  },
  {
    slug: "how-to-choose-decking-material",
    title: "How to Choose the Right Decking Material for Your Project",
    excerpt:
      "A step-by-step guide to selecting the best decking material based on your budget, climate, and design preferences.",
    category: "Buying Guide",
  },
  {
    slug: "understanding-decking-warranties",
    title: "Understanding Decking Warranties: Fade, Stain & Structural Coverage",
    excerpt:
      "What to look for in decking warranties and how to compare fade, stain, and structural coverage across brands.",
    category: "Educational",
  },
  {
    slug: "composite-decking-cost-guide",
    title: "Composite Decking Cost Guide: What to Expect per Square Foot",
    excerpt:
      "A comprehensive breakdown of composite decking costs by brand and product line, including hidden costs to consider.",
    category: "Buying Guide",
  },
  {
    slug: "trex-vs-timbertech-vs-fiberon",
    title: "Trex vs TimberTech vs Fiberon: Which Decking Brand Is Best?",
    excerpt:
      "Head-to-head comparison of the three biggest composite decking brands — pricing, warranties, color options, and real-world performance.",
    category: "Brand Guide",
  },
  {
    slug: "best-budget-decking-2026",
    title: "Best Budget Decking Materials in 2026: Quality Under $5/sq ft",
    excerpt:
      "Find quality decking under $5 per square foot with real pricing, warranty info, and honest trade-offs for each budget product.",
    category: "Buying Guide",
  },
  {
    slug: "how-to-install-composite-decking",
    title: "How to Install Composite Decking: A Step-by-Step DIY Guide",
    excerpt:
      "Step-by-step instructions for framing, board layout, hidden fasteners, expansion gaps, and finishing your composite deck project.",
    category: "DIY Guide",
  },
  {
    slug: "decking-maintenance-guide",
    title: "Composite & PVC Decking Maintenance Guide",
    excerpt:
      "Keep your deck looking new with seasonal cleaning, stain removal, mold prevention, and care tips for composite and PVC decking.",
    category: "Educational",
  },
  {
    slug: "is-composite-decking-worth-the-cost",
    title: "Is Composite Decking Worth the Cost? ROI vs Pressure-Treated Wood",
    excerpt:
      "A data-driven 20-year cost analysis comparing composite vs pressure-treated wood — upfront costs, maintenance, resale value, and break-even timing.",
    category: "Buying Guide",
  },
  {
    slug: "decking-color-trends-2026",
    title: "Decking Color Trends 2026: What's Hot in Deck Design",
    excerpt:
      "Explore 2026's top decking colors from greys and browns to tropical hues, plus how color choice affects heat reflection and surface temperature.",
    category: "Design Guide",
  },
  {
    slug: "trex-transcend-vs-azek-vintage",
    title: "Trex Transcend vs Azek Vintage: Premium Decking Face-Off",
    excerpt:
      "A head-to-head comparison of the two leading premium decking products — Trex Transcend composite vs Azek Vintage PVC — covering aesthetics, durability, heat, and cost.",
    category: "Brand Guide",
  },
  {
    slug: "best-decking-for-hot-climates",
    title: "Best Decking for Hot Climates: Cool Technologies for Summer Comfort",
    excerpt:
      "Discover the best decking for hot climates with heat-mitigating technologies like Trex SunComfortable and TimberTech Cool Touch, plus color guidance for cooler decks.",
    category: "Buying Guide",
  },
  {
    slug: "decking-for-fire-prone-areas",
    title: "Decking for Fire-Prone Areas: Class A Rated Materials & WUI Compliance",
    excerpt:
      "Guide to fire-rated decking for wildfire zones — Class A products from Azek and Trex Refuge, WUI building codes, and ember-resistant construction tips.",
    category: "Safety Guide",
  },
  {
    slug: "hidden-fasteners-vs-face-screws",
    title: "Hidden Fasteners vs Face Screws: Which Deck Fastening System Is Best?",
    excerpt:
      "Pros and cons of hidden fastener systems versus face screws, including cost differences, installation complexity, and warranty implications for your deck.",
    category: "DIY Guide",
  },
  {
    slug: "fiberon-vs-trex",
    title: "Fiberon vs Trex: Honest Comparison",
    excerpt:
      "A direct head-to-head comparison of Fiberon and Trex decking — pricing, warranties, color options, recycled content, and which brand fits your project best.",
    category: "Brand Guide",
  },
  {
    slug: "when-to-buy-decking",
    title: "When Is the Best Time to Buy Decking?",
    excerpt:
      "Seasonal pricing trends for composite and PVC decking, end-of-season sales, new model year price bumps, and when contractors have availability.",
    category: "Buying Guide",
  },
  {
    slug: "capped-vs-uncapped-composite",
    title: "Capped vs Uncapped Composite: Does It Matter?",
    excerpt:
      "What the cap layer does for moisture, UV, and stain protection — plus when uncapped composite is acceptable for budget builds and covered decks.",
    category: "Educational",
  },
]

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Buying Guides & Resources</h1>
      <p className="text-gray-600 mb-8">
        Educational content to help you make an informed decision about your decking project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded mb-3 inline-block">
              {guide.category}
            </span>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h2>
            <p className="text-sm text-gray-600">{guide.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}
