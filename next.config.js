/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    deviceSizes: [375, 640, 768, 1024, 1080, 1920],
    // minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.notion.so'
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      }
    ],
    // unoptimized: !!process.env.IMAGE_OPTIMIZED_SKIP
  },
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined, // for github page
  // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined // for github page
}

module.exports = nextConfig
