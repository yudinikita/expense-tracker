import pkg from 'mongoose'
import { CategoryModel } from '../../../models/index.js'
import { defaultCategories } from './defaultCategories.js'

const { Types } = pkg

export const createDefaultCategories = async (id: string): Promise<void> => {
  const userId = new Types.ObjectId(id)
  const defaultCategoriesWithUser = defaultCategories.map(category => { return { user: userId, title: category } })
  await CategoryModel.insertMany(defaultCategoriesWithUser)
}
