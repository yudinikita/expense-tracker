import { endDateByMonth, firstDateByMonth } from '../../../../../utils'

export const useGetDate = () => {
  const nowDate = new Date()
  const startDate = firstDateByMonth(nowDate)
  const endDate = endDateByMonth(nowDate)
  const month = nowDate.toLocaleString('default', { month: 'long' })

  return {
    startDate,
    endDate,
    month
  }
}
