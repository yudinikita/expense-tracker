import { checkUnique, checkValidLength } from './utils/validations'
import { Category, useCategoriesQuery } from '../../../../graphql/__generated__/graphql.gen'

export const useValidationCategory = (verifiableTitle: string) => {
  const { data } = useCategoriesQuery()
  const categories = data?.categories as Category[]

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
