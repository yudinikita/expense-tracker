import { CategoryModel } from '../../../models/index.js'
import { CategoryDeleteInput } from '../../../graphql/__generated__/graphql.types.gen.js'
import { updateTransactionsByCategory } from '../../transactions/index.js'

export const deleteCategoryReplace = async (input: CategoryDeleteInput): Promise<boolean> => {
  const id = input.id
  const newCategoryId = input.newId ?? ''
  await updateTransactionsByCategory(id, newCategoryId)
  const result = await CategoryModel.deleteOne({ _id: id })
  return result.deletedCount === 1
}
