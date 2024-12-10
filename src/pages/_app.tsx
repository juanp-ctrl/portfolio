import Layout from '@/components/layout'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Component key={pageProps.key} {...pageProps} />
      </Layout>
    </AnimatePresence>
  )
}
