import i18n, { t } from 'i18next'
import dayjs from 'dayjs'
import { buildYupLocale } from 'plugins/yup'
import { defaultSettings } from 'modules/context/settings/defaultSettings'

export const changeLanguage = async (newLanguage?: string): Promise<void> => {
  if (i18n.isInitialized && i18n.language !== newLanguage) {
    sessionStorage.removeItem('homePhrases')
    const userLanguage = newLanguage ?? defaultSettings?.language
    await i18n.changeLanguage(userLanguage)
    document.title = i18n.t('page.title')
    dayjs.locale(userLanguage)
    buildYupLocale(t)
  }
}
