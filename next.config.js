/** @type {import('next').NextConfig} */
const nextBuildId = require("next-build-id");
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    imageSizes: [16, 32, 48, 52, 72, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1180, 1920, 2360],
    formats: ['image/avif', 'image/webp'],
    domains: [
      
    ],
  }
}
module.exports = nextConfig
