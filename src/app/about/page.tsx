import type { Metadata } from "next"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
        <h1>About CompositeChoice</h1>

        <p>
          CompositeChoice helps homeowners compare composite and PVC decking products side by side. We aggregate specifications, pricing, and warranty data across major brands so you can make an informed decision.
        </p>

        <h2>What We Cover</h2>
        <ul>
          <li>33 decking products across 6 major brands</li>
          <li>Trex, TimberTech, Azek, Fiberon, Deckorators, MoistureShield</li>
          <li>Price per square foot, warranty terms, scratch resistance, color options</li>
          <li>Side-by-side comparison tool for any product combination</li>
          <li>Educational guides on material types, costs, and selection</li>
        </ul>

        <h2>How We Get Data</h2>
        <p>
          Product specifications are sourced from manufacturer websites and official documentation. Prices are MSRP and may not reflect current retail pricing. We update our data periodically to maintain accuracy.
        </p>

        <h2>Contact</h2>
        <p>
          Found an error or have a suggestion? Open an issue on our <a href="https://github.com/dwivedineeraj/Deckspec">GitHub repository</a>.
        </p>
      </div>
    </>
  )
}
