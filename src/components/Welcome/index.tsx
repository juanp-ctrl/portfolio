import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

const anim = (variants: Variants) => ({
  initial: 'initial',
  animate: 'enter',
  exit: 'exit',
  variants,
})

export default function Index() {
  const { t } = useTranslation('common')
  const [isClient, setIsClient] = useState(false)
  const { scrollY } = useScroll()
  const rotateAstronaut = useTransform(scrollY, [0, 700], [0, 360])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const anim = (variants: Variants) => ({
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  })

  const loadMainContent: Variants = {
    initial: {
      clipPath: 'polygon(45% 63.4%, 50% 63.4%, 50% 63.4%, 45% 63.4%)',
    },
    enter: {
      clipPath: [
        'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
      ],
      transition: {
        duration: 2,
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
        delay: 1,
        duration: 1.2,
        type: 'spring',
        ease: [0.45, 0, 0.55, 1],
      },
    },
  }

  return (
    <Suspense fallback={<div>...</div>}>
      <motion.div className={styles['main-content']} {...anim(loadMainContent)}>
        <div className={styles['first-section-content']}>
          <div className={`${styles['welcoming-section']}`}>
            <p className="font-libre italic text-4xl md:text-5xl">
              {isClient ? t('welcome_hi') : '...'}
            </p>
            <h1 className="mt-3 text-[2.5rem] md:text-[3.25rem]">
              {isClient ? t('welcome_name') : '...'}
            </h1>
          </div>
          <div className={`${styles['role-text']}`}>
            <p>{isClient ? t('dev_role') : '...'}</p>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center">
        <motion.div
          style={{
            rotate: rotateAstronaut,
          }}
          className={`relative -top-32 max-w-fit md:-top-48 ${styles.astronaut}`}
          {...anim(astronautVariants)}
        >
          <Image
            src="/images/free_astronaut.png"
            alt="free astronaut"
            width={208}
            height={208}
            className="object-contain md:w-80"
          />
        </motion.div>
      </div>
    </Suspense>
  )
}
