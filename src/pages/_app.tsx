import '@/styles/globals.css'
import CustomCursor from '@/components/Cursor'
import CookieConsent from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics.tsx'
import { TransitionProvider, useTransition } from '@/context/TransitionContext'
import { appWithTranslation } from 'next-i18next'
import '../../serviceWorkerRegistration.ts'
import type { AppProps } from 'next/app'

import LocomotiveScroll from 'locomotive-scroll'
import { useEffect } from 'react'
import { gsap } from 'gsap'

function AppContent({ Component, pageProps, router }: AppProps) {
  const { locomotiveScroll, slideRef, pageContainerRef } = useTransition()

  /* Locomotive scroll instance, thank you locomotive <3*/
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement
      
      // Store page container ref for transitions
      if (scrollContainer) {
        pageContainerRef.current = scrollContainer
      }
      
      const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        lerp: 0.1,
        multiplier: 1.8,
        /* eslint-disable @typescript-eslint/no-explicit-any */
      } as any)

      // Store in context for global access
      locomotiveScroll.current = scroll

      return () => {
        scroll.destroy()
        locomotiveScroll.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* Update page container ref on route change */
  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement
    if (scrollContainer) {
      pageContainerRef.current = scrollContainer
    }
  }, [router.route, pageContainerRef])

  /* Initialize slide overlay position */
  useEffect(() => {
    if (slideRef.current) {
      gsap.set(slideRef.current, { y: '100vh' })
    }
  }, [slideRef])

  return (
    <>
      <GoogleAnalytics />
      <CustomCursor />
      {/* Global transition slide overlay */}
      <div
        ref={slideRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'var(--white_alternative)',
          zIndex: 60,
          pointerEvents: 'none',
        }}
      />
      <Component data-scroll-container key={router.route} {...pageProps} />
      <CookieConsent />
    </>
  )
}

function App(props: AppProps) {
  return (
    <TransitionProvider>
      <AppContent {...props} />
    </TransitionProvider>
  )
}

export default appWithTranslation(App)
