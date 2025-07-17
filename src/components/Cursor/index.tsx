import { useEffect, useRef } from 'react'
import styles from './styles.module.css'

export default function Index() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cursorRef.current) {
      const centerX = window.innerWidth / 2
      cursorRef.current.style.left = `${centerX}px`
      cursorRef.current.style.top = `-100px`
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`
        cursorRef.current.style.top = `${event.clientY}px`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div ref={cursorRef} className={styles.cursor} />
}
