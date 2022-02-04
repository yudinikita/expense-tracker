import { CategoryModel } from '../../../models/index.js'
import { Category, CategoryInput, User } from '../../../graphql/__generated__/graphql.types.gen.js'

export const createCategory = async (user: User, category: CategoryInput): Promise<Category> => {
  return await CategoryModel.create({ user: user.id, title: category.title })
}
