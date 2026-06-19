import { Product } from "@/lib/products"

export default function SpecTable({ product }: { product: Product }) {
  const rows: [string, string | number][] = [
    ["Brand", product.brand.charAt(0).toUpperCase() + product.brand.slice(1)],
    ["Collection", product.collection],
    ["Material Type", product.material_type],
    ["Construction", product.construction],
    ["Profile", product.profile],
    ["Price per sq ft", `$${product.price_per_sqft.toFixed(2)}`],
    ["Warranty (Fade)", `${product.warranty_fade} years`],
    ["Warranty (Stain)", `${product.warranty_stain} years`],
    ["Warranty (Structural)", `${product.warranty_structural} years`],
    ["Colors Available", product.colors_count],
    ["Scratch Resistance", product.scratch_resistance],
    ["Moisture Resistance", product.moisture_resistance],
    ["Grain Patterns", product.grain_patterns.join(", ")],
    ["Slip Resistance (COF)", product.slip_resistance_crof.toFixed(2)],
    ["Max Joist Spacing", `${product.joist_spacing_max}"`],
    ["Special Features", product.special_features.join(", ") || "None"],
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-gray-200">
              <td className="py-3 pr-4 text-sm font-medium text-gray-600 w-48">{label}</td>
              <td className="py-3 text-sm text-gray-900">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
