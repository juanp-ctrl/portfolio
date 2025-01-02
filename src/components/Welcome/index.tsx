import { motion, Variants } from 'framer-motion'
import styles from './styles.module.css'

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
      delay: 3.3,
      ease: [0.45, 0, 0.55, 1],
      times: [0.5, 1],
    },
  },
}

const Welcome = () => (
  <motion.div className="main-content" {...anim(loadMainContent)}>
    <div className={styles['first-section-content']}>
      <div className={`ml-10 ${styles['welcoming-section']}`}>
        <p className="font-libre italic text-4xl">Hi! I&apos;m</p>
        <h1 className="mt-3 text-[2.5rem]">Juan Pablo Jiménez</h1>
      </div>
      <div className="mr-10">
        <p className={`${styles['role-text']}`}>Frontend Developer</p>
      </div>
    </div>
  </motion.div>
)

export default Welcome
