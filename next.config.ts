import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://ecommerce-app-backend.up.railway.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
