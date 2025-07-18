import type { NextConfig } from 'next'
const { i18n } = require('./next-i18next.config.js')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n,
  async headers() {
    return [
      {
        source:
          '/((?!api|_next|sitemap.xml|robots.txt|favicon|images|fonts|cv|favicon.ico).*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
    ]
  },
}

export default nextConfig
