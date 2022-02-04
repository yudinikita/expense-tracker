import { CategoryModel } from '../../../models/index.js'
import { CategoryDeleteInput, CategoryDeletePayload } from '../../../graphql/__generated__/graphql.types.gen.js'
import { updateTransactionsByCategory } from '../../transactions/index.js'
import { toObjectId } from '../../../utils/index.js'

export const deleteCategoryReplace = async (input: CategoryDeleteInput): Promise<CategoryDeletePayload> => {
  const id = input.id

  if (input?.newId !== null && input?.newId !== undefined) {
    await updateTransactionsByCategory(id, input.newId)
  }

  const result = await CategoryModel.deleteOne({ _id: toObjectId(id) })
  const success = result.deletedCount === 1

  return {
    id: input.id,
    success
  }
}
