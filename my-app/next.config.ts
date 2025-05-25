import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'matex.hu',
      port: '',
      pathname: '/logo.jpg'
    }]
  },
};

export default nextConfig;
