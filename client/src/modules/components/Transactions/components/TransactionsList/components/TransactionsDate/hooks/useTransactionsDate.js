const locale = 'ru'

const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
}

const formatter = new Intl.DateTimeFormat(locale, options)

const getFormatDate = (dateCreatedAt) => {
  const date = formatter.formatToParts(dateCreatedAt)
  const weekday = date[0].value
  const day = date[2].value
  const month = date[4].value
  return `${day} ${month}, ${weekday}`
}

export const useTransactionsDate = (transactions, index) => {
  const dateCreatedAt = new Date(transactions[index]?.createdAt)

  if (index === 0) return { date: getFormatDate(dateCreatedAt) }

  const prevDay = new Date(transactions[index - 1]?.createdAt).getDate()
  const nowDay = dateCreatedAt.getDate()

  const date = nowDay !== prevDay ? getFormatDate(dateCreatedAt) : null

  return {
    date
  }
}
