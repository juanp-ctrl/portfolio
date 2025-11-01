'use client'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'

interface LanguageSwitcherProps {
  currentLocale: string
  onLanguageChange?: () => void
}

export default function LanguageSwitcher({ currentLocale, onLanguageChange }: LanguageSwitcherProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const changeLanguage = (newLocale: string) => {
    startTransition(() => {
      // Set cookie
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`
      
      // Refresh to apply new locale
      router.refresh()
      
      if (onLanguageChange) {
        onLanguageChange()
      }
    })
  }

  return {
    changeLanguage,
    isPending,
    currentLocale,
    availableLocales: ['en', 'es'] as const,
  }
}

