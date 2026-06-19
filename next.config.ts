import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true"

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGithubActions && {
    basePath: "/Deckspec",
    assetPrefix: "/Deckspec/",
  }),
}

export default nextConfig;
