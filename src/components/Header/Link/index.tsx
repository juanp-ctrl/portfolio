import styles from './styles.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

interface LinkProps {
  data: {
    title: string
    path: string
    index: number
  }
  isActive: boolean
  setSelectedIndicator: (path: string) => void
}

export default function Index({
  data,
  isActive,
  setSelectedIndicator,
}: LinkProps) {
  const { t } = useTranslation('common')
  const slide = {
    initial: { x: 80 },
    enter: (i: number) => ({
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
    exit: (i: number) => ({
      x: 80,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
  }

  const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } },
  }

  const { title, path, index } = data

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(path)
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link href={path}>{t(title)}</Link>
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      ></motion.div>
    </motion.div>
  )
}
