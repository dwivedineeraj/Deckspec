import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "DeckCompare — Compare Decking Materials Side by Side",
    template: "%s | DeckCompare",
  },
  description:
    "Compare composite and PVC decking brands like Trex, TimberTech, Fiberon, Deckorators, and MoistureShield side by side. Find specs, prices, and where to buy.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <header className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              DeckCompare
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link href="/brands" className="hover:text-gray-900 transition-colors">
                Brands
              </Link>
              <Link href="/compare" className="hover:text-gray-900 transition-colors">
                Compare
              </Link>
              <Link href="/guides" className="hover:text-gray-900 transition-colors">
                Guides
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-gray-500">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <span className="font-semibold text-gray-700">DeckCompare</span>
                <p className="mt-1">Helping homeowners and contractors choose the right decking material.</p>
              </div>
              <div className="flex gap-6">
                <Link href="/brands" className="hover:text-gray-700 transition-colors">
                  Brands
                </Link>
                <Link href="/compare" className="hover:text-gray-700 transition-colors">
                  Compare
                </Link>
                <Link href="/guides" className="hover:text-gray-700 transition-colors">
                  Guides
                </Link>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-100 pt-4 text-xs">
              <p>
                Prices and specifications are approximate and may vary by region and retailer. Always verify with the
                manufacturer. Some links are affiliate links.
              </p>
              <p className="mt-1">&copy; {new Date().getFullYear()} DeckCompare. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
