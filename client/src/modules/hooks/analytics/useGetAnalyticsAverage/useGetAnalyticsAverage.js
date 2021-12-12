import { useQuery } from '@apollo/client'
import { ANALYTICS_AVERAGE } from '../../../graphql/queries'

export const useGetAnalyticsAverage = (startDate, endDate) => {
  const { data, loading, error } = useQuery(ANALYTICS_AVERAGE, {
    variables: { startDate, endDate }
  })

  return {
    analyticsAverage: data?.analyticsAverage || [],
    loading,
    error
  }
}
