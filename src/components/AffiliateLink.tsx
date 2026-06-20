import Link from "next/link"
import { addAffiliateTags } from "@/data/affiliates"

interface AffiliateLinkProps {
  href: string | null
  store: string
  children?: React.ReactNode
}

const storeInfo: Record<string, { label: string; color: string }> = {
  amazon: { label: "Amazon", color: "bg-amber-500 hover:bg-amber-600" },
  homedepot: { label: "Home Depot", color: "bg-orange-600 hover:bg-orange-700" },
  lowes: { label: "Lowes", color: "bg-blue-600 hover:bg-blue-700" },
}

export default function AffiliateLink({ href, store, children }: AffiliateLinkProps) {
  if (!href) return null

  const info = storeInfo[store] || { label: store, color: "bg-gray-600 hover:bg-gray-700" }
  const trackedHref = addAffiliateTags(href, store)

  return (
    <Link
      href={trackedHref}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`inline-flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-lg transition-colors ${info.color}`}
    >
      {children || `Buy at ${info.label}`}
    </Link>
  )
}
