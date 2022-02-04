import { CategoryModel } from '../../../models/index.js'
import { CategoryDeleteInput, CategoryDeletePayload } from '../../../graphql/__generated__/graphql.types.gen.js'
import { updateTransactionsByCategory } from '../../transactions/index.js'

export const deleteCategoryReplace = async (input: CategoryDeleteInput): Promise<CategoryDeletePayload> => {
  const id = input.id
  const newCategoryId = input.newId ?? ''
  await updateTransactionsByCategory(id, newCategoryId)
  const result = await CategoryModel.deleteOne({ _id: id })
  const success = result.deletedCount === 1

  return {
    id: input.id,
    success
  }
}
