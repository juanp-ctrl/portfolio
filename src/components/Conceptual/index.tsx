import Image from 'next/image'
import styles from './styles.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <div className="pb-14">
        <h2>THE</h2>
        <h2>UNIVERSE</h2>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/change.gif"
          alt="Change GIF"
          width={300}
          height={300}
        />
      </div>
      <div className={`flex flex-col items-end ${styles.quote}`}>
        <h2>IS</h2>
        <h2>CHANGE</h2>
        <p>Quote (Marco Aurelio, Book IV) </p>
      </div>
    </div>
  )
}
