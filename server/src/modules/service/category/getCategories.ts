import { CategoryModel } from '../../models/index.js'
import { User } from '../../graphql/__generated__/graphql.types.gen.js'
import pkg from 'mongoose'

const { Types } = pkg

export const getCategories = async (user: User): Promise<any> => {
  const userId = new Types.ObjectId(user.id)
  return await CategoryModel.find({ user: userId }).sort({ title: 1 })
}
