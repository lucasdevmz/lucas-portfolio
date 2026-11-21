import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptTranslation from './locales/pt/translation.json'
import enTranslation from './locales/en/translation.json'

const savedLanguage = localStorage.getItem('portfolio-language')

const initialLanguage = savedLanguage === 'en' || savedLanguage === 'pt' ? savedLanguage : 'pt'

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: ptTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  lng: initialLanguage,
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  localStorage.setItem('portfolio-language', language)
})

export default i18n
