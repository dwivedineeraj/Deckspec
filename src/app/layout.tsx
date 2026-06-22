import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import ErrorBoundary from "@/components/ErrorBoundary"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteName = "CompositeChoice — Compare Decking Materials Side by Side"
const siteDescription =
  "Compare composite and PVC decking brands like Trex, TimberTech, Fiberon, Deckorators, and MoistureShield side by side. Find specs, prices, and where to buy."

const ogImage = { url: "/og-image.png", width: 1200, height: 630 }

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: "%s | CompositeChoice",
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    type: "website",
    siteName: "CompositeChoice",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [ogImage],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="prefetch" href="/brands" />
        <link rel="prefetch" href="/compare" />
        <link rel="prefetch" href="/guides" />
      </head>
      <body className="min-h-full bg-white text-gray-900">
        <main className="flex-1">
          <ErrorBoundary>{children}</ErrorBoundary>
        </main>
      </body>
    </html>
  )
}
