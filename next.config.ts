import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/antoine-stephan-website',
  assetPrefix: '/antoine-stephan-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
