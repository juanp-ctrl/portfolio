import styles from './styles.module.css'
import { useRef } from 'react'
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
    transition: { duration: 0.5, delay: 0.04 * i },
  }),
  closed: {
    y: '100%',
    transition: { duration: 0.5 },
  },
}

export default function Index({
  phrase,
  customStyle = 'text-black',
}: {
  phrase: string
  customStyle?: string
}) {
  const descriptionText = useRef<HTMLDivElement>(null)
  const isInView = useInView(descriptionText)

  return (
    <div ref={descriptionText} className={styles.description}>
      <p className={`text-2xl md:text-3xl ${customStyle}`}>
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
