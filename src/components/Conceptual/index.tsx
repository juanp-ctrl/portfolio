import Image from 'next/image'
import styles from './styles.module.css'
import { useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations('common')

  return (
    <div className={styles.container}>
      <div className="pb-14">
        <h2>{t('the')}</h2>
        <h2>{t('universe')}</h2>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/change.gif"
          alt="Change GIF"
          unoptimized
          width={300}
          height={300}
        />
      </div>
      <div className={`flex flex-col items-end ${styles.quote}`}>
        <h2>{t('is')}</h2>
        <h2>{t('change')}</h2>
        <p>{t('quote')}</p>
      </div>
    </div>
  )
}
