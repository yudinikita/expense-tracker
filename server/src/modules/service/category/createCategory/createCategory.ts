import { CategoryModel } from '../../../models/index.js'
import { Category, CategoryInput, User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../../utils/index.js'

export const createCategory = async (user: User, category: CategoryInput): Promise<Category> => {
  const newCategory = await CategoryModel.create({ user: toObjectId(user.id), title: category.title })
  return newCategory.toJSON()
}
