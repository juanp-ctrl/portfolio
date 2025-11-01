import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getLocaleFromCookie } from '@/lib/metadata'
import NotFoundClient from '@/components/NotFoundClient'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookie()
  const t = await getTranslations({ locale, namespace: '404' })

  return {
    title: t('seo_title'),
    description: t('seo_description'),
    robots: {
      index: false, // Don't index 404 pages
      follow: true,
    },
    openGraph: {
      title: t('seo_title'),
      description: t('seo_description'),
      url: 'https://www.juanpablojimenez.dev/404',
    },
    twitter: {
      title: t('seo_title'),
      description: t('seo_description'),
    },
  }
}

export default function NotFound() {
  return <NotFoundClient />
}
