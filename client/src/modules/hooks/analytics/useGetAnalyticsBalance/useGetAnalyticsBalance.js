import { useQuery } from '@apollo/client'
import { ANALYTICS_BALANCE } from '../../../graphql/queries'

export const useGetAnalyticsBalance = (startDate, endDate) => {
  const { data, loading, error } = useQuery(ANALYTICS_BALANCE, {
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
    analyticsBalance: data?.analyticsBalance || [],
    loading,
    error
  }
}
