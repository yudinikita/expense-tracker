export const addMonth = (value: Date | string | number): Date => {
  const result = new Date(value)
  result.setMonth(result.getMonth() + 1)
  return result
}

export const removeMonth = (value: Date | string | number): Date => {
  const result = new Date(value)
  result.setMonth(result.getMonth() - 1)
  return result
}

export const addYear = (value: Date | string | number): Date => {
  const result = new Date(value)
  result.setFullYear(result.getFullYear() + 1)
  return result
}

export const removeYear = (value: Date | string | number): Date => {
  const result = new Date(value)
  result.setFullYear(result.getFullYear() - 1)
  return result
}

export const firstDateByMonth = (value: Date | string | number): Date => {
  const date = new Date(value)
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0)
}

export const endDateByMonth = (value: Date | string | number): Date => {
  const date = new Date(value)
  const lastDayByMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  return new Date(date.getFullYear(), date.getMonth(), lastDayByMonth, 23, 59, 59, 0)
}

const offset = new Date().getTimezoneOffset() * 1000 * 60
export const getLocalDate = (value: Date | string | number): string => {
  const offsetDate = new Date(value).valueOf() - offset
  const date = new Date(offsetDate).toISOString()
  return date.substring(0, 19)
}
