const locales = 'ru'
const optionsDate = {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
}
const formatter = new Intl.DateTimeFormat(locales, optionsDate)

export const useHelpListItem = () => {
  const getDate = (date) => {
    return formatter.format(new Date(date))
  }

  return { getDate }
}
