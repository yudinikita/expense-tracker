import { setLocale } from 'yup'
import { TFunction } from 'react-i18next'

/**
 * Builds the Yup Locale
 */
export const buildYupLocale = (t: TFunction): void => {
  setLocale({
    mixed: {
      required: () => t('validations.common.required')
    },
    string: {
      min: ({ min }) => t('validations.common.min', { min }),
      max: ({ max }) => t('validations.common.max', { max }),
      email: () => t('validations.common.email')
    }
  })
}
