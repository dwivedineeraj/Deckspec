import Link from "next/link"

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
]

export default function GuidesPage() {
  return (
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
  )
}
