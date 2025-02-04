import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

export default function Index() {
  const [imageIndex, setImageIndex] = useState(1)
  const container = document.querySelector(`container`)
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMovement = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      containerRef.current &&
      containerRef.current.contains(event.target as Node)
    ) {
      setMouseCoordinates({ x: event.clientX, y: event.clientY })
      console.log(mouseCoordinates)
    }
  }

  const addNewItem = (x: number, y: number) => {
    const newItem = document.createElement('div')
    newItem.className = styles.item
    newItem.style.left = `${x - 75}px`
    newItem.style.top = `${y - 100}px`
    document.body.appendChild(newItem)

    const img = document.createElement('img')
    img.src = '/images/free_astronaut.png'
    newItem.appendChild(img)
    setImageIndex((currIndex) => currIndex + 1)
  }

  // const manageItemLimit = () => {
  //   while ()
  // }

  const startAnimation = () => {}

  // useEffect(() => {
  //   if (x && y) {
  //     addNewItem(x, y)
  //   }
  // }, [x, y])

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onMouseMove={handleMouseMovement}
    >
      <h2>hola</h2>
    </div>
  )
}
