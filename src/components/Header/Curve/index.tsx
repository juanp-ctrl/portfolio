import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styles from './styles.module.css'
import { gsap } from 'gsap'

export default function Index() {
  const initialPath = `M100 0 L200 0 L200 1000 L100 1000 Q-100 500 100 0`
  const targetPath = `M100 0 L200 0 L200 1000 L100 1000 Q100 500 100 0`
  
  const pathRef = useRef<SVGPathElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      if (pathRef.current) {
        pathRef.current.setAttribute('d', initialPath)
      }

      // Enter animation
      gsap.to(pathRef.current, {
        attr: { d: targetPath },
        duration: 1,
        ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
      })
    })

    return () => ctx.revert()
  }, [initialPath, targetPath])

  useEffect(() => {
    const path = pathRef.current
    return () => {
      // Exit animation on unmount
      if (path) {
        gsap.to(path, {
          attr: { d: initialPath },
          duration: 0.8,
          ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
        })
      }
    }
  }, [initialPath])

  return (
    <svg className={styles.svgCurve}>
      <path ref={pathRef}></path>
    </svg>
  )
}
