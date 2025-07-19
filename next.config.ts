import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Skip ESLint in prod build
  },
};

export default nextConfig;
