'use client'
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
} from 'react'
import type LocomotiveScroll from 'locomotive-scroll'

interface TransitionContextType {
  isTransitioning: boolean
  locomotiveScroll: React.MutableRefObject<LocomotiveScroll | null>
  slideRef: React.MutableRefObject<HTMLDivElement | null>
  pageContainerRef: React.MutableRefObject<HTMLElement | null>
  transitionDuration: number
  startTransition: (url: string) => Promise<void>
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined,
)

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const locomotiveScroll = useRef<LocomotiveScroll | null>(null)
  const slideRef = useRef<HTMLDivElement | null>(null)
  const pageContainerRef = useRef<HTMLElement | null>(null)
  const transitionDuration = 700 // milliseconds

  const startTransition = useCallback(
    async (url: string): Promise<void> => {
      if (isTransitioning) return

      setIsTransitioning(true)

      // Import dynamically to avoid SSR issues
      const { gsap } = await import('gsap')

      // Create timeline for exit animation
      const exitTimeline = gsap.timeline()

      // Scale down and fade out the current page
      if (pageContainerRef.current) {
        exitTimeline.to(
          pageContainerRef.current,
          {
            scale: 0.95,
            opacity: 0,
            duration: transitionDuration / 1000,
            ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
          },
          0,
        )
      }

      // Slide overlay up from bottom simultaneously
      if (slideRef.current) {
        exitTimeline.to(
          slideRef.current,
          {
            y: 0,
            duration: transitionDuration / 1000,
            ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
          },
          0,
        )
      }

      // Wait for exit animation to complete
      await exitTimeline.then()

      // Navigate to new page using window.location for now
      // We'll handle this differently in the component that uses it
      window.history.pushState(null, '', url)

      // Dispatch a custom event for navigation
      window.dispatchEvent(
        new CustomEvent('appRouterNavigate', { detail: { url } }),
      )

      // Reset the page container for the new page
      if (pageContainerRef.current) {
        gsap.set(pageContainerRef.current, { scale: 1, opacity: 1 })
      }

      // Wait a bit for new page to mount
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Slide overlay back down
      if (slideRef.current) {
        await gsap.to(slideRef.current, {
          y: '100vh',
          duration: transitionDuration / 1000,
          ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
        })
      }

      setIsTransitioning(false)
    },
    [isTransitioning, transitionDuration],
  )

  const value = {
    isTransitioning,
    locomotiveScroll,
    slideRef,
    pageContainerRef,
    transitionDuration,
    startTransition,
  }

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const context = useContext(TransitionContext)
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider')
  }
  return context
}
