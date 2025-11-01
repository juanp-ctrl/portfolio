import type { Metadata } from 'next'
import type React from 'react'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '@/styles/globals.css'
import { TransitionProvider } from '@/context/TransitionContext'
import CustomCursor from '@/components/Cursor'
import CookieConsent from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics.tsx'
import TransitionWrapper from '@/components/TransitionWrapper'

const libreBaskerville = localFont({
  src: [
    {
      path: '../../public/fonts/LibreBaskerville-Regular.ttf',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LibreBaskerville-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-libre-baskerville',
})

const josefinSans = localFont({
  src: [
    {
      path: '../../public/fonts/JosefinSans-Light.ttf',
      style: 'light',
    },
    {
      path: '../../public/fonts/JosefinSans-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-josefin-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.juanpablojimenez.dev'),
  title: {
    default: 'Juan Pablo Jiménez - Frontend Developer & Creative Engineer',
    template: '%s | Juan Pablo Jiménez',
  },
  description:
    'Frontend Developer and Creative Engineer from Medellín, Colombia, specializing in React, Next.js, and TypeScript',
  keywords: [
    'frontend developer',
    'react developer',
    'nextjs developer',
    'typescript developer',
    'web developer',
    'UI developer',
    'creative developer',
    'medellín developer',
    'colombia developer',
    'javascript developer',
  ],
  authors: [{ name: 'Juan Pablo Jiménez' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: 'https://www.juanpablojimenez.dev',
    siteName: 'Juan Pablo Jiménez Portfolio',
    title: 'Juan Pablo Jiménez - Frontend Developer & Creative Engineer',
    description:
      'Frontend Developer and Creative Engineer from Medellín, Colombia',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@JuanPabloJim_',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()

  return (
    <html lang="en" className={`${libreBaskerville.variable} ${josefinSans.variable}`}>
      <body className="bg-black-secondary">
        <NextIntlClientProvider messages={messages}>
          <TransitionProvider>
            <GoogleAnalytics />
            <CustomCursor />
            <TransitionWrapper>
                {children}
            </TransitionWrapper>
            <CookieConsent />
          </TransitionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

