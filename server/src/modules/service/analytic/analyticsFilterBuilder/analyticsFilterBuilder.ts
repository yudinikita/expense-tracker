import { AnalyticsFilters } from '../../../graphql/__generated__/graphql.types.gen.js'

export const analyticsFilterBuilder = (filter: AnalyticsFilters): object => {
  let filterOutput = {}

  const gte = filter?.date?.gte
  const lte = filter?.date?.lte

  if (gte !== undefined && gte !== null &&
    lte !== undefined && lte !== null) {
    filterOutput = {
      createdAt: {
        $gte: new Date(gte),
        $lte: new Date(lte)
      }
    }
  } else if (gte !== undefined && gte !== null) {
    filterOutput = { createdAt: { $gte: new Date(gte) } }
  } else if (lte !== undefined && lte !== null) {
    filterOutput = { createdAt: { $gte: new Date(lte) } }
  }

  return filterOutput
}
