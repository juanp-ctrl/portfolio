import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Course Resources | Fullstack Course | Juan Pablo Jiménez',
  description:
    'Download course materials, PDFs, and resources for the fullstack development course.',
  openGraph: {
    title: 'Course Resources | Fullstack Course',
    description: 'Access all course materials and learning resources.',
    type: 'website',
  },
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
