import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
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
      <body className="min-h-full bg-white text-gray-900">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
