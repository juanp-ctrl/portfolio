'use client'
import { motion, Variants } from 'framer-motion'
import localFont from 'next/font/local'
import React from 'react'
import styles from './layout.module.css'

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

const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    filter: 'blur(10px)',
    backgroundColor: '#1e1e1e',
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const slide = {
  initial: {
    y: '100vh',
  },
  enter: {
    y: '100vh',
  },
  exit: {
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
}

const anim = (variants: Variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.inner}>
      <motion.div className={styles.slide} {...anim(slide)} />
      <motion.div className={styles.page} {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <main
            className={`${libreBaskerville.variable} ${josefinSans.variable} relative w-full overflow-hidden`}
          >
            {children}
          </main>
        </motion.div>
      </motion.div>
    </div>
  )
}
