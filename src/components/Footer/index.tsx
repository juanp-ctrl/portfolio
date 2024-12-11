import React from 'react'
import styles from './styles.module.css'

const Nav = () => {
  return (
    <div className={`flex flex-col gap-2 ${styles.nav}`}>
      <p>Home</p>
      <p>About</p>
      <p>Blog</p>
      <p>Contact</p>
    </div>
  )
}

const Social = () => {
  return (
    <div className={`flex flex-col gap-1 ${styles.social}`}>
      <p>Socials</p>
      <h4>Linkedin</h4>
      <h4>Github</h4>
      <h4>Instagram</h4>
    </div>
  )
}

const Section1 = () => {
  return (
    <div className="flex flex-col gap-8">
      <svg width="100%" height="1" viewBox="0 0 100% 1" fill="none">
        <path d="M0 0 H1000" stroke="black" strokeWidth="2" />
      </svg>
      <div className="flex shrink-0 justify-between px-10">
        <Nav />
        <Social />
      </div>
    </div>
  )
}

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h2 className="text-black-primary text-4xl font-libre italic">
        Juan Pablo <br /> Jiménez
      </h2>
      <p className="text-black-secondary font-josefin text-3xl">Folio 2025</p>
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
        <div className="py-10 px-5 h-full w-full flex flex-col justify-between">
          <Section1 />
          <Section2 />
        </div>
      </div>
    </div>
  )
}
