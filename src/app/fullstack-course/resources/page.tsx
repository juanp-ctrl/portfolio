'use client'
import { useTranslations } from 'next-intl'
import Header from '@/components/Header/Header'
import PageTransition from '@/components/PageTransition'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'motion/react'
import FolderUI from '@/components/FolderUI'
import { useTransition } from '@/context/TransitionContext'

/**
 * Resources Configuration
 *
 * Add new resources here. Files should be placed in /public/fullstack-course/resources/
 *
 * Properties:
 * - fileName: Display name of the file
 * - filePath: Path to file in public directory (e.g., '/fullstack-course/resources/git-basics.pdf')
 * - fileSize: Human-readable file size (e.g., '2.5 MB')
 * - fileType: Type of file for icon display ('pdf', 'doc', 'zip', 'other')
 */
const resources = [
  {
    fileName: 'Desarrollo Web Fullstack 1',
    filePath: '/fullstack-course/resources/Desarrollo-Web-Fullstack-1.pdf',
    fileSize: '2.4 MB',
    fileType: 'pdf' as const,
  },
  {
    fileName: 'Git History and Essentials',
    filePath: '/fullstack-course/resources/2. Git | History + Essentials.pdf',
    fileSize: '2.9 MB',
    fileType: 'pdf' as const,
  },
  // Add more resources here as needed
  // Example:
  // {
  //   fileName: 'HTML & CSS Guide',
  //   filePath: '/fullstack-course/resources/html-css-guide.pdf',
  //   fileSize: '3.2 MB',
  //   fileType: 'pdf' as const,
  // },
]

export default function ResourcesPage() {
  const t = useTranslations('fullstack_course')
  const { startTransition } = useTransition()

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    startTransition('/fullstack-course')
  }

  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden bg-white">
        <Header variant="dark" />

        {/* Header Section */}
        <section className="px-6 md:px-20 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/fullstack-course"
              onClick={handleNavigation}
              className="inline-flex items-center gap-2 font-josefin text-base text-black-primary/70 hover:text-yellow-primary transition-colors mb-6"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t('back_to_course')}
            </Link>

            <h1 className="font-libre italic text-4xl md:text-6xl text-black-primary mb-6">
              {t('resources_title')}
            </h1>

            <p className="font-josefin text-base md:text-lg text-black-primary/70 max-w-3xl">
              {t('resources_description')}
            </p>
          </motion.div>
        </section>

        {/* Resources Grid - Mac Finder Style */}
        <section className="px-6 md:px-20 py-12 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {resources.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-josefin text-lg text-black-primary/60 italic">
                  No resources available yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                {resources.map((resource, index) => (
                  <motion.div
                    key={resource.fileName}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <FolderUI
                      fileName={resource.fileName}
                      filePath={resource.filePath}
                      fileSize={resource.fileSize}
                      fileType={resource.fileType}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
