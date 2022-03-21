import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import options from './options'
import { initCallback } from 'plugins/i18next/initCallback'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options, initCallback)

export default i18n
