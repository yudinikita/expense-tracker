export const addMonth = (date) => {
  const result = new Date(date)
  result.setMonth(date.getMonth() + 1)
  return result
}

export const removeMonth = (date) => {
  const result = new Date(date)
  result.setMonth(date.getMonth() - 1)
  return result
}

export const addYear = (date) => {
  const result = new Date(date)
  result.setFullYear(date.getFullYear() + 1)
  return result
}

export const removeYear = (date) => {
  const result = new Date(date)
  result.setFullYear(date.getFullYear() - 1)
  return result
}

export const firstDateByMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0)
}

export const endDateByMonth = (date) => {
  const lastDayByMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  return new Date(date.getFullYear(), date.getMonth(), lastDayByMonth, 23, 59, 59, 0)
}

const offset = new Date().getTimezoneOffset() * 1000 * 60
export const getLocalDate = value => {
  const offsetDate = new Date(value).valueOf() - offset
  const date = new Date(offsetDate).toISOString()
  return date.substring(0, 19)
}
