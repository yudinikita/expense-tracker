import { CATEGORY_MAX_LENGTH, CATEGORY_MIN_LENGTH } from '../../../../../data/constants'

export const checkUnique = (categories, verifiableTitle) => {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i]?.title === verifiableTitle) {
      return false
    }
  }
  return true
}

export const checkValidLength = (checkCategory) => {
  return checkCategory.length < CATEGORY_MAX_LENGTH
    && checkCategory.length > CATEGORY_MIN_LENGTH
}
