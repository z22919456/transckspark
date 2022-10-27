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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        potocal: 'https',
        hostname: '*.amazonaws.com',
      }
    ],
    // unoptimized: !!process.env.IMAGE_OPTIMIZED_SKIP
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined, // for github page
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined // for github page
}

module.exports = nextConfig
