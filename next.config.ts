import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  basePath: "/quantalpha-ai.github.io",
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
