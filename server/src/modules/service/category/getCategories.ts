import { CategoryModel } from '../../models/index.js'
import { Category, User } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const getCategories = async (user: User): Promise<Category[]> => {
  const categories = await CategoryModel.find({ user: toObjectId(user.id) }).sort({ title: 1 })
  return categories
}
