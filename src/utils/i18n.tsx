import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LANGUAGE, RUSSIAN_LANGUAGE } from '../Constants/languages'
import translationsENG from '../translations/translationsENG'
import translationsRU from '../translations/translationsRU'

const resources = {
  ru: {
    translation: translationsRU,
  },
  eng: {
    translation: translationsENG,
  },
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: RUSSIAN_LANGUAGE.value,
  lng: window?.location.pathname.includes('eng')
    ? DEFAULT_LANGUAGE
    : RUSSIAN_LANGUAGE.value,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export const setCurrentLanguage = (language: any) =>
  i18n.changeLanguage(language).then()

export const getLanguage = () => i18n.language || DEFAULT_LANGUAGE
