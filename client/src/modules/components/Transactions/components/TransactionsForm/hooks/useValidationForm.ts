import { DataTransactionsForm } from './useTransactionsForm'
import { useTranslation } from 'react-i18next'

export const useValidationForm = (verifiableDataForm: DataTransactionsForm) => {
  const { t } = useTranslation()

  if (verifiableDataForm?.amount.toString()?.length === 0) {
    return {
      isValid: false,
      messageFailed: t('alert.transactions.valid.amount')
    }
  }

  if (verifiableDataForm?.category === '') {
    return {
      isValid: false,
      messageFailed: t('alert.transactions.valid.category')
    }
  }

  return {
    isValid: true,
    messageFailed: ''
  }
}
