import { InitOptions } from 'i18next'

const fallbackLanguage = 'ru'

const debug = false

const options: InitOptions = {
  fallbackLng: fallbackLanguage,
  debug,
  interpolation: {
    escapeValue: false
  }
}

export default options
