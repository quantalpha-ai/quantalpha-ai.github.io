import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  basePath: "",
  assetPrefix: "./",
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
