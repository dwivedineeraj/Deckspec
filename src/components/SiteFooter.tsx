import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CompositeChoice</p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-700 transition-colors">Terms</Link>
            <Link href="/disclosure" className="hover:text-gray-700 transition-colors">Disclosure</Link>
            <Link href="/about" className="hover:text-gray-700 transition-colors">About</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
