import { buildComparisonTable } from "@/lib/compare"
import { Product } from "@/lib/products"
import AffiliateLink from "./AffiliateLink"

export default function CompareTable({ products }: { products: Product[] }) {
  const rows = buildComparisonTable(products)

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 w-48">Specification</th>
            {products.map((p) => (
              <th key={p.id} className="py-3 px-4 text-left text-sm font-semibold text-gray-700 min-w-[200px]">
                {p.name}
                <div className="text-xs font-normal text-gray-500 mt-1 capitalize">{p.brand}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="py-2 px-4 text-sm font-medium text-gray-600">{row.label}</td>
              {row.values.map((val, j) => (
                <td key={j} className="py-2 px-4 text-sm text-gray-900">
                  {val ?? "—"}
                </td>
              ))}
            </tr>
          ))}
          <tr className="bg-white">
            <td className="py-3 px-4 text-sm font-medium text-gray-600">Buy</td>
            {products.map((p) => (
              <td key={p.id} className="py-3 px-4">
                <div className="flex flex-col gap-1.5">
                  {p.affiliate_links.homedepot && (
                    <AffiliateLink href={p.affiliate_links.homedepot} store="homedepot" />
                  )}
                  {p.affiliate_links.lowes && (
                    <AffiliateLink href={p.affiliate_links.lowes} store="lowes" />
                  )}
                  {p.affiliate_links.amazon && (
                    <AffiliateLink href={p.affiliate_links.amazon} store="amazon" />
                  )}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
