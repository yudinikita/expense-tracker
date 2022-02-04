import { CategoryModel } from '../../models/index.js'
import { Category, CategoryInput } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const updateCategory = async (categoryId: string, category: CategoryInput): Promise<Category> => {
  const updatedCategory = await CategoryModel.findByIdAndUpdate(
    toObjectId(categoryId),
    { title: category.title },
    { returnDocument: 'after' }
  )
  return updatedCategory.toJSON()
}
