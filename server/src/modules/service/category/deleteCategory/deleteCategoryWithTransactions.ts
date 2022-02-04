import { CategoryModel } from '../../../models/index.js'
import { CategoryDeleteInput, CategoryDeletePayload } from '../../../graphql/__generated__/graphql.types.gen.js'
import { deleteManyTransaction } from '../../transactions/index.js'
import { toObjectId } from '../../../utils/index.js'

export const deleteCategoryWithTransactions = async (input: CategoryDeleteInput): Promise<CategoryDeletePayload> => {
  const categoryId = toObjectId(input.id)
  const result = await CategoryModel.deleteOne({ _id: categoryId })
  await deleteManyTransaction(categoryId)
  const success = result.deletedCount === 1

  return {
    id: input.id,
    success
  }
}
