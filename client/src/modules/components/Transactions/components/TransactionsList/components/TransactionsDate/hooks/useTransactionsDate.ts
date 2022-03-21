import dayjs from 'dayjs'
import { Transaction } from 'modules/graphql'

const formatDate = 'D MMMM, dddd'

export const useTransactionsDate = (transactions: Transaction[], index: number) => {
  const dateCreatedAt = dayjs(transactions[index]?.createdAt ?? '')

  if (index === 0) return { date: dateCreatedAt.format(formatDate) }

  const prevDay = dayjs(transactions[index - 1]?.createdAt ?? '').date()
  const nowDay = dateCreatedAt.date()

  const date = nowDay !== prevDay ? dateCreatedAt.format(formatDate) : null

  return {
    date
  }
}
