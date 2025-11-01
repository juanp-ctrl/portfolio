import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  // Get locale from cookie or default to 'en'
  const cookieStore = await cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en'

  // Load all message files and merge them
  const [common, about, projects, contact] = await Promise.all([
    import(`../../public/locales/${locale}/common.json`),
    import(`../../public/locales/${locale}/about.json`),
    import(`../../public/locales/${locale}/projects.json`),
    import(`../../public/locales/${locale}/contact.json`),
  ])

  return {
    locale,
    messages: {
      common: common.default,
      about: about.default,
      projects: projects.default,
      contact: contact.default,
    },
  }
})

