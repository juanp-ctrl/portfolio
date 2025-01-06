import Header from '@/components/Header'
import Layout from '@/components/layout'
import Text from '@/components/Text'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
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
      <Header />
      <div className={styles['main-container']}>
        <div className="w-full">
          <h1 className="text-5xl italic font-libre border-t-2 w-fit leading-[4rem]">
            {t('developer')}
          </h1>
        </div>
        <Image
          src={'/images/Profile_suit.jpeg'}
          alt="Profile picture"
          width={300}
          height={300}
          className="my-10"
        />
        <div className="w-full flex flex-row-reverse mb-6">
          <h2 className="text-5xl italic font-libre text-yellow-primary border-b-2 border-yellow-primary w-fit leading-[4rem]">
            {t('engineer')}
          </h2>
        </div>
      </div>
      <motion.div
        style={{
          rotate: rotateShip,
        }}
        className="relative -top-20 left-1/4 astronaut-image"
        {...anim(shipVariants)}
      >
        <Image
          src="/images/spaceship.png"
          alt="free astronaut"
          width={300}
          height={300}
          className="size-full object-contain"
        />
      </motion.div>
      <Text phrase={t('about_me')} customStyle="-mt-4 mb-4" />
      <Text phrase={t('about_me_2')} />
      <Image
        src="/images/example art.gif"
        alt="Art example"
        width={300}
        height={400}
        className="mx-auto my-16"
      />
      <div className="bg-black-secondary pb-12">
        <Text phrase={t('skills')} customStyle='text-white pt-20 font-libre italic leading-[3rem]' />
        <div
          className={styles.contact}
          onClick={() => {}}
        >
          <p>{t('contact')}</p>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
