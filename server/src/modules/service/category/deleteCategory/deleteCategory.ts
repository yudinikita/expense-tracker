import { CategoryModel } from '../../../models/index.js'
import { CategoryDeleteInput, CategoryDeletePayload } from '../../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../../utils/index.js'

export const deleteCategory = async (input: CategoryDeleteInput): Promise<CategoryDeletePayload> => {
  const result = await CategoryModel.deleteOne({ _id: toObjectId(input.id) })
  const success = result.deletedCount === 1

  return {
    id: input.id,
    success
  }
}
