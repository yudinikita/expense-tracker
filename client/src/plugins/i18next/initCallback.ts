import i18n, { Callback } from 'i18next'
import dayjs from 'dayjs'
import { buildYupLocale } from 'plugins/yup'

/**
 * Builds the Yup Locale
 */
export const initCallback: Callback = (_, t) => {
  buildYupLocale(t)
  dayjs.locale(i18n.language)
}
