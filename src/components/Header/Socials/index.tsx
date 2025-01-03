import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'

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
