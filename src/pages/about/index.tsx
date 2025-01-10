import Header from '@/components/Header'
import Layout from '@/components/layout'
import Text from '@/components/Text'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Head from 'next/head'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'

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
      </Head>
      <Header />
      <div className={styles['main-container']}>
        <div className="w-full">
          <h1 className="text-[2.5rem] italic font-libre border-t-2 w-fit leading-[4rem]">
            {t('developer')}
          </h1>
        </div>
        <Image
          src={'/images/Profile_suit.jpeg'}
          alt="Profile picture"
          width={280}
          height={280}
          className={styles['profile-picture']}
        />
        <div className="w-full flex flex-row-reverse mb-6 mt-2">
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
      <Text phrase={t('about_me_2')} />
      <Image
        src="/images/example art.gif"
        alt="Art example"
        width={300}
        height={400}
        className="mx-auto my-16"
      />
      <div className="bg-black-secondary pb-12">
        <Text
          phrase={t('skills')}
          customStyle="text-white pt-20 pb-5 font-libre italic leading-[3rem] md:leading-[4rem] md:text-[1.6rem]"
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
