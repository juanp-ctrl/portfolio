import type { NextConfig } from 'next'
const { i18n } = require('./next-i18next.config.js')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n,
}

export default nextConfig
