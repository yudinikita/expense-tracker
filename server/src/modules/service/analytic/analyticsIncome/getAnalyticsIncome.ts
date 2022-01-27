import pkg from 'mongoose'
import { AnalyticsCategory, AnalyticsInput, User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { queryAnalyticsIncome } from '../../../database/index.js'

const { Types } = pkg

export const getAnalyticsIncome = async (user: User, input: AnalyticsInput): Promise<AnalyticsCategory[]> => {
  const userId = new Types.ObjectId(user?.id)

  let analyticsCategory: AnalyticsCategory[] = []

  const shouldApplyFilters = input?.filter

  if (shouldApplyFilters == null) return analyticsCategory

  const shouldApplyDateFilters = input?.filter?.date

  if (shouldApplyDateFilters != null) {
    const gteFilter = input?.filter?.date?.gte ?? null
    const lteFilter = input?.filter?.date?.lte ?? null

    if (gteFilter !== null && lteFilter !== null) {
      const gte = new Date(gteFilter)
      const lte = new Date(lteFilter)

      analyticsCategory = await queryAnalyticsIncome(userId, gte, lte)
    }
  }

  return analyticsCategory
}
