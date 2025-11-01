import type { Metadata } from 'next'
import type React from 'react'
import { getTranslations } from 'next-intl/server'
import { getLocaleFromCookie, generatePageMetadata } from '@/lib/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookie()
  const t = await getTranslations({ locale, namespace: 'seo' })
  const aboutT = await getTranslations({ locale, namespace: 'about' })

  return generatePageMetadata({
    title: t('about_title'),
    description: aboutT('about_description'),
    path: '/about',
    ogTitle: t('about_og_title'),
    ogDescription: aboutT('about_description'),
    keywords: t('keywords_about').split(', '),
  })
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

