import { useQuery } from '@apollo/client'
import { ANALYTICS_INCOME } from '../../../graphql/queries'

export const useGetAnalyticsIncome = (startDate, endDate) => {
  const { data, loading, error } = useQuery(ANALYTICS_INCOME, {
    variables: { startDate, endDate }
  })

  return {
    analyticsIncome: data?.analyticsIncome || [],
    loading,
    error
  }
}
