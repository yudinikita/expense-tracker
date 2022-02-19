import dayjs from 'dayjs'

export const getMonths = () => {
  const startOfMonths = dayjs().startOf('months')

  const months: dayjs.Dayjs[] = new Array(12)
    .fill(startOfMonths)
    .map((month: dayjs.Dayjs, index) => month.add(index, 'month'))

  return months
}

export const getLocalDate = (value: Date | string | number): string => {
  const date = dayjs(value).toISOString()
  return date.substring(0, 19)
}
