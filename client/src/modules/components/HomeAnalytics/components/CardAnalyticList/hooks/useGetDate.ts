import { endDateByMonth, firstDateByMonth } from '../../../../../utils'

const nowDate = new Date()

export const useGetDate = () => {
  const startDate = firstDateByMonth(nowDate)
  const endDate = endDateByMonth(nowDate)
  const month = nowDate.toLocaleString('default', { month: 'long' })

  return {
    startDate,
    endDate,
    month
  }
}
