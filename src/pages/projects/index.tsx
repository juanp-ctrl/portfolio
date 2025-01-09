import Header from '@/components/Header'
import Layout from '@/components/layout'
import Head from 'next/head'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Juan Pablo Jiménez's projects" />
        <link rel="canonical" href="https://www.juanpablojimenez.dev/projects" />
      </Head>
      <Header />
      <div className="bg-black-secondary flex justify-center items-center h-screen">
        <h1 className="text-white">In the making...</h1>
      </div>
    </Layout>
  )
}
