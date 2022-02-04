import pkg from 'mongoose'
import { CategoryModel } from '../../../models/index.js'
import { CategoryDeleteInput, CategoryDeletePayload } from '../../../graphql/__generated__/graphql.types.gen.js'

const { Types } = pkg

export const deleteCategory = async (input: CategoryDeleteInput): Promise<CategoryDeletePayload> => {
  const categoryId = new Types.ObjectId(input.id)
  const result = await CategoryModel.deleteOne({ _id: categoryId })
  const success = result.deletedCount === 1

  return {
    id: input.id,
    success
  }
}
