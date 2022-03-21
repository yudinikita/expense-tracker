import { CATEGORY_MAX_LENGTH, CATEGORY_MIN_LENGTH } from 'modules/constants'
import { Category } from 'modules/graphql'

export const checkUnique = (categories: Category[], verifiableTitle: string) => {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i]?.title === verifiableTitle) {
      return false
    }
  }
  return true
}

export const checkValidLength = (categoryTitle: string) => {
  return categoryTitle.length < CATEGORY_MAX_LENGTH &&
    categoryTitle.length > CATEGORY_MIN_LENGTH
}
