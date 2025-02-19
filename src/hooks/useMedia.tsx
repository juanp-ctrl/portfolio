import { useState, useEffect } from 'react'

const useMedia = () => {
  // Estado inicial para isMobile e isDesktop
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Función para actualizar los estados basados en las media queries
    const updateMediaQueries = () => {
      const mobileQuery = window.matchMedia('(max-width: 768px)')
      const desktopQuery = window.matchMedia('(min-width: 769px)')

      setIsMobile(mobileQuery.matches)
      setIsDesktop(desktopQuery.matches)
    }

    // Actualizar las media queries al cargar el componente
    updateMediaQueries()

    // Añadir listeners para actualizar cuando cambie el tamaño de la ventana
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    const desktopQuery = window.matchMedia('(min-width: 769px)')

    // Compatibilidad con navegadores antiguos
    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener('change', updateMediaQueries)
      desktopQuery.addEventListener('change', updateMediaQueries)
    } else {
      mobileQuery.addListener(updateMediaQueries)
      desktopQuery.addListener(updateMediaQueries)
    }

    // Limpiar listeners al desmontar el componente
    return () => {
      if (mobileQuery.removeEventListener) {
        mobileQuery.removeEventListener('change', updateMediaQueries)
        desktopQuery.removeEventListener('change', updateMediaQueries)
      } else {
        mobileQuery.removeListener(updateMediaQueries)
        desktopQuery.removeListener(updateMediaQueries)
      }
    }
  }, [])

  return { isMobile, isDesktop }
}

export default useMedia
