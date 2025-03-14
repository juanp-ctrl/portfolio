import type { NextConfig } from 'next'
const { i18n } = require('./next-i18next.config')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
}

export default nextConfig
