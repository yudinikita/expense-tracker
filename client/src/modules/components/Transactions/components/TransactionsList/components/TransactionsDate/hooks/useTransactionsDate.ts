import { Transaction } from '../../../../../../../graphql/__generated__/graphql.gen'
import dayjs from 'dayjs'

const getFormatDate = (dateCreatedAt: Date) => {
  return dayjs(dateCreatedAt).format('D MMMM, dddd')
}

export const useTransactionsDate = (transactions: Transaction[], index: number) => {
  const dateCreatedAt = new Date(transactions[index]?.createdAt ?? '')

  if (index === 0) return { date: getFormatDate(dateCreatedAt) }

  const prevDay = new Date(transactions[index - 1]?.createdAt ?? '').getDate()
  const nowDay = dateCreatedAt.getDate()

  const date = nowDay !== prevDay ? getFormatDate(dateCreatedAt) : null

  return {
    date
  }
}
