import '@/styles/globals.css'
import CustomCursor from '@/components/Cursor'
import CookieConsent from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics.tsx'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'
import '../../serviceWorkerRegistration.ts'
import type { AppProps } from 'next/app'

import LocomotiveScroll from 'locomotive-scroll'
import { useEffect } from 'react'

function App({ Component, pageProps, router }: AppProps) {
  /* Locomotive scroll instance, thank you locomotive <3*/
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true,
        lerp: 0.1,
        multiplier: 1.8,
        /* eslint-disable @typescript-eslint/no-explicit-any */
      } as any)

      return () => {
        scroll.destroy()
      }
    }
  }, [])

  return (
    <>
      <GoogleAnalytics />
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Component data-scroll-container key={router.route} {...pageProps} />
      </AnimatePresence>
      <CookieConsent />
    </>
  )
}

export default appWithTranslation(App)
