import type { Metadata } from 'next'
import type React from 'react'
import { getTranslations } from 'next-intl/server'
import { getLocaleFromCookie, generatePageMetadata } from '@/lib/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookie()
  const t = await getTranslations({ locale, namespace: 'seo' })

  return generatePageMetadata({
    title: t('projects_title'),
    description: t('projects_description'),
    path: '/projects',
    ogTitle: t('projects_og_title'),
    ogDescription: t('projects_description'),
    keywords: t('keywords_projects').split(', '),
  })
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
