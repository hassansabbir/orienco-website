import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["*"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "fahim5004.naimulhassan.me",
      },
      {
        protocol: "https",
        hostname: "api.oriencoinc.com",
      },
    ],
  },
};

export default nextConfig;
