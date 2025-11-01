import type { Metadata } from 'next'
import type React from 'react'
import { getTranslations } from 'next-intl/server'
import { getLocaleFromCookie, generatePageMetadata } from '@/lib/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookie()
  const t = await getTranslations({ locale, namespace: 'seo' })
  const contactT = await getTranslations({ locale, namespace: 'contact' })

  return generatePageMetadata({
    title: t('contact_title'),
    description: contactT('contact_description'),
    path: '/contact',
    ogTitle: t('contact_og_title'),
    ogDescription: contactT('contact_description'),
    keywords: t('keywords_contact').split(', '),
  })
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

