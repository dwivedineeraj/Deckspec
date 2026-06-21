import { getAllProducts, getBrands } from "@/lib/products"
import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://deckcompare.com"

const guideSlugs = [
  "composite-vs-pvc-decking",
  "how-to-choose-decking-material",
  "understanding-decking-warranties",
  "composite-decking-cost-guide",
  "trex-vs-timbertech-vs-fiberon",
  "best-budget-decking-2026",
  "how-to-install-composite-decking",
  "decking-maintenance-guide",
  "is-composite-decking-worth-the-cost",
  "decking-color-trends-2026",
  "trex-transcend-vs-azek-vintage",
  "best-decking-for-hot-climates",
  "decking-for-fire-prone-areas",
  "hidden-fasteners-vs-face-screws",
  "fiberon-vs-trex",
  "when-to-buy-decking",
  "capped-vs-uncapped-composite",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/brands`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ]

  const brandPages: MetadataRoute.Sitemap = getBrands().map((b) => ({
    url: `${baseUrl}/brands/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const productPages: MetadataRoute.Sitemap = getAllProducts().map((p) => ({
    url: `${baseUrl}/brands/${p.brand}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticPages, ...brandPages, ...productPages, ...guidePages]
}
