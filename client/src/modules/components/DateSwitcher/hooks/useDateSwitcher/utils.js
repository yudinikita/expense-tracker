import { endDateByMonth, firstDateByMonth } from '../../../../utils'

export const formatter = new Intl.DateTimeFormat('ru', {
  month: 'long',
  year: 'numeric'
})

export const getMonth = (date) => {
  const dateObject = formatter.formatToParts(date)
  return dateObject[0].value
}

export const getYear = (date) => {
  const dateObject = formatter.formatToParts(date)
  return dateObject[2].value
}

export const getNavigationLabel = (date) => {
  const month = getMonth(date)
  const year = getYear(date)
  return `${month}, ${year}`
}

export const getDateConstruction = (date) => {
  return {
    activeDate: date,
    startDate: firstDateByMonth(date),
    endDate: endDateByMonth(date)
  }
}

export const nowDate = new Date()
export const startDate = firstDateByMonth(nowDate)
export const endDate = endDateByMonth(nowDate)

export const defaultDate = {
  activeDate: nowDate,
  startDate: startDate,
  endDate: endDate
}
