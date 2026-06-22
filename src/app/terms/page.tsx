import type { Metadata } from "next"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Terms of Service",
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
        <h1>Terms of Service</h1>
        <p className="text-sm text-gray-500">Last updated: June 2026</p>

        <h2>Use of Site</h2>
        <p>
          The information on CompositeChoice is provided for general informational and comparison purposes only. While we strive for accuracy, product specifications, pricing, and availability may change without notice.
        </p>

        <h2>Pricing &amp; Availability</h2>
        <p>
          All prices listed are manufacturer suggested retail prices (MSRP) and may not reflect current market pricing. Actual prices vary by retailer, region, and time of purchase. Always verify pricing with the retailer before making a purchase decision.
        </p>

        <h2>Affiliate Relationships</h2>
        <p>
          CompositeChoice participates in affiliate marketing programs. When you click on an affiliate link and make a purchase, we may earn a commission at no additional cost to you. This does not influence our product rankings or recommendations.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          The content on this site is not a substitute for professional contractor advice, structural engineering assessment, or building code compliance review. Always consult qualified professionals for your decking project.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          CompositeChoice shall not be liable for any damages arising from the use of or inability to use the information on this site, including but not limited to incorrect product selection, cost overruns, or installation errors.
        </p>

        <h2>Changes</h2>
        <p>
          We reserve the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.
        </p>
      </div>
    </>
  )
}
