import styles from './styles.module.css'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView, Variants } from 'motion/react'

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
  const isInView = useInView(descriptionText, {
    amount: 0.1,
    once: true,
    margin: '-50px',
  })
  const [forceShow, setForceShow] = useState(false)

  // Fallback: ensure text is visible after a timeout, even if useInView doesn't trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceShow(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Determine if text should be visible
  const shouldShow = isInView || forceShow

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
                initial="initial"
                animate={shouldShow ? 'open' : 'initial'}
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
