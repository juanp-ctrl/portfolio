import React, { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styles from './styles.module.css'

interface ImageItem {
  id: number
  x: number
  y: number
  src: string
}

const imagesLength = 18

export default function Index() {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 })
  const [lastAddedCoordinates, setLastAddedCoordinates] = useState({
    x: 0,
    y: 0,
  }) // Última posición donde se agregó una imagen
  const [images, setImages] = useState<ImageItem[]>([])
  const [imageCounter, setImageCounter] = useState<number>(0)
  const imagePool = Array.from(
    { length: imagesLength },
    (_, i) => `/images/IMG_${i + 1}.webp`,
  )

  const handleGetImage = () => {
    const aleatory = Math.floor(Math.random() * 2)
    if (imageCounter < imagesLength - 1) {
      if (aleatory === 0) {
        setImageCounter((prevNumber) => prevNumber + 1)
      } else {
        setImageCounter((prevNumber) =>
          prevNumber < imagesLength - 2 ? prevNumber + 2 : 0,
        )
      }
    } else {
      setImageCounter(0)
    }
  }

  // Manejar el movimiento del mouse
  const handleMouseMovement = (event: React.MouseEvent<HTMLDivElement>) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY })
  }

  // Agregar una nueva imagen si el desplazamiento es mayor a 100 píxeles
  const addNewItem = useCallback(() => {
    const distance = Math.sqrt(
      Math.pow(mouseCoordinates.x - lastAddedCoordinates.x, 2) +
        Math.pow(mouseCoordinates.y - lastAddedCoordinates.y, 2),
    )

    if (distance > 100) {
      const imgIndex = imageCounter
      const newImage: ImageItem = {
        id: Date.now(), // Identificador único
        x: mouseCoordinates.x - 75,
        y: mouseCoordinates.y - 100,
        src: imagePool[imgIndex],
      }

      // Agregar la nueva imagen al estado
      setImages((prevImages) => [...prevImages, newImage])

      // Actualizar las últimas coordenadas donde se agregó una imagen
      setLastAddedCoordinates({ x: mouseCoordinates.x, y: mouseCoordinates.y })
      handleGetImage()
    }
  }, [mouseCoordinates])

  useEffect(() => {
    let timeoutId = null
    if (images.length < 2) {
      timeoutId = setTimeout(() => {
        setImages((prevImages) => prevImages.slice(1)) // Eliminar la imagen más antigua
      }, 500)
    } else if (images.length < 7) {
      timeoutId = setTimeout(() => {
        setImages((prevImages) => prevImages.slice(1))
      }, 200)
    } else {
      timeoutId = setTimeout(() => {
        setImages((prevImages) => prevImages.slice(1))
      }, 20)
    }

    return () => clearTimeout(timeoutId) // Limpiar el timeout al desmontar
  }, [images.length])

  // Efecto para agregar una nueva imagen cuando se mueve el mouse
  useEffect(() => {
    if (mouseCoordinates.x && mouseCoordinates.y) {
      addNewItem()
    }
  }, [mouseCoordinates.x, mouseCoordinates.y, addNewItem])

  return (
    <div className={styles.container} onMouseMove={handleMouseMovement}>
      <AnimatePresence>
        {images.map((image) => (
          <motion.div
            key={image.id}
            className={styles.item}
            initial={{ opacity: 0, scale: 0 }} // Comienza invisible y contraída
            animate={{ opacity: 1, scale: 1 }} // Aparece expandiéndose desde el centro
            exit={{ opacity: 0, y: 10 }} // Fade out hacia abajo
            transition={{
              duration: 0.5, // Duración de la animación
              ease: 'easeOut', // Easing para un efecto suave
            }}
            style={{ left: `${image.x}px`, top: `${image.y}px` }}
          >
            <Image
              src={image.src}
              alt="Trail effect"
              width={150}
              height={200}
              priority
              className={styles.image}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
