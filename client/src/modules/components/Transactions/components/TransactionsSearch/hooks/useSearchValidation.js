export const useSearchValidation = () => {

  const validationSearch = (text) => {
    if (text?.length === 0) {
      return {
        isValid: false,
        message: 'Строка поиска пустая'
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
