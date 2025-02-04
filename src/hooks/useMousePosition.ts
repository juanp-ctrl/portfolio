import { useState, useEffect } from 'react'

interface MousePosition {
  element: Element | null
}

const useMousePosition = ({ element }: MousePosition) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  const updateMousePosition = (e: { clientX: any; clientY: any }) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

export default useMousePosition
