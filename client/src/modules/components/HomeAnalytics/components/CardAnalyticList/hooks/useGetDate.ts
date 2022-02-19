import dayjs from 'dayjs'

export const useGetDate = () => {
  const startDate = dayjs().startOf('month').toDate()
  const endDate = dayjs().endOf('month').toDate()
  const month = dayjs().format('MMMM')

  return {
    startDate,
    endDate,
    month
  }
}
