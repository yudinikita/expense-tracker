import { AnalyticsCategory } from '../../graphql/__generated__/graphql.types.gen.js'
import mongoose from 'mongoose'

export interface ResponseAnalytics {
  income: number
  expanse: number
}

export type QueryAnalytics = (
  userId: mongoose.Types.ObjectId,
  gte?: Date | undefined,
  lte?: Date | undefined
) => Promise<ResponseAnalytics>

export type QueryAnalyticsCategory = (
  userId: mongoose.Types.ObjectId,
  gte?: Date | undefined,
  lte?: Date | undefined
) => Promise<AnalyticsCategory[]>
