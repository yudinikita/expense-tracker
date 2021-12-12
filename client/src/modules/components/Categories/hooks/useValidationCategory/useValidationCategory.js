import { checkUnique, checkValidLength } from './utils/validations'
import { useGetCategories } from '../../../../hooks'

export const useValidationCategory = (verifiableTitle) => {
  const { categories } = useGetCategories()

  const isUnique = checkUnique(categories, verifiableTitle)
  const isValidLength = checkValidLength(verifiableTitle)

  if (verifiableTitle.length === 0) {
    return {
      isValid: false,
      messageFailed: 'Укажите название категории'
    }
  }

  if (!isUnique) {
    return {
      isValid: false,
      messageFailed: 'Такая категория уже существует'
    }
  }

  if (!isValidLength) {
    return {
      isValid: false,
      messageFailed: 'Некорректная длина категории'
    }
  }

  return {
    isValid: true,
    messageFailed: ''
  }
}
