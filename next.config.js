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
  basePath:  '/transckspark',
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
