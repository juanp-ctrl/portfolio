import styles from './styles.module.css'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { useTransition } from '@/context/TransitionContext'
import { gsap } from 'gsap'

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
  const { startTransition } = useTransition()
  const linkRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  const { title, path, index } = data

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    startTransition(path)
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(linkRef.current, { x: 80 })
      gsap.set(indicatorRef.current, { scale: 0 })

      // Enter animation with stagger delay
      gsap.to(linkRef.current, {
        x: 0,
        duration: 0.8,
        ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
        delay: 0.05 * index,
      })
    })

    return () => ctx.revert()
  }, [index])

  useEffect(() => {
    // Animate indicator based on isActive state
    gsap.to(indicatorRef.current, {
      scale: isActive ? 1 : 0,
      duration: isActive ? 0.3 : 0.4,
      ease: 'power1.inOut',
    })
  }, [isActive])

  return (
    <div
      ref={linkRef}
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(path)
      }}
    >
      <a href={path} onClick={handleClick}>{t(title)}</a>
      <div ref={indicatorRef} className={styles.indicator}></div>
    </div>
  )
}
