import pkg from 'mongoose'
import { AnalyticsCategory, Balance } from '../../graphql/__generated__/graphql.types.gen.js'

export interface ResponseAnalytics {
  income: number
  expanse: number
}

export type QueryAnalytics = (
  userId: pkg.Types.ObjectId,
  gte: Date,
  lte: Date
) => Promise<ResponseAnalytics>

export type QueryAnalyticsCategory = (
  userId: pkg.Types.ObjectId,
  gte: Date,
  lte: Date
) => Promise<AnalyticsCategory[]>

export type QueryBalance = (userId: pkg.Types.ObjectId) => Promise<Balance[]>

export type QueryBalancePerDate = (
  userId: pkg.Types.ObjectId,
  gte: Date,
  lte: Date
) => Promise<Balance[]>
