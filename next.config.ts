import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Gera um pacote enxuto em .next/standalone (usado pelo Dockerfile).
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
