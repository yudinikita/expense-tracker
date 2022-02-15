import { DataTransactionsForm } from './useTransactionsForm'

export const useValidationForm = (verifiableDataForm: DataTransactionsForm) => {
  if (verifiableDataForm?.amount.toString()?.length === 0) {
    return {
      isValid: false,
      messageFailed: 'Укажите сумму'
    }
  }

  if (verifiableDataForm?.category === '') {
    return {
      isValid: false,
      messageFailed: 'Укажите категорию'
    }
  }

  return {
    isValid: true,
    messageFailed: ''
  }
}
