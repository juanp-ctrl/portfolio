import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fullstack Course | Juan Pablo Jiménez',
  description:
    'Learn fullstack development by contributing to open source. Student contributions and course resources for web development education.',
  keywords: [
    'fullstack course',
    'web development course',
    'git tutorial',
    'github tutorial',
    'open source contribution',
    'learn to code',
    'react course',
    'nextjs course',
    'typescript course',
  ],
  openGraph: {
    title: 'Fullstack Development Course | Juan Pablo Jiménez',
    description:
      'Learn by contributing to real projects. Open-source education for aspiring fullstack developers.',
    type: 'website',
  },
}

export default function FullstackCourseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
