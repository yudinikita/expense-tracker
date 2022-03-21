import pkg from 'mongoose'
import { CategoryModel } from '../../../models/index.js'
import { defaultCategories } from './defaultCategories.js'

const { Types } = pkg

export const createDefaultCategories = async (id: string, lng: string): Promise<void> => {
  const userId = new Types.ObjectId(id)

  // @ts-ignore
  const defaultCategoriesWithUser = defaultCategories[lng]
    .map((category: string) => {
      return {
        user: userId,
        title: category
      }
    })

  await CategoryModel.insertMany(defaultCategoriesWithUser)
}
