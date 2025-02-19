import Nav from './Nav'
import styles from './styles.module.css'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useTranslation } from 'react-i18next'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import Image from 'next/image'

export default function Index() {
  const { t, i18n } = useTranslation('common')
  const [isActive, setIsActive] = useState(false)
  const menuButton = useRef(null)

  const handleChangingLng = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLanguage)
  }

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isActive])

  useLayoutEffect(() => {
    import('gsap/ScrollTrigger').then((ScrollTrigger) => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(menuButton.current, {
        scale: isActive ? 1 : 0,
        duration: 0.25,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight - 100,
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
  }, [isActive])

  return (
    <div
      className={`flex justify-between items-center px-10 py-6 ${styles.header}`}
    >
      <Link href={'/'} className={styles.logo}>
        JP
      </Link>
      <div className="flex gap-8">
        <Popover>
          <PopoverTrigger>
            <Image
              src="/images/globe.svg"
              alt="Globe"
              width={20}
              height={20}
              className="border-b-2 border-white"
            />
          </PopoverTrigger>
          <PopoverContent className="bg-[#ffffff3d] text-center w-30 p-3 mt-2">
            <p
              className="text-white font-libre cursor-pointer text-base"
              onClick={handleChangingLng}
            >
              {t('change_lng')}
            </p>
          </PopoverContent>
        </Popover>
        <p
          className="italic text-base border-b-2 border-white_alternative font-libre cursor-pointer"
          onClick={() => {
            const newIsActive = !isActive
            gsap.to(menuButton.current, {
              scale: newIsActive ? 1 : 0,
              duration: 0.25,
              delay: 0.5,
              ease: 'power1.out',
            })
            setIsActive(newIsActive)
          }}
        >
          {t('menu')}
        </p>

        <div ref={menuButton} className={styles['header-menu']}>
          <div
            onClick={() => {
              const newIsActive = !isActive
              gsap.to(menuButton.current, {
                scale: newIsActive ? 1 : window.scrollY < 300 ? 0 : 1,
                duration: 0.25,
                delay: 0.1,
                ease: 'power1.out',
              })
              setIsActive(newIsActive)
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
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  )
}
