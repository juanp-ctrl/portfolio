import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import '../../next-i18next.config'

function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  )
}

export default appWithTranslation(App)
