import Image from 'next/image'
import styles from './styles.module.css'

export default function index() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-20 pr-8">
      <div className={styles['balloons-container']}>
        <Image
          src="/images/balloon1.svg"
          alt="yellow balloon"
          width={150}
          height={150}
          className="absolute z-10 top-0 left-0"
        />
        <Image
          src="/images/balloon2.svg"
          alt="black balloon"
          width={150}
          height={150}
          className="absolute z-20 top-5 left-11"
        />
        <Image
          src="/images/balloon3.svg"
          alt="white balloon"
          width={150}
          height={150}
          className="absolute z-30 top-10 left-[88px]"
        />
      </div>
    </div>
  )
}
