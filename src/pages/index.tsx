import localFont from 'next/font/local'
import {
  animate,
  delay,
  easeInOut,
  motion,
  useScroll,
  useTransform,
  Variants,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { clipPath } from 'framer-motion/client'
import Image from 'next/image'
import { exit } from 'process'
import Header from '@/components/Header'
import { init } from 'next/dist/compiled/webpack/webpack'
import Text from '@/components/Text'
import Drawing from '@/components/Drawing'

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
  const { scrollY } = useScroll()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])

  const rotateAstronaut = useTransform(scrollY, [0, 500], [0, 360])

  const anim = (variants: Variants) => ({
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  })

  const lettersVariants: Variants = {
    initial: { pathLength: 0, opacity: 0 },
    enter: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 3, ease: [0.36, 0, 0.66, -0.56] },
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
        delay: 4,
        ease: [0.45, 0, 0.55, 1],
        times: [0.5, 1],
      },
    },
  }

  const astronautVariants: Variants = {
    initial: {
      y: 200,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2,
        duration: 1.2,
        type: 'spring',
        ease: [0.45, 0, 0.55, 1],
      },
    },
  }

  return (
    <main
      className={`${libreBaskerville.variable} ${josefinSans.variable} relative w-full overflow-hidden`}
    >
      {isLoading && (
        <>
          <motion.div className="fixed inset-0 w-full h-screen bg-white_alternative">
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
                {...anim(lettersVariants)}
              />

              {/* Letra P */}
              <motion.path
                d="M80 20 L80 75 M80 20 L100 20 C110 20 120 25 120 35 C120 45 110 50 100 50 L80 50"
                stroke="var(--black_alternative)"
                strokeWidth="4"
                strokeLinecap="round"
                {...anim(lettersVariants)}
              />

              {/* Linea horizontal */}
              <motion.path
                d="M20 100 L100 100"
                stroke="var(--black_alternative)"
                strokeWidth="4"
                strokeLinecap="round"
                {...anim(lettersVariants)}
              />
            </svg>
          </motion.div>
        </>
      )}

      <motion.div className="main-content" {...anim(loadMainContent)}>
        <div className="first-section-content">
          <Header />
          <div className="ml-10 welcoming-section">
            <p className="welcoming-text">Hi! I'm</p>
            <h1 className="mt-4">Juan Pablo Jiménez</h1>
            <p className="role-text mr-6">Frontend Developer</p>
          </div>
        </div>
      </motion.div>
      {!isLoading && (
        <>
          <motion.div
            style={{
              rotate: rotateAstronaut,
            }}
            className="relative -top-28 left-1/4 astronaut-image"
            {...anim(astronautVariants)}
          >
            <Image
              src="/images/free_astronaut.png"
              alt="free astronaut"
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="-mt-16">
            <Text phrase="Hello there! welcome to my little space in the web, here i showcase my works, experiments and projects related to web development." />
          </div>
          <Drawing />
          <Text phrase="I am a front-end engineer based in Medellin, Colombia, driven by a constant spirit of creation and improvement." />
        </>
      )}
    </main>
  )
}
