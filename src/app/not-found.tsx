'use client'
import type React from 'react'
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTransition } from '@/context/TransitionContext'

export default function NotFound() {
  const { startTransition } = useTransition()

  const handleGoHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    startTransition('/')
  }

  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden min-h-screen bg-black-secondary text-white">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
            className="mb-8"
          >
            <Image
              src="/images/free_astronaut.png"
              alt="Lost astronaut"
              width={300}
              height={400}
              className="opacity-80"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-8xl md:text-9xl font-libre italic text-yellow-primary mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-4xl font-josefin mb-6">
              Houston, we have a problem!
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-md mx-auto">
              The page you&apos;re looking for has drifted into deep space. Let&apos;s get
              you back to safety.
            </p>

            <Link
              href="/"
              onClick={handleGoHome}
              className="inline-block bg-yellow-primary text-black px-8 py-3 rounded-full font-josefin font-semibold hover:bg-yellow-600 transition-all duration-300 hover:scale-105"
            >
              Return to Home Base
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 text-gray-600"
          >
            <p className="text-sm">Error Code: PAGE_NOT_FOUND</p>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}

