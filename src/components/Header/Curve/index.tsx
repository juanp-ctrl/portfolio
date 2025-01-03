import React from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'

export default function Index({ inHeight }: { inHeight: number }) {
  const initialPath = `M100 0 L200 0 L200 ${inHeight} L100 ${inHeight} Q-100 ${inHeight / 2} 100 0`
  const targetPath = `M100 0 L200 0 L200 ${inHeight} L100 ${inHeight} Q100 ${inHeight / 2} 100 0`

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  }

  return (
    <motion.svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </motion.svg>
  )
}
