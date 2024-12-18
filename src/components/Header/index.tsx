import Link from 'next/link'
import { gsap } from 'gsap'
import styles from './styles.module.css'
import { useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Nav from './Nav'

export default function index() {
  const [isActive, setIsActive] = useState(false)
  const menuButton = useRef(null)

  useLayoutEffect(() => {
    import('gsap/ScrollTrigger').then((ScrollTrigger) => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(menuButton.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(menuButton.current, {
              scale: 1,
              duration: 0.25,
              ease: 'power1.out',
            })
          },
          onEnterBack: () => {
            gsap.to(menuButton.current, {
              scale: 0,
              duration: 0.25,
              ease: 'power1.out',
            })
            setIsActive(false)
          },
        },
      })
    })
  }, [])

  return (
    <div
      className={`flex justify-between items-center px-10 py-6 ${styles.header}`}
    >
      <Link href={'/'} className={styles.logo}>
        JP
      </Link>
      <p
        className="italic text-base border-b-2 border-white_alternative"
        onClick={() => {
          setIsActive(!isActive)
        }}
      >
        Menu
      </p>
      <div ref={menuButton} className={styles['header-menu']}>
        <div
          onClick={() => {
            setIsActive(!isActive)
          }}
          className={`${styles.button} ${isActive ? styles.active : ''}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          >
            <div></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  )
}
