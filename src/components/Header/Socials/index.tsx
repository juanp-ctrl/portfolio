import { useTranslation } from 'next-i18next'
import styles from './styles.module.css'
import { socials } from '@/constants/socials'

export default function Index() {
  const { t } = useTranslation('common')
  return (
    <div className={styles['socials-footer']}>
      <div className={styles.header}>
        <p>{t('socials')}</p>
      </div>
      <div className={styles.socials}>
        {socials.map((data, index) => {
          return (
            <a key={index} href={data.path} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          )
        })}
      </div>
    </div>
  )
}
