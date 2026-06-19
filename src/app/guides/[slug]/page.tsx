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
  "trex-vs-timbertech-vs-fiberon": {
    title: "Trex vs TimberTech vs Fiberon: Which Decking Brand Is Best?",
    content: [
      "If you're shopping for composite decking in 2026, you'll quickly narrow your search to the three biggest names: Trex, TimberTech, and Fiberon. Together they account for the majority of North American composite and PVC decking sales. But picking between them isn't straightforward — all three overlap on price, warranties, and features.",
      "## Trex: The Market Leader",
      "Trex is the world's largest wood-alternative decking manufacturer, using 95% recycled materials. Their lineup spans five product lines from entry-level to luxury. **Trex Enhance** ($4–$7/sq ft) is the best-selling entry composite with 12 colors. **Trex Select** ($6–$8/sq ft) offers a solid core at a mid price. **Trex Transcend** ($8–$11/sq ft) delivers premium deep wood-grain and excellent scratch resistance. **Trex Transcend Lineage** ($10–$13/sq ft) adds heat-mitigating SunComfortable technology with a 50-year warranty. **Trex Signature** ($13–$17/sq ft) is the luxury line with photorealistic woodgrain.",
      "**Best for:** Eco-conscious buyers, largest color selection, and strong brand recognition for resale value.",
      "## TimberTech: Premium Aesthetics",
      "TimberTech (owned by Azek Building Products) offers both capped composite and premium PVC decking. Their standout feature is unmatched wood-grain realism. **TimberTech Terrain/Terrain+** ($5–$8/sq ft) is entry composite with four-sided capping. **TimberTech Legacy** ($8–$10/sq ft) has an artisanal hand-scraped finish. **TimberTech Reserve** ($8–$10/sq ft) offers a reclaimed-wood look. **Azek Harvest** ($7–$9/sq ft) is entry PVC. **Azek Landmark** ($10–$13/sq ft) features crosscut cathedral grain. **Azek Vintage** ($12–$16/sq ft) is the flagship PVC with wire-brushed exotic hardwood finish, Cool Touch Technology, and Class A fire rating.",
      "**Best for:** Most realistic wood look, fire-rated materials for WUI zones, and moisture-prone sites where PVC excels.",
      "## Fiberon: Best Bang for the Buck",
      "Fiberon consistently undercuts Trex and TimberTech by $1–$2/sq ft at comparable tiers with 94% recycled content. **Fiberon Concordia** ($2.80–$3.50/sq ft) is the cheapest capped composite available. **Fiberon Good Life** ($3.20–$4/sq ft) offers the best value with a 30-year warranty and multi-tonal colors. **Fiberon Promenade** ($4.50–$5.50/sq ft) is mid-range solid-core. **Fiberon ArmorGuard** ($5–$6/sq ft) adds enhanced scratch resistance. **Fiberon Sanctuary** ($5.50–$6.50/sq ft) offers premium multi-tonal colors. **Fiberon Paramount** ($7.50–$9/sq ft) is premium capped PVC with a Lifetime structural warranty.",
      "**Best for:** Budget-conscious buyers, highest recycled content, and projects where every dollar counts.",
      "## Which Brand Should You Choose?",
      "Choose **Trex** for the largest color selection and eco-friendly manufacturing. Choose **TimberTech/Azek** for the most realistic wood grain and PVC's moisture resistance. Choose **Fiberon** if budget is your primary concern. All three brands are excellent — your decision should come down to which specific product line fits your budget and performance requirements.",
      "Compare any two products side by side using our [comparison tool](/compare).",
    ],
  },
  "best-budget-decking-2026": {
    title: "Best Budget Decking Materials in 2026: Quality Under $5/sq ft",
    content: [
      "Building a deck doesn't have to break the bank. In 2026, there are more affordable composite options than ever, with several quality products under $5 per square foot.",
      "## Best Budget Products Ranked",
      "**Fiberon Concordia** ($2.80/sq ft) is the cheapest capped composite on the market. It uses a scalloped profile to reduce weight and cost while maintaining a three-sided cap layer. Available in 5 colors with a 25-year warranty. Best for large decks where material volume drives up cost.",
      "**MoistureShield Vantage** ($2.80/sq ft) is uncapped but has a solid core with legendary moisture resistance — zero structural field failures in 30+ years. The 20-year warranty is short, but structural reliability is proven. Best for ground-level and wet applications.",
      "**Trex Enhance** ($3.20/sq ft) is the most popular budget decking in America with 12 colors across Basics and Naturals sub-lines, including multi-tonal options that look more expensive. 25-year warranty. Widely available at Home Depot.",
      "**Fiberon Good Life** ($3.20/sq ft) is the best all-around budget composite. Three-sided PermaTech capping, 94% recycled content, and a 30-year warranty — 5 years longer than Trex Enhance. Multi-tonal Escapes colors rival mid-range boards. Best value pick.",
      "**Deckorators Venture** ($3.20/sq ft) offers a capped surface at an entry price point with 4 solid colors and a 25-year warranty. Best for contractors needing a reliable budget option.",
      "**TimberTech Premier** ($3.20/sq ft) features a painted-wood look in 5 earthy colors that stand out from typical brown/gray offerings. Scalloped profile keeps weight and cost down.",
      "## Hidden Budget Considerations",
      "Hidden fasteners add $0.50–$1.00/sq ft — budget builds often use face screws with color-matched plugs. Framing (pressure-treated joists) runs $2–$4/sq ft regardless of deck board choice. Professional installation adds $15–$30/sq ft. DIY can save 40–60%.",
      "## The Bottom Line",
      "**Fiberon Good Life at $3.20/sq ft** is the best value: longest warranty (30 years), highest recycled content (94%), and multi-tonal colors. For Trex loyalists, **Trex Enhance at $3.20/sq ft** offers the widest color selection. And for the absolute lowest price, **Fiberon Concordia at $2.80/sq ft** is the cheapest capped composite that still has a protective layer.",
    ],
  },
  "how-to-install-composite-decking": {
    title: "How to Install Composite Decking: A Step-by-Step DIY Guide",
    content: [
      "Installing composite decking can save you 40–60% of the total project cost. This guide covers the full installation process for capped composite and PVC decking from Trex, TimberTech, and Fiberon.",
      "## Step 1: Prepare the Substructure",
      "Most composite brands require 16\" on-center joist spacing. Apply butyl joist tape to every joist top to prevent moisture damage. The frame must be flat — any high or low spots will telegraph through the deck boards.",
      "## Step 2: Acclimate the Boards",
      "Stack boards in the shade for 24–48 hours before installation to reach ambient temperature and moisture equilibrium.",
      "## Step 3: Plan Your Layout",
      "Stagger end joints by at least 24\" in adjacent rows. At the house side, leave a 1/4\" – 1/2\" expansion gap. At the outer edge, plan for 1/4\" between the board and fascia.",
      "## Step 4: Install the First Board",
      "Position the grooved edge outward. Pre-drill screw holes at the house-side edge. Use a chalk line to keep the board perfectly straight. Leave 1/4\" – 3/8\" gap at the house for expansion.",
      "## Step 5: Install Hidden Fasteners",
      "Insert clips into the groove of the installed board. Secure with the manufacturer's recommended screws. Don't overtighten. For PVC decking (Azek, Fiberon Paramount), leave wider gaps — PVC expands and contracts more than composite.",
      "## Step 6: Continue Laying Boards",
      "Lay the next board, tapping it gently with a rubber mallet to seat it against the clips. Check gaps with a spacer. Every few rows, measure from the house wall to ensure alignment hasn't drifted.",
      "## Step 7: Cut and Fit End Joints",
      "Cut both ends square. Support both sides of the joint on a single joist. Leave a 1/8\" – 1/4\" gap between board ends. Use an 80-tooth triple-chip blade for the cleanest cut.",
      "## Common Mistakes to Avoid",
      "Overtightening screws (use a clutch setting), skipping joist tape (causes rot), using wrong fasteners (rust or loose clips), skipping expansion gaps (buckling in summer), cutting with a standard blade (chipped edges).",
      "When to call a pro: If your project is larger than 500 sq ft, has complex angles, multiple levels, or built-in seating — the cost of fixing mistakes often exceeds labor savings.",
    ],
  },
  "decking-maintenance-guide": {
    title: "Composite & PVC Decking Maintenance Guide",
    content: [
      "The biggest selling point of composite and PVC decking is low maintenance. But 'low maintenance' doesn't mean 'no maintenance.' With the right care, your deck stays beautiful for decades.",
      "## Routine Cleaning (Every 2–4 Months)",
      "Sweep away debris. Rinse with a garden hose. Use mild soap and a soft-bristle brush for stuck-on dirt. Rinse thoroughly and let air dry.",
      "## Deep Cleaning (Twice a Year)",
      "In spring, clean winter's accumulation of salt and grime. In fall, remove leaves and pollen. Use manufacturer-recommended cleaners like Trex Cleaner or oxygen bleach. Apply with a pump sprayer, let sit 5–10 minutes, scrub gently, and rinse.",
      "## Pressure Washer Warning",
      "Use extreme caution. Stay at least 12\" from the board surface. Use a 40° or 60° nozzle. Keep pressure under 1,500 PSI. Never use a turbo nozzle — it can permanently damage the cap layer and void your warranty.",
      "## Stain Removal Guide",
      "Food and drink: warm water + mild soap. Grease and oil: degreaser or dish soap. Wine and coffee: oxygen bleach solution. Rust: oxalic acid cleaner. Mold and mildew: 50/50 vinegar-water or bleach solution. Never use acetone, MEK, or paint thinners on composite decking.",
      "## Scratch Prevention",
      "Use felt pads under furniture legs. Lift chairs and grills — don't drag them. Keep pet nails trimmed. Trex Signature and TimberTech Vintage have the best scratch resistance. Minor scratches often fade as UV exposure blends the cap layer.",
      "## Seasonal Tips",
      "Winter: Use a plastic shovel for snow. Avoid ice melt with calcium chloride (damages cap). Rinse salt residue after thaw. Summer: Dark colors absorb heat — consider heat-mitigating products like Trex Transcend Lineage (SunComfortable) or TimberTech Cool Touch PVC for hot climates.",
      "Compare low-maintenance products on our [comparison page](/compare).",
    ],
  },
  "is-composite-decking-worth-the-cost": {
    title: "Is Composite Decking Worth the Cost? ROI vs Pressure-Treated Wood",
    content: [
      "The question every homeowner asks: pay more upfront for composite or save now with pressure-treated wood? Here's the data-driven answer.",
      "## 20-Year Total Cost of Ownership",
      "A pressure-treated deck costs roughly $23,000–$26,000 over 20 years when you account for staining every 2–3 years ($300–$450 per session DIY) and full replacement at year 12–15. An entry-level composite deck like Trex Enhance or Fiberon Good Life costs $11,000–$13,500 over 20 years — roughly half the total cost of wood, even though the upfront price is similar or slightly higher. Premium composite like Trex Transcend or TimberTech Legacy costs more upfront but still beats wood on 20-year total cost.",
      "## Resale Value",
      "According to Remodeling Magazine's 2025 Cost vs. Value Report, wood deck additions recover 66.8% of cost at resale while composite recovers 54.2%. Wood wins on percentage because it starts cheaper, but in absolute dollars, composite adds more to home value ($13,131 vs $11,390). Real estate agents report that composite decks are increasingly expected by buyers in the $400K+ home range.",
      "## Maintenance Time",
      "Pressure-treated wood: 15–25 hours per year (annual washing, staining every 2–3 years, spot repairs). Composite: 2–5 hours per year (sweeping, twice-yearly wash). If you value your time at $50/hour, the 20-year maintenance savings alone are worth $12,000–$20,000 for composite.",
      "## Climate Factors Favoring Composite",
      "High humidity (wood warps and rots faster), wildfire zones (PVC offers Class A fire ratings), poolside (PVC is 100% waterproof), and coastal areas (salt air accelerates wood decay).",
      "## When Wood Still Makes Sense",
      "Short ownership (selling in 3–5 years), rental properties, and strict upfront budgets where the choice is a small wood deck vs no deck at all.",
      "## The Verdict",
      "Composite decking is worth the cost if you plan to stay 7+ years, value your weekends, and can handle the $1,500–$5,000 upfront premium. The break-even point is typically year 7–10, when cumulative wood maintenance costs surpass the initial composite premium. After that, composite is pure savings.",
      "For most homeowners building in 2026, the 20-year cost math favors composite. Compare products on our [comparison page](/compare) to explore your options.",
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
