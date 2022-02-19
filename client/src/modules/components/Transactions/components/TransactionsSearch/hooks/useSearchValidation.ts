import { useTranslation } from 'react-i18next'

export const useSearchValidation = () => {
  const { t } = useTranslation()

  const validationSearch = (text: string) => {
    if (text?.length === 0) {
      return {
        isValid: false,
        message: t('alert.transactions.search.valid.length')
      }
    }

    return {
      isValid: true,
      message: ''
    }
  }

  return {
    validationSearch
  }
}
