'use client'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import styles from './styles.module.css'

interface DownloadButtonProps {
  className?: string
}

export default function DownloadButton({
  className = '',
}: DownloadButtonProps) {
  const t = useTranslations('home')
  const locale = useLocale()

  const handleDownloadCV = () => {
    const cvFileName = 'CV Juan Pablo Jiménez Heredia.pdf'

    window.open(`/cv/${encodeURIComponent(cvFileName)}`, '_blank')

    // Track download with Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).gtag('event', 'download', {
        event_category: 'CV',
        event_label: locale,
        value: 1,
      })
    }
  }

  return (
    <div className={`${styles.downloadButton} ${className}`}>
      <p onClick={handleDownloadCV} className={styles.downloadText}>
        {t('download_cv')}
        <Image
          src="/images/FileIcon.svg"
          alt="Download CV Icon"
          width={30}
          height={30}
          className={styles.downloadIcon}
        />
      </p>
    </div>
  )
}
