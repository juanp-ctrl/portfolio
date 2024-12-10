import Link from 'next/link'
import styles from './styles.module.css'

export default function index() {
  return (
    <div
      className={`flex justify-between items-center px-10 py-6 ${styles.header}`}
    >
      <Link href={'/'} className={styles.logo}>
        JP
      </Link>
      <p className="italic text-base">Menu</p>
    </div>
  )
}
