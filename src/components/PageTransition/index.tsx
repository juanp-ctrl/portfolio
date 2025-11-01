'use client'
import type React from 'react'
import { useLayoutEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pageRef = useRef<HTMLDivElement>(null)
  const opacityRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states - page starts above viewport
      gsap.set(pageRef.current, {
        y: '-100vh',
        opacity: 1,
        filter: 'blur(0px)',
      })
      gsap.set(opacityRef.current, { opacity: 0 })

      // Create timeline for enter animation
      const tl = gsap.timeline({ delay: 0.2 })

      // Slide page down from top to position
      tl.to(
        pageRef.current,
        {
          y: 0,
          duration: 0.4,
          ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
        },
        0,
      )

      // Fade in opacity simultaneously
      tl.to(
        opacityRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: 'power1.inOut',
        },
        0,
      )
    })

    return () => ctx.revert()
  }, [pathname])

  return (
    <div className="relative w-full">
      <div ref={pageRef} className="relative w-full">
        <div ref={opacityRef}>{children}</div>
      </div>
    </div>
  )
}
