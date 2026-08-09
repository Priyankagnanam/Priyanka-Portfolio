import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",   // Static HTML export for GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export (no Image Optimization API)
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
