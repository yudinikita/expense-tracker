import { CategoryModel } from '../../../models/index.js'
import { CategoryInput, User } from '../../../graphql/__generated__/graphql.types.gen.js'

export const createCategory = async (user: User, category?: CategoryInput): Promise<any> => {
  const newCategory = new CategoryModel({ user, ...category })

  await newCategory.save()

  return newCategory
}
