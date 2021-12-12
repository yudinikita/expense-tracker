export const useValidationForm = (verifiableDataForm) => {
  if (verifiableDataForm?.amount?.length === 0) {
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
