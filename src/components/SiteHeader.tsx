import Link from "next/link"

export default function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          CompositeChoice
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/brands" prefetch={true} className="hover:text-gray-900 transition-colors">
            Brands
          </Link>
          <Link href="/compare" prefetch={true} className="hover:text-gray-900 transition-colors">
            Compare
          </Link>
          <Link href="/guides" prefetch={true} className="hover:text-gray-900 transition-colors">
            Guides
          </Link>
        </nav>
      </div>
    </header>
  )
}
