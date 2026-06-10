import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.metahub.space",
        pathname: "/poster/**",
      },
    ],
  },
};

export default nextConfig;
