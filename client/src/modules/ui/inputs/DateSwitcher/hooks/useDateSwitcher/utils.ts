import dayjs from 'dayjs'

export const getDateConstruction = (date: Date) => {
  return {
    activeDate: date,
    startDate: dayjs(date).startOf('month').toDate(),
    endDate: dayjs(date).endOf('month').toDate()
  }
}

export const nowDate = dayjs().toDate()
export const startDate = dayjs(nowDate).startOf('month').toDate()
export const endDate = dayjs(nowDate).endOf('month').toDate()

export const defaultDate = {
  activeDate: nowDate,
  startDate: startDate,
  endDate: endDate
}
