import type { Metadata } from "next"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Privacy Policy",
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last updated: June 2026</p>

        <h2>Information We Collect</h2>
        <p>
          CompositeChoice ("we," "our," "us") operates the website at compositechoice.com. We collect minimal information to operate and improve our service.
        </p>
        <h3>Automatically Collected Data</h3>
        <p>
          We use Google Analytics to understand how visitors use our site. This collects anonymized data including pages visited, time spent, browser type, and general geographic region. No personally identifiable information is collected through analytics.
        </p>
        <h3>Affiliate Links</h3>
        <p>
          Our site contains affiliate links to Amazon, Home Depot, and Lowe's. When you click these links and make a purchase, the retailer may track the referral through cookies. We do not receive any personal information from these transactions.
        </p>

        <h2>Cookies</h2>
        <p>
          Google Analytics uses cookies to distinguish unique visitors. Affiliate programs may set cookies to attribute sales. You can disable cookies in your browser settings, though this may affect site functionality.
        </p>

        <h2>Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or transfer your personal information to outside parties. This excludes trusted third parties who assist in operating our website (e.g., Google Analytics, GitHub Pages) who agree to keep information confidential.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          CompositeChoice participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. We also participate in affiliate programs with Home Depot (Impact) and Lowe's (CJ Affiliate).
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this privacy policy, please open an issue on our <a href="https://github.com/dwivedineeraj/Deckspec">GitHub repository</a>.
        </p>
      </div>
    </>
  )
}
