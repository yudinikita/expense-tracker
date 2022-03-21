import { checkUnique, checkValidLength } from './utils/validations'
import { Category, useCategoriesQuery } from 'modules/graphql'
import { useTranslation } from 'react-i18next'

export const useValidationCategory = (verifiableTitle: string) => {
  const { t } = useTranslation()
  const { data } = useCategoriesQuery()
  const categories = data?.categories as Category[]

  const isUnique = checkUnique(categories, verifiableTitle)
  const isValidLength = checkValidLength(verifiableTitle)

  if (verifiableTitle.length === 0) {
    return {
      isValid: false,
      messageFailed: t('alert.category.valid.name')
    }
  }

  if (!isUnique) {
    return {
      isValid: false,
      messageFailed: t('alert.category.valid.exists')
    }
  }

  if (!isValidLength) {
    return {
      isValid: false,
      messageFailed: t('alert.category.valid.length')
    }
  }

  return {
    isValid: true,
    messageFailed: ''
  }
}
