import type { Metadata } from "next"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
}

export default function DisclosurePage() {
  return (
    <>
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
        <h1>Affiliate Disclosure</h1>
        <p className="text-sm text-gray-500">Last updated: June 2026</p>

        <p>
          In accordance with the Federal Trade Commission (FTC) guidelines, we want you to know that CompositeChoice participates in affiliate marketing programs.
        </p>

        <h2>How Affiliate Links Work</h2>
        <p>
          Some of the links on this website are affiliate links. If you click on an affiliate link and make a purchase, we may receive a small commission at no additional cost to you. These commissions help us maintain and improve the site.
        </p>

        <h2>Programs We Participate In</h2>
        <ul>
          <li><strong>Amazon Services LLC Associates Program</strong> — As an Amazon Associate, we earn from qualifying purchases.</li>
          <li><strong>Home Depot Affiliate Program</strong> (via Impact)</li>
          <li><strong>Lowe's Affiliate Program</strong> (via CJ Affiliate)</li>
        </ul>

        <h2>Our Commitment</h2>
        <p>
          Affiliate relationships do not influence our product rankings, reviews, or comparisons. We evaluate products based on specifications, pricing, and warranties — not commission rates. All links are marked with <code>rel="sponsored"</code> where applicable.
        </p>

        <h2>Questions</h2>
        <p>
          If you have questions about our affiliate relationships, please open an issue on our <a href="https://github.com/dwivedineeraj/Deckspec">GitHub repository</a>.
        </p>
      </div>
    </>
  )
}
