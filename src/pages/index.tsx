'use client'
import BalloonsButton from '@/components/BalloonsButton'
import Currently from '@/components/Currently'
import Drawing from '@/components/Drawing'
import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Text from '@/components/Text'
import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import Welcome from '@/components/Welcome'
import { useTranslation } from 'react-i18next'
import Layout from '@/components/layout'
import Conceptual from '@/components/Conceptual'
import Head from 'next/head'

export default function Home() {
  const { t } = useTranslation('common')
  const [isLoading, setIsLoading] = useState(true)

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

  return (
    <Layout>
      <Head>
        <title>{t('home_title')}</title>
        <meta name="description" content={t('home_description')} />
        <link rel="canonical" href="https://www.juanpablojimenez.dev/" />
        <meta property="og:title" content="Juan Pablo Jiménez | Frontend" />
        <meta
          property="og:description"
          content="The little space in the web of Juan Pablo Jiménez, where he showcases his works, experiments, and projects related to web development. A space where you can get to know better who is Juan Pablo Jiménez, frontend and creative developer. From Medellín to the world!"
        />
        <meta property="og:url" content="https://www.juanpablojimenez.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://juanpablojimenez.dev/_next/image?url=%2Fimages%2Ffree_astronaut.png"
        />
        <meta property="og:image:alt" content="Website image" />
      </Head>
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
          <div className="-mt-16">
            <Text phrase={t('first_section_text_1')} />
          </div>
          <Drawing />
          <Image
            src="/images/juan_pablo_jimenez.webp"
            alt="Image of Juan Pablo Jiménez"
            width={2850}
            height={3188}
            className={`mx-auto my-16 shadow-[0_5px_10px_black] w-[300px] md:w-[400px] `}
          />
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
            <Text
              customStyle="text-white mt-10"
              phrase={t('second_section_text_3')}
            />
            <BalloonsButton />
            <Conceptual />
          </div>
          <Footer />
        </>
      )}
    </Layout>
  )
}
