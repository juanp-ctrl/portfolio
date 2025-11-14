'use client'
import { useTranslations } from 'next-intl'
import Header from '@/components/Header/Header'
import PageTransition from '@/components/PageTransition'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { getProfessorProfile, getStudentsOnly } from '@/lib/students'
import { useTransition } from '@/context/TransitionContext'

export default function FullstackCoursePage() {
  const t = useTranslations('fullstack_course')
  const { startTransition } = useTransition()

  const professor = getProfessorProfile()
  const studentsList = getStudentsOnly()

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    startTransition(href)
  }

  return (
    <PageTransition>
      <main className="relative w-full overflow-hidden bg-white">
        <Header variant="dark" />

        {/* Hero Section */}
        <section className="px-10 md:px-20 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            {/* Text Content Column */}
            <div className="flex-1 order-1 md:order-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-libre italic text-4xl md:text-6xl text-black-primary mb-6"
              >
                {t('title')}
              </motion.h1>

              {/* Image - Mobile: Between title and text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mb-6 md:hidden"
              >
                <Image
                  src="/images/FullStack Image.png"
                  alt="Fullstack Development Course"
                  width={250}
                  height={250}
                  className="w-[250px] h-auto rounded-lg mx-auto"
                  priority
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-josefin text-xl md:text-2xl text-black-primary/80 mb-4 max-w-3xl"
              >
                {t('subtitle')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-josefin text-xl md:text-2xl text-black-primary/70 max-w-4xl"
              >
                {t('description')}
              </motion.p>
            </div>

            {/* Image Column - Desktop: Second column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="order-2 md:order-2 hidden md:block md:ml-auto"
            >
              <Image
                src="/images/FullStack Image.png"
                alt="Fullstack Development Course"
                width={350}
                height={350}
                className="w-[350px] h-auto rounded-lg"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Course Goal Section */}
        <section className="px-10 md:px-20 py-12 bg-black-secondary">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="font-libre italic text-3xl md:text-4xl text-yellow-primary mb-6">
                {t('goal_title')}
              </h2>
              <p className="font-josefin text-xl md:text-2xl text-white-primary max-w-4xl">
                {t('goal_description')}
              </p>
            </motion.div>

            {/* Professor Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center md:items-center ml-6"
            >
              <h2 className="font-libre italic text-3xl md:text-4xl text-yellow-primary mb-8">
                {t('professor_section_title')}
              </h2>

              {professor && (
                <Link
                  href={`/fullstack-course/students/${professor.username}`}
                  onClick={(e) =>
                    handleNavigation(
                      e,
                      `/fullstack-course/students/${professor.username}`,
                    )
                  }
                  className="inline-flex items-center md:mt-4 px-6 border-b-white border-b-2 shadow-[8px_8px_0_#1e1e1e] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_#1e1e1e]"
                >
                  <span className="font-josefin text-xl md:text-2xl text-white hover:text-yellow-primary transition-colors">
                    {professor.name}
                  </span>
                </Link>
              )}
            </motion.div>
          </div>
        </section>

        {/* Students Section */}
        <section className="px-10 md:px-20 py-16 bg-white-secondary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-libre italic text-3xl md:text-4xl text-black-primary mb-8">
              {t('students_section_title')}
            </h2>

            {studentsList.length === 0 ? (
              <p className="font-josefin text-lg text-black-primary/60 italic">
                {t('no_students_yet')}
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
                {studentsList.map((student, index) => (
                  <motion.div
                    key={student.username}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/fullstack-course/students/${student.username}`}
                      onClick={(e) =>
                        handleNavigation(
                          e,
                          `/fullstack-course/students/${student.username}`,
                        )
                      }
                      className="group flex flex-col gap-2 p-6 bg-white border-2 border-black-secondary transition-all duration-300 ease-in-out hover:bg-yellow-secondary hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                    >
                      <span className="font-josefin text-lg md:text-xl text-black-primary group-hover:text-black-secondary transition-colors">
                        {student.name}
                      </span>
                      <span className="font-josefin text-sm text-black-primary/60 group-hover:text-black-secondary group-hover:opacity-100 transition-all">
                        {t('view_profile')}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </section>

        {/* How to Contribute Section */}
        <section className="px-10 md:px-20 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-libre italic text-3xl md:text-4xl text-black-primary mb-8">
              {t('how_to_title')}
            </h2>

            <div className="space-y-4 max-w-4xl">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((step) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: step * 0.05 }}
                  className="p-4 border-l-[3px] border-yellow-secondary bg-[rgba(242,223,107,0.1)] transition-all duration-300 ease-in-out hover:bg-[rgba(242,223,107,0.2)] hover:translate-x-2"
                >
                  <p className="font-josefin text-base md:text-lg text-black-primary">
                    {t(`step_${step}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Important Links Section */}
        <section className="px-10 md:px-20 py-12 bg-yellow-primary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-libre italic text-3xl md:text-4xl text-black-primary mb-8">
              {t('important_links_title')}
            </h2>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/juanp-ctrl/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black-secondary text-white-secondary font-josefin text-base border-2 border-black-secondary transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black-secondary hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] md:w-auto w-full text-center"
              >
                {t('github_repo')}
              </a>

              <Link
                href="/fullstack-course/students/juan-pablo-jimenez"
                onClick={(e) =>
                  handleNavigation(
                    e,
                    '/fullstack-course/students/juan-pablo-jimenez',
                  )
                }
                className="inline-block px-6 py-3 bg-black-secondary text-white-secondary font-josefin text-base border-2 border-black-secondary transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black-secondary hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] md:w-auto w-full text-center"
              >
                {t('blueprint_profile')}
              </Link>

              <Link
                href="/fullstack-course/resources"
                onClick={(e) =>
                  handleNavigation(e, '/fullstack-course/resources')
                }
                className="inline-block px-6 py-3 bg-black-secondary text-white-secondary font-josefin text-base border-2 border-black-secondary transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black-secondary hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] md:w-auto w-full text-center"
              >
                {t('resources_link')}
              </Link>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
