import '@/styles/globals.css'
import CustomCursor from '@/components/Cursor'
import useMedia from '@/hooks/useMedia'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'
import '../../next-i18next.config'
import '../../serviceWorkerRegistration.ts'
import type { AppProps } from 'next/app'

function App({ Component, pageProps, router }: AppProps) {
  const { isMobile } = useMedia()

  return (
    <>
      {!isMobile && <CustomCursor />}
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default appWithTranslation(App)
