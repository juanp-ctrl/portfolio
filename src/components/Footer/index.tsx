import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import navItems from '@/constants/routes'
import { useTranslation } from 'react-i18next'

const socials = [
  {
    title: 'Linkedin',
    path: 'https://www.linkedin.com/in/juan-pablo-jimenez-h/',
  },
  {
    title: 'Github',
    path: 'https://github.com/juanp-ctrl',
  },
  {
    title: 'Instagram',
    path: 'https://instagram.com/pabloj_h',
  },
]

const Nav = () => {
  const { t } = useTranslation('common')
  return (
    <div className={`flex flex-col gap-2 ${styles.nav}`}>
      <p className={styles.hint}>Sitemap</p>
      {navItems.map((data, index) => (
        <p key={index}>
          <Link href={data.path}>{t(data.title)}</Link>
        </p>
      ))}
    </div>
  )
}

const Social = () => {
  const { t } = useTranslation('common')
  return (
    <div className={`flex flex-col gap-1 ${styles.social}`}>
      <p>{t('socials')}</p>
      {socials.map((data, index) => {
        return (
          <h4 key={index}>
            <a href={data.path} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </h4>
        )
      })}
    </div>
  )
}

const Section1 = () => {
  return (
    <div className="flex flex-col gap-8">
      <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none">
        <path d="M0 0 H10000" stroke="black" strokeWidth="2" />
      </svg>
      <div className="flex shrink-0 justify-between px-10">
        <Nav />
        <Social />
      </div>
    </div>
  )
}

const Section2 = () => {
  const { t } = useTranslation('common')
  return (
    <div className="flex justify-between items-end">
      <h2 className="text-black-primary text-4xl font-libre italic">
        Juan Pablo <br /> Jiménez
      </h2>
      <div className="flex flex-col gap-1">
        <p className="text-[0.9rem]">{t('version')}</p>
        <p className="text-black-secondary font-josefin text-2xl">Folio 2025</p>
      </div>
    </div>
  )
}

export default function Index() {
  return (
    <div
      className="relative h-[450px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="fixed bottom-0 h-[450px] w-full">
        <div className="py-10 px-5 size-full flex flex-col justify-between">
          <Section1 />
          <Section2 />
        </div>
      </div>
    </div>
  )
}
