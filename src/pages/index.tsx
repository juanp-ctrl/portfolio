'use client'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import Welcome from '@/components/Welcome'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/layout'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Text from '@/components/Text'
import Header from '@/components/Header'

// Dynamic imports for heavy components
const BalloonsButton = dynamic(() => import('@/components/BalloonsButton'), {
  loading: () => <div className="h-32" />,
})
const Currently = dynamic(() => import('@/components/Currently'), {
  loading: () => <div className="h-24" />,
})
const Drawing = dynamic(() => import('@/components/Drawing'), {
  loading: () => <div className="h-16" />,
})
const Conceptual = dynamic(() => import('@/components/Conceptual'), {
  loading: () => <div className="h-48" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-32" />,
})
const DownloadButton = dynamic(() => import('@/components/DownloadButton'), {
  loading: () => <div className="h-16" />,
})

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
        <title>{t('JP')}</title>
        <meta name="description" content={t('home_description')} />
        <meta
          name="keywords"
          content="frontend developer, react developer, nextjs developer, typescript developer, web developer, UI developer, creative developer, medellín developer, colombia developer, javascript developer, web applications, user interface, user experience, modern web development, jpj dev"
        />
        <meta name="author" content="Juan Pablo Jiménez" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <meta name="geo.region" content="CO-ANT" />
        <meta name="geo.placename" content="Medellín, Colombia" />
        <link rel="canonical" href="https://www.juanpablojimenez.dev/" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.juanpablojimenez.dev/"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://www.juanpablojimenez.dev/"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.juanpablojimenez.dev/"
        />

        <meta property="og:title" content={t('home_title_og')} />
        <meta property="og:description" content={t('home_description')} />
        <meta property="og:url" content="https://www.juanpablojimenez.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://juanpablojimenez.dev/_next/image?url=%2Fimages%2Ffree_astronaut.png"
        />
        <meta
          property="og:image:alt"
          content="Juan Pablo Jiménez - Frontend Developer & Creative Engineer"
        />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="788" />
        <meta property="og:site_name" content="Juan Pablo Jiménez Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('home_title_og')} />
        <meta name="twitter:description" content={t('home_description')} />
        <meta
          name="twitter:image"
          content="https://juanpablojimenez.dev/_next/image?url=%2Fimages%2Fjuan_pablo_jimenez.webp"
        />
        <meta
          name="twitter:image:alt"
          content="Juan Pablo Jiménez - Frontend Developer"
        />
        <meta name="twitter:creator" content="@JuanPabloJim_" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Juan Pablo Jiménez',
              jobTitle: 'Frontend Developer & Creative Engineer',
              description:
                'Frontend Developer and Creative Engineer from Medellín, Colombia, specializing in React, Next.js, and TypeScript',
              url: 'https://www.juanpablojimenez.dev',
              image:
                'https://juanpablojimenez.dev/_next/image?url=%2Fimages%2Fjuan_pablo_jimenez.webp',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Medellín',
                addressRegion: 'Antioquia',
                addressCountry: 'Colombia',
              },
              knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'JavaScript',
                'Frontend Development',
                'Web Development',
                'UI/UX Design',
                'Creative Development',
                'Modern Web Technologies',
              ],
              alumniOf: {
                '@type': 'Organization',
                name: 'Universidad Pontificia Bolivariana',
              },
              worksFor: {
                '@type': 'Organization',
                name: 'Globant',
              },
            }),
          }}
        />
      </Head>
      {isLoading && (
        <>
          {/* Mask Effect :) */}
          <motion.div className="flex justify-center items-center w-screen h-screen">
            <svg
              className="size-32"
              viewBox="0 0 200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(30, 0)">
                {/* Letter J */}
                <motion.path
                  d="M40 20 L40 60 C40 70 35 75 25 75 L20 75"
                  stroke="var(--black_alternative)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  {...anim(lettersVariants)}
                />

                {/* Letter P */}
                <motion.path
                  d="M80 20 L80 75 M80 20 L100 20 C110 20 120 25 120 35 C120 45 110 50 100 50 L80 50"
                  stroke="var(--black_alternative)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  {...anim(lettersVariants)}
                />

                {/* Horizontal line */}
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
            priority
            width={450}
            height={788}
            className={`mx-auto my-16 shadow-[0_5px_10px_black] w-[300px] md:w-[400px] `}
          />
          <Text phrase={t('first_section_text_2')} customStyle="mb-24 mt-24" />
          <DownloadButton />
          <div className="bg-black-secondary">
            <Currently />
            <Text
              customStyle="text-white mt-32 mb-10"
              phrase={t('second_section_text_1')}
            />
            <Text
              customStyle="text-white"
              phrase={t('second_section_text_2')}
            />
            <Text
              customStyle="text-white mt-10 font-bold md:text-[2.1rem]"
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

export async function getStaticProps({ locale }: { locale: string }) {
  const { serverSideTranslations } = await import(
    'next-i18next/serverSideTranslations'
  )

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], null, ['en', 'es'])),
    },
  }
}
