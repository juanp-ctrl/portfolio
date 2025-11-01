'use client'
import type React from 'react'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { useTransition } from '@/context/TransitionContext'
import LocomotiveScroll from 'locomotive-scroll'

interface TransitionWrapperProps {
  children: React.ReactNode
}

export default function TransitionWrapper({ children }: TransitionWrapperProps) {
  const { locomotiveScroll, slideRef, pageContainerRef } = useTransition()
  const pathname = usePathname()
  const router = useRouter()

  /* Initialize Locomotive Scroll */
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
  }, [pathname, pageContainerRef])

  /* Initialize slide overlay position */
  useEffect(() => {
    if (slideRef.current) {
      gsap.set(slideRef.current, { y: '100vh' })
    }
  }, [slideRef])

  /* Listen for custom navigation events from startTransition */
  useEffect(() => {
    const handleAppRouterNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<{ url: string }>
      const { url } = customEvent.detail
      router.push(url)
    }

    window.addEventListener('appRouterNavigate', handleAppRouterNavigate)

    return () => {
      window.removeEventListener('appRouterNavigate', handleAppRouterNavigate)
    }
  }, [router])

  return (
    <>
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
      <div data-scroll-container key={pathname}>
        {children}
      </div>
    </>
  )
}

