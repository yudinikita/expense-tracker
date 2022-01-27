import { CategoryModel } from '../../models/index.js'
import pkg from 'mongoose'
import { CategoryInput } from '../../graphql/__generated__/graphql.types.gen.js'

const { Types } = pkg

export const updateCategory = async (id: string, category?: CategoryInput): Promise<any> => {
  const categoryId = new Types.ObjectId(id)
  return await CategoryModel.findOneAndUpdate(
    { _id: categoryId },
    { $set: { ...category } },
    { returnOriginal: false }
  )
}
