export const affiliateIds: Record<string, string> = {
  amazon: "morebitsoluti-20",
  homedepot: "deckcompare",
  lowes: "deckcompare",
}

const amazonPattern = /^(https?:\/\/(?:www\.)?amazon\.(?:com|ca|co\.uk|de|fr|es|it|jp|in)\/.*)/
const homedepotPattern = /^(https?:\/\/(?:www\.)?homedepot\.com\/.*)/
const lowesPattern = /^(https?:\/\/(?:www\.)?lowes\.com\/.*)/

export function addAffiliateTags(href: string, store: string): string {
  const id = affiliateIds[store]
  if (!id) return href

  if (store === "amazon" && amazonPattern.test(href)) {
    const separator = href.includes("?") ? "&" : "?"
    return `${href}${separator}tag=${id}`
  }

  if (store === "homedepot" && homedepotPattern.test(href)) {
    const separator = href.includes("?") ? "&" : "?"
    return `${href}${separator}irgwc=1&irclickid=${id}`
  }

  if (store === "lowes" && lowesPattern.test(href)) {
    const separator = href.includes("?") ? "&" : "?"
    return `${href}${separator}cid=cj&sid=${id}`
  }

  return href
}
