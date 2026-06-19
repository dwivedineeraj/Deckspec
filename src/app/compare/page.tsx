import Link from "next/link"
import { getAllProducts, getProductById } from "@/lib/products"
import CompareTable from "@/components/CompareTable"

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ p1?: string; p2?: string; p3?: string; p4?: string }>
}) {
  const allProducts = getAllProducts()
  const sp = await searchParams
  const ids = [sp.p1, sp.p2, sp.p3, sp.p4].filter(Boolean) as string[]
  const selected = ids.map((id) => getProductById(id)).filter(Boolean) as ReturnType<typeof getAllProducts>

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Compare Decking Products</h1>
      <p className="text-gray-600 mb-8">
        Select 2-4 products below to compare them side by side across all specifications.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" method="GET" action="/compare">
          {[1, 2, 3, 4].map((i) => {
            const key = `p${i}` as "p1" | "p2" | "p3" | "p4"
            return (
              <div key={i}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product {i}
                </label>
                <select
                  name={key}
                  defaultValue={sp[key] || ""}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a product...</option>
                  {allProducts.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.brand})
                    </option>
                  ))}
                </select>
              </div>
            )
          })}
          <div className="sm:col-span-2 lg:col-span-4 flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Compare
            </button>
          </div>
        </form>
      </div>

      {selected.length >= 2 && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
          <CompareTable products={selected} />
        </div>
      )}

      {selected.length < 2 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">Select at least 2 products to compare</p>
        </div>
      )}
    </div>
  )
}
