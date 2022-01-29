import pkg from 'mongoose'
import { CategoryModel } from '../../../models/index.js'
import { CategoryDeleteInput } from '../../../graphql/__generated__/graphql.types.gen.js'

const { Types } = pkg

export const deleteCategory = async (input: CategoryDeleteInput): Promise<boolean> => {
  const categoryId = new Types.ObjectId(input.id)
  const result = await CategoryModel.deleteOne({ _id: categoryId })
  return result.deletedCount === 1
}
