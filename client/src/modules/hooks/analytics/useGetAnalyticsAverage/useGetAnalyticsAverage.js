import { useQuery } from '@apollo/client'
import { ANALYTICS_AVERAGE } from '../../../graphql/queries'

export const useGetAnalyticsAverage = (startDate, endDate) => {
  const { data, loading, error } = useQuery(ANALYTICS_AVERAGE, {
    variables: {
      input: {
        filter: {
          date: {
            gte: startDate,
            lte: endDate,
          }
        }
      }
    }
  })

  return {
    analyticsAverage: data?.analyticsAverage || [],
    loading,
    error
  }
}
