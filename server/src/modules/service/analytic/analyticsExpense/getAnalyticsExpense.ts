import { AnalyticsCategory, AnalyticsInput, User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { queryAnalyticsExpense } from '../../../database/index.js'
import { toObjectId } from '../../../utils/index.js'

export const getAnalyticsExpense = async (user: User, input?: AnalyticsInput | null): Promise<AnalyticsCategory[]> => {
  const gte = input?.filter?.date?.gte ? new Date(input.filter.date.gte) : undefined
  const lte = input?.filter?.date?.lte ? new Date(input.filter.date.lte) : undefined

  return await queryAnalyticsExpense(toObjectId(user.id), gte, lte)
}
