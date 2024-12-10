import { useRef } from 'react'
import styles from './styles.module.css'
import { motion, useInView, Variants } from 'framer-motion'

const anim = (variants: Variants) => ({
  variants,
})

const lettersVariants: Variants = {
  initial: {
    y: '100%',
  },
  open: (i) => ({
    y: '0%',
    transition: { duration: 0.5, delay: 0.02 * i },
  }),
  closed: {
    y: '100%',
    transition: { duration: 0.5 },
  },
}

export default function index({ phrase }: { phrase: string }) {
  const descriptionText = useRef<HTMLDivElement>(null)
  const isInView = useInView(descriptionText)

  return (
    <div ref={descriptionText} className={styles.description}>
      <p className="text-3xl">
        {phrase.split(' ').map((word, index) => {
          return (
            <span key={index} className={styles.mask}>
              {' '}
              <motion.span
                custom={index}
                key={index}
                {...anim(lettersVariants)}
                animate={isInView ? 'open' : 'closed'}
                className={styles.word}
              >
                {word}
              </motion.span>{' '}
            </span>
          )
        })}
      </p>
    </div>
  )
}
