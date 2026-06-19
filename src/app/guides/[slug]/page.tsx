import Link from "next/link"
import { notFound } from "next/navigation"

const guideContent: Record<string, { title: string; content: string[] }> = {
  "composite-vs-pvc-decking": {
    title: "Composite vs. PVC Decking: Which Is Right for You?",
    content: [
      "When choosing decking material, one of the biggest decisions is between composite (wood-plastic composite) and PVC (polymer) decking. Both offer low maintenance compared to wood, but they have distinct differences.",
      "## What Is Composite Decking?",
      "Composite decking is made from a blend of wood fibers and recycled plastic. Brands like Trex, TimberTech (composite lines), and Fiberon use this formulation. Composite decking typically has a wood-like appearance and feels more natural underfoot. It's generally less expensive than PVC and holds heat differently.",
      "**Pros:** Natural wood look and feel, lower cost than PVC, eco-friendly (made from recycled materials), quieter underfoot.",
      "**Cons:** Can be more susceptible to mold in humid climates (though modern capping helps), may fade more over time, heavier than PVC.",
      "## What Is PVC Decking?",
      "PVC (polyvinyl chloride) decking is made entirely from synthetic polymer. Azek (TimberTech's PVC line) and Fiberon Paramount are leading examples. PVC decking is completely waterproof and offers the best moisture resistance of any decking material.",
      "**Pros:** 100% waterproof, best moisture resistance, lightweight, doesn't support mold or mildew, cooler underfoot with technologies like Cool Touch, Class A fire ratings available.",
      "**Cons:** More expensive than composite, can get hotter in direct sun (especially darker colors), may feel less natural underfoot, can be noisier.",
      "## Which Should You Choose?",
      "**Choose composite if:** You want a natural wood look, are on a moderate budget, and want an eco-friendly option made from recycled materials.",
      "**Choose PVC if:** You're building near water (pool, dock, marina), need maximum moisture resistance, want the best fire rating, or want the lightest-weight boards.",
      "## Price Comparison",
      "Entry-level composite: $2.80-$4.00/sq ft (Fiberon Good Life, Trex Enhance)",
      "Mid-range composite: $4.00-$5.50/sq ft (TimberTech Terrain+, Fiberon Sanctuary)",
      "Premium composite: $5.50-$8.50/sq ft (Trex Transcend, TimberTech Legacy)",
      "Premium PVC: $7.00-$9.00/sq ft (Azek Vintage, Fiberon Paramount)",
      "Remember that installed costs will be higher — typically $15-$30 per square foot installed including substructure.",
    ],
  },
  "how-to-choose-decking-material": {
    title: "How to Choose the Right Decking Material for Your Project",
    content: [
      "Choosing the right decking material can feel overwhelming with so many options. Here's a step-by-step approach to narrow it down.",
      "## Step 1: Set Your Budget",
      "Your budget is the primary factor. Entry-level composites start around $3/sq ft, while premium PVC can exceed $9/sq ft. Remember to factor in installation costs, fasteners, and railings.",
      "**Budget-friendly ($3-$4/sq ft):** Trex Enhance, TimberTech Prime, Fiberon Good Life, Deckorators Venture",
      "**Mid-range ($4-$6/sq ft):** Trex Select, TimberTech Terrain+, Fiberon Sanctuary, Deckorators Vista",
      "**Premium ($6-$9/sq ft):** Trex Transcend, Azek Vintage, Fiberon Paramount, Deckorators Voyage",
      "## Step 2: Consider Your Climate",
      "In hot climates, consider lighter colors or heat-mitigating technologies like Trex's SunComfortable or TimberTech's Cool Touch technology. In humid areas, PVC offers the best mold/mildew resistance. In wildfire-prone areas, look for Class A fire-rated products.",
      "## Step 3: Evaluate Maintenance Requirements",
      "All composite and PVC decking requires far less maintenance than wood. However, PVC is the lowest maintenance — it's completely waterproof and won't support mold. Composites may need occasional cleaning with soap and water.",
      "## Step 4: Choose Your Look",
      "Modern decking offers various grain patterns: cathedral grain (traditional wood look), wire-brushed (exotic hardwoods), hand-scraped (artisan/craftsman), and linear grain (contemporary). Multi-tonal colors provide depth, while solid colors offer a painted look.",
      "## Step 5: Compare Warranties",
      "Warranties range from 25 years (entry-level) to 50 years or lifetime (premium). Higher-tier products typically offer better coverage for fading, staining, and structural defects. A longer warranty often reflects higher quality materials and construction.",
    ],
  },
  "understanding-decking-warranties": {
    title: "Understanding Decking Warranties: Fade, Stain & Structural Coverage",
    content: [
      "Decking warranties can be confusing. Here's what to look for when comparing coverage across brands.",
      "## Fade Warranty",
      "A fade warranty covers color change due to UV exposure. All decking will fade somewhat over time, but premium products with advanced cap technologies resist fading better. Trex and TimberTech offer 50-year fade warranties on their premium lines.",
      "## Stain Warranty",
      "Stain warranties cover discoloration from spills, food, leaves, and other common sources. Modern capped decking has excellent stain resistance, but some colors and materials perform better than others. Lighter colors generally show stains less.",
      "## Structural Warranty",
      "This covers defects like splintering, cracking, rotting, and delamination. Most brands offer 25-50 year structural warranties. MoistureShield boasts zero structural field failures in 30+ years.",
      "## What's Not Covered",
      "Warranties typically don't cover: normal weathering/fading (beyond specified limits), improper installation, misuse or abuse, damage from fire or natural disasters, scratches from normal use, and color variation between batches.",
      "## Pro Tips",
      "- Register your warranty after purchase (many require registration within 30-90 days)",
      "- Keep receipts and records of your purchase",
      "- Follow installation instructions exactly to avoid voiding the warranty",
      "- Some warranties are transferable if you sell your home (adds resale value)",
    ],
  },
  "composite-decking-cost-guide": {
    title: "Composite Decking Cost Guide: What to Expect per Square Foot",
    content: [
      "Understanding the true cost of composite decking helps you budget effectively for your project.",
      "## Material Costs by Tier",
      "Below are estimated material-only costs per square foot. These are board prices only and don't include substructure, fasteners, railings, or installation.",
      "**Value Tier ($2.80-$3.50/sq ft):**",
      "- Fiberon Concordia: $2.80/sq ft",
      "- MoistureShield Vantage: $2.80/sq ft",
      "- Deckorators Venture: $3.20/sq ft",
      "- Trex Enhance: $3.20/sq ft",
      "- Fiberon Good Life: $3.20/sq ft",
      "- TimberTech Premier: $3.20/sq ft",
      "**Mid-Range Tier ($3.50-$5.50/sq ft):**",
      "- TimberTech Prime: $3.50/sq ft",
      "- TimberTech Terrain: $3.80/sq ft",
      "- MoistureShield Elevate: $3.80/sq ft",
      "- Trex Select: $4.20/sq ft",
      "- TimberTech Terrain+: $4.50/sq ft",
      "- MoistureShield Meridian: $4.50/sq ft",
      "- Fiberon Sanctuary: $5.50/sq ft",
      "**Premium Tier ($5.50-$9.00/sq ft):**",
      "- Trex Transcend: $5.80/sq ft",
      "- Deckorators Voyage: $5.50/sq ft",
      "- Trex Transcend Lineage: $6.50/sq ft",
      "- TimberTech Legacy: $6.50/sq ft",
      "- Trex Refuge (PVC): $7.00/sq ft",
      "- Azek Harvest: $7.50/sq ft",
      "- Fiberon Paramount (PVC): $7.50/sq ft",
      "- Trex Signature: $8.50/sq ft",
      "- Azek Vintage: $9.00/sq ft",
      "## Hidden Costs to Consider",
      "- **Fasteners:** Hidden fasteners add $0.50-$1.00/sq ft",
      "- **Railing:** $20-$50+ per linear foot installed",
      "- **Substructure:** If existing substructure needs repair, add $2-$5/sq ft",
      "- **Removal/disposal:** Removing old decking: $2-$5/sq ft",
      "- **Permits:** $100-$500 depending on local requirements",
      "## Total Installed Cost Estimate",
      "Most professionally installed composite decks range from $15-$30 per square foot total. For a 300 sq ft deck, expect $4,500-$9,000 installed.",
      "DIY installation can save 40-60% on labor costs but requires proper tools and know-how.",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(guideContent).map((slug) => ({ slug }))
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guideContent[slug]
  if (!guide) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-6 text-sm">
        <Link href="/guides" className="text-blue-600 hover:text-blue-700">
          &larr; All Guides
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{guide.title}</h1>
      <div className="prose prose-gray max-w-none">
        {guide.content.map((paragraph, i) => {
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={i} className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                {paragraph.replace("## ", "")}
              </h2>
            )
          }
          if (paragraph.startsWith("**")) {
            return (
              <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            )
          }
          return (
            <p key={i} className="text-gray-700 mb-4 leading-relaxed">
              {paragraph}
            </p>
          )
        })}
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/compare" className="text-blue-600 hover:text-blue-700 font-medium">
          Compare decking products now &rarr;
        </Link>
      </div>
    </div>
  )
}
