import type { Metadata } from 'next'
import type React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '@/styles/globals.css'
import { TransitionProvider } from '@/context/TransitionContext'
import CustomCursor from '@/components/Cursor'
import CookieConsent from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics.tsx'
import TransitionWrapper from '@/components/TransitionWrapper'
import {
  personSchema,
  websiteSchema,
  profilePageSchema,
} from '@/constants/schemas'
import { libreBaskerville, josefinSans } from '@/constants/fonts'
import { layoutMetadata } from '@/constants/metadata'

export const metadata = layoutMetadata as Metadata

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()

  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${josefinSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />
      </head>
      <body className="bg-black-secondary">
        <NextIntlClientProvider messages={messages}>
          <TransitionProvider>
            <GoogleAnalytics />
            <CustomCursor />
            <TransitionWrapper>{children}</TransitionWrapper>
            <CookieConsent />
          </TransitionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
