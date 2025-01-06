import { motion, Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Suspense, useEffect, useState } from 'react'
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

  useEffect(() => {
    setIsClient(true)
  }, [])

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
  
  return (
    <Suspense fallback={<div>...</div>}>
      <motion.div className={styles['main-content']} {...anim(loadMainContent)}>
        <div className={styles['first-section-content']}>
          <div className={`ml-10 ${styles['welcoming-section']}`}>
            <p className="font-libre italic text-4xl">
              {isClient ? t('welcome_hi') : '...'}
            </p>
            <h1 className="mt-3 text-[2.5rem]">
              {isClient ? t('welcome_name') : '...'}
            </h1>
          </div>
          <div className="mr-10">
            <p className={`${styles['role-text']}`}>
              {isClient ? t('dev_role') : '...'}
            </p>
          </div>
        </div>
      </motion.div>
    </Suspense>
  )
}
