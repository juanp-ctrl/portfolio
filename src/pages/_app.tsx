import Layout from '@/components/layout'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import '../../next-i18next.config'

function App({ Component, pageProps }: AppProps) {
  
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Component key={pageProps.key} {...pageProps} />
      </Layout>
    </AnimatePresence>
  )
}

export default appWithTranslation(App);
