import BalloonsButton from '@/components/BalloonsButton'
import Currently from '@/components/Currently'
import Drawing from '@/components/Drawing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Text from '@/components/Text'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Welcome from '@/components/Welcome'
import { useTranslation } from 'react-i18next'
import Layout from '@/components/layout'

export default function Home() {
  const { t } = useTranslation('common')
  const [isLoading, setIsLoading] = useState(true)
  const { scrollY } = useScroll()

  useEffect(() => {
    if (!sessionStorage.getItem('pageLoaded')) {
      setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem('pageLoaded', 'true')
      }, 3200)
    } else {
      setIsLoading(false)
    }
  }, [])

  const rotateAstronaut = useTransform(scrollY, [0, 700], [0, 360])

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
      transition: { duration: 3, ease: [0.32, 0, 0.67, 0] },
    },
    exit: {
      opacity: 1,
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
        delay: 1,
        duration: 1.2,
        type: 'spring',
        ease: [0.45, 0, 0.55, 1],
      },
    },
  }

  return (
    <Layout>
      {isLoading && (
        <>
          <motion.div className="flex justify-center items-center w-screen h-screen">
            <svg
              className="size-32"
              viewBox="0 0 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(30, 0)">
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
              </g>
            </svg>
          </motion.div>
        </>
      )}

      {!isLoading && (
        <>
          <Header />
          <Welcome />
          <motion.div
            style={{
              rotate: rotateAstronaut,
            }}
            className="relative -top-32 left-1/4 astronaut-image"
            {...anim(astronautVariants)}
          >
            <Image
              src="/images/free_astronaut.png"
              alt="free astronaut"
              width={300}
              height={300}
              className="size-full object-contain"
            />
          </motion.div>
          <div className="-mt-16">
            <Text phrase={t('first_section_text_1')} />
          </div>
          <Drawing />
          <Text phrase={t('first_section_text_2')} />
          <div className="bg-black-secondary">
            <Currently />
            <Text
              customStyle="text-white mt-10 mb-10"
              phrase={t('second_section_text_1')}
            />
            <Text
              customStyle="text-white"
              phrase={t('second_section_text_2')}
            />
            <BalloonsButton />
          </div>
          <Footer />
        </>
      )}
    </Layout>
  )
}
