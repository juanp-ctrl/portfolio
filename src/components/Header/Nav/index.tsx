import Curve from '../Curve'
import Link from '../Link'
import Socials from '../Socials'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import navItems from '@/constants/routes'

import { useTranslation } from 'react-i18next'

const menuSlide = {
  initial: { x: 'calc(100% + 100px)' },
  enter: { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
}

export default function Index() {
  const { t, i18n } = useTranslation('common')
  const pathname = usePathname()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLanguage)
  }

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.header}>
          <p>Menu</p>
        </div>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname)
          }}
          className={styles.nav}
        >
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.path}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            )
          })}
        </div>
        <Socials />
        <div
          className={styles['multilanguage-button']}
          onClick={toggleLanguage}
        >
          <p>{t('change_lng')}</p>
        </div>
      </div>
      <Curve />
    </motion.div>
  )
}
