'use client'
import localFont from 'next/font/local'
import React, { useLayoutEffect, useRef } from 'react'
import styles from './layout.module.css'
import { gsap } from 'gsap'
import { useRouter } from 'next/router'

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

export default function Layout({ children }: { children: React.ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null)
  const opacityRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states - page starts above viewport
      gsap.set(pageRef.current, { y: '-100vh', opacity: 1, filter: 'blur(0px)' })
      gsap.set(opacityRef.current, { opacity: 0 })

      // Create timeline for enter animation
      const tl = gsap.timeline({ delay: 0.2 })

      // Slide page down from top to position
      tl.to(pageRef.current, {
        y: 0,
        duration: 0.4,
        ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
      }, 0)

      // Fade in opacity simultaneously
      tl.to(opacityRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
      }, 0)
    })

    return () => ctx.revert()
  }, [router.route])

  return (
    <div className={styles.inner}>
      <div ref={pageRef} className={styles.page}>
        <div ref={opacityRef}>
          <main
            className={`${libreBaskerville.variable} ${josefinSans.variable} relative w-full overflow-hidden`}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
