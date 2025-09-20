import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/qr-code-component',
  assetPrefix: '/qr-code-component/',
  images: {
    unoptimized: true
  }
}

export default nextConfig;
