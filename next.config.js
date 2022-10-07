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
    ignoreBuildErrors: process.env.IMAGE_OPTIMIZED_SKIP
  },
  images: {
    unoptimized: true
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH, // for github page
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH // for github page
}

module.exports = nextConfig
