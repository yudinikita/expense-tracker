import { CategoryModel } from '../../models/index.js'
import { Category, CategoryInput } from '../../graphql/__generated__/graphql.types.gen.js'

export const updateCategory = async (id: string, category: CategoryInput): Promise<Category> => {
  return await CategoryModel.findByIdAndUpdate(
    id,
    { title: category.title },
    { returnDocument: 'after' }
  )
}
