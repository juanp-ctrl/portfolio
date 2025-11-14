'use client'
import { motion } from 'motion/react'
import styles from './styles.module.css'

interface FolderUIProps {
  fileName: string
  filePath: string
  fileSize: string
  fileType: 'pdf' | 'doc' | 'zip' | 'other'
}

const fileTypeIcons: Record<string, string> = {
  pdf: '📄',
  doc: '📝',
  zip: '📦',
  other: '📁',
}

export default function FolderUI({
  fileName,
  filePath,
  fileSize,
  fileType,
}: FolderUIProps) {
  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a')
    link.href = filePath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={styles.folderContainer}
      onClick={handleDownload}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* File Icon */}
      <div className={styles.folderIcon}>
        <span className={styles.fileEmoji}>{fileTypeIcons[fileType]}</span>
      </div>

      {/* File Info */}
      <div className={styles.folderInfo}>
        <h3 className={styles.fileName}>{fileName}</h3>
        <p className={styles.fileSize}>{fileSize}</p>
      </div>

      {/* Download Indicator */}
      <div className={styles.downloadIndicator}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.downloadIcon}
        >
          <path
            d="M12 3V16M12 16L7 11M12 16L17 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </motion.div>
  )
}
