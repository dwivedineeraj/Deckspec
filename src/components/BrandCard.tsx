import Link from "next/link"
import { Brand } from "@/lib/products"

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div
        className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-lg"
        style={{ backgroundColor: brand.color }}
      >
        {brand.name[0]}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{brand.name}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{brand.description}</p>
    </Link>
  )
}
