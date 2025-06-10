'use client'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Text from '@/components/Text'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Head from 'next/head'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import TrailImages from '@/components/TrailImages'

export default function About() {
  const { t } = useTranslation('about')
  const { scrollY } = useScroll()
  const rotateShip = useTransform(scrollY, [0, 700], [0, 360])

  const anim = (variants: Variants) => ({
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  })

  const shipVariants: Variants = {
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
      <Head>
        <title>{t('about_title')}</title>
        <meta name="description" content={t('about_description')} />
        <link rel="canonical" href="https://www.juanpablojimenez.dev/about" />
        <meta property="og:title" content="Who is Juan Pablo Jiménez" />
        <meta
          property="og:description"
          content="Juan Pablo Jiménez is a frontend developer and creative engineer, passionate about web development and design, he enjoys trasforming ideas into reality, solving each problem in the way with creativity and innovation..."
        />
        <meta
          property="og:url"
          content="https://www.juanpablojimenez.dev/about"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://juanpablojimenez.dev/_next/image?url=%2Fimages%2Fspaceship.png"
        />
        <meta property="og:image:alt" content="Website image" />
      </Head>
      <Header />
      <TrailImages />
      <div className={styles['main-container']}>
        <div>
          <h1 className="text-[2.5rem] italic font-libre border-t-2 w-fit leading-[4rem]">
            {t('developer')}
          </h1>
        </div>
        <Image
          src={'/images/about_juan_pablo_jimenez.webp'}
          alt="Profile picture"
          priority
          width={400}
          height={400}
          className={styles['profile-picture']}
        />
        <div
          className={`flex flex-row-reverse mb-6 mt-2 ${styles['second-title']}`}
        >
          <h2 className="text-[2.5rem] italic font-libre text-yellow-primary border-b-2 border-yellow-primary w-fit leading-[4rem]">
            {t('engineer')}
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <motion.div
          style={{
            rotate: rotateShip,
          }}
          className={`relative -top-20 max-w-fit md:-top-24 ${styles.spaceship}`}
          {...anim(shipVariants)}
        >
          <Image
            src="/images/spaceship.png"
            alt="free astronaut"
            width={200}
            height={400}
            className="object-contain md:w-60"
          />
        </motion.div>
      </div>
      <Text phrase={t('about_me')} customStyle="-mt-2 mb-10" />
      <Text phrase={t('about_me_3')} customStyle="mb-10" />
      <Text phrase={t('about_me_4')} customStyle="mb-10" />
      <Image
        src="/images/IMG_18.webp"
        alt="Medellin city"
        width={300}
        height={400}
        className={`mx-auto my-16 ${styles.infoImage}`}
      />
      <Text phrase={t('about_me_2')} customStyle="mb-24" />
      <div className="bg-black-secondary pb-12">
        <h2 className="text-white font-libre italic text-5xl pt-20 pl-8 pb-4 md:pl-40 lg:pl-48">
          {t('skills_title')}
        </h2>
        <Text
          phrase={t('skills')}
          customStyle="text-white pt-4 pb-5 font-libre italic leading-[3rem] md:leading-[4rem] md:text-[1.6rem]"
        />
        <div className={styles.contact}>
          <a href="mailto:juanpablojimenez.dev@gmail.com">
            <p>{t('contact')}</p>
          </a>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
