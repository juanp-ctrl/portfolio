import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, Variants } from 'framer-motion'

const CookieConsent = () => {
  const { t } = useTranslation('common')
  const [consent, setConsent] = useState<boolean | null>(null)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent')
    if (savedConsent !== null) {
      setConsent(savedConsent === 'true')
    } else {
      // Mostrar el banner después de 3.2 segundos
      const timer = setTimeout(() => {
        setVisible(true)
      }, 3200)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setConsent(true)

    // Enable Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'false')
    setConsent(false)

    // Disable Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      })
    }
  }

  const cookieConsentVariants: Variants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: 'spring',
        ease: [0.45, 0, 0.55, 1],
      },
    },
  }

  if (consent !== null || !visible) return null

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-black-secondary text-white-primary p-4 z-50"
      initial="hidden"
      animate="visible"
      variants={cookieConsentVariants}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0 font-josefin">
          {t(
            'cookies.message',
            'Este sitio utiliza cookies para analizar el tráfico. ¿Aceptas el uso de cookies?',
          )}
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-yellow-primary text-black-primary rounded hover:opacity-90 font-josefin transition-opacity"
          >
            {t('cookies.accept', 'Aceptar')}
          </button>
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-[#3a3a3a] text-white-primary rounded hover:opacity-90 font-josefin transition-opacity"
          >
            {t('cookies.reject', 'Rechazar')}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default CookieConsent

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag: any
    dataLayer: any
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
