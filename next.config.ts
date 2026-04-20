import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/antoine-stephan-website' : '',
  assetPrefix: isProd ? '/antoine-stephan-website' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
