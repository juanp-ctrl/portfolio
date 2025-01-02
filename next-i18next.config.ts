import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(HttpApi) // Permite cargar traducciones desde archivos
  .use(LanguageDetector) // Detecta el idioma del usuario
  .use(initReactI18next) // Vincula i18next con React
  .init({
    fallbackLng: 'en',
    lng: 'en', 
    debug: process.env.NODE_ENV === 'development',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', 
    },
  })

export default i18n
