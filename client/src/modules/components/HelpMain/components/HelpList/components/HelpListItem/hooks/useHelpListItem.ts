const locales = 'ru'
const formatter = new Intl.DateTimeFormat(locales, {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

export const useHelpListItem = () => {
  const getDate = (date: Date | string) => {
    return formatter.format(new Date(date))
  }

  return { getDate }
}
