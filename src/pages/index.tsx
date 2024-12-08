import localFont from 'next/font/local'
import { animate, delay, easeInOut, motion, Variants } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { clipPath } from 'framer-motion/client'
import { exit } from 'process'

const libreBaskerville = localFont({
  src: [
    {
      path: './fonts/LibreBaskerville-Regular.ttf',
      style: 'normal',
    },
    {
      path: './fonts/LibreBaskerville-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-libre-baskerville',
})

const josefinSans = localFont({
  src: [
    {
      path: './fonts/JosefinSans-Light.ttf',
      style: 'light',
    },
    {
      path: './fonts/JosefinSans-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-josefin-sans',
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const anim = (variants: Variants) => ({
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  })

  const maskVariants: Variants = {
    initial: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    },
    enter: {
      transition: {
        duration: 3,
        transform: 0.6,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  }

  const loadMainContent: Variants = {
    initial: {
      clipPath: 'polygon(45% 52.4%, 50% 52.4%, 50% 52.4%, 45% 52.4%)',
    },
    enter: {
      clipPath: [
        'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
      ],
      transition: {
        duration: 2,
        delay: 3,
        ease: [0.45, 0, 0.55, 1],
        times: [0.5, 1],
      },
    },
  }

  return (
    <div
      className={`${libreBaskerville.variable} ${josefinSans.variable} relative w-full h-screen overflow-hidden`}
    >
      {isLoading && (
        <>
          <motion.div
            className="fixed inset-0 w-full h-screen bg-white_alternative z-50"
            {...anim(maskVariants)}
          >
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24"
              viewBox="0 0 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Letra J */}
              <motion.path
                d="M40 20 L40 60 C40 70 35 75 25 75 L20 75"
                stroke="var(--black_alternative)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />

              {/* Letra P */}
              <motion.path
                d="M80 20 L80 75 M80 20 L100 20 C110 20 120 25 120 35 C120 45 110 50 100 50 L80 50"
                stroke="var(--black_alternative)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />

              {/* Linea horizontal */}
              <motion.path
                d="M20 100 L100 100"
                stroke="var(--black_alternative)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>
        </>
      )}

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 main-content"
        {...anim(loadMainContent)}
      >
        <h1 className="text-center mb-6">Juan Pablo Jiménez</h1>
        <p className="text-center max-w-2xl">
          Hello there! welcome to my little space in the web, here i showcase my
          works, experiments and projects related to web development.
        </p>
      </motion.div>
    </div>
  )
}
