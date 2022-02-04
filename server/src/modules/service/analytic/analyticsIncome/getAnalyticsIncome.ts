import { AnalyticsCategory, AnalyticsInput, User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { queryAnalyticsIncome } from '../../../database/index.js'
import { toObjectId } from '../../../utils/index.js'

export const getAnalyticsIncome = async (user: User, input?: AnalyticsInput | null): Promise<AnalyticsCategory[]> => {
  const gte = input?.filter?.date?.gte ? new Date(input.filter.date.gte) : undefined
  const lte = input?.filter?.date?.lte ? new Date(input.filter.date.lte) : undefined

  return await queryAnalyticsIncome(toObjectId(user.id), gte, lte)
}
