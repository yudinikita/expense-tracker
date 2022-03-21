import dayjs from 'dayjs'
import { useBalanceQuery } from 'modules/graphql'

export const useBalance = () => {
  const balance = useBalanceQuery()

  const balancePerDate = useBalanceQuery({
    variables: {
      input: {
        filter: {
          date: {
            gte: dayjs().startOf('day').format(),
            lte: dayjs().endOf('day').format()
          }
        }
      }
    }
  })

  const balanceTotal = balance?.data?.balance?.totalAmount ?? 0
  const balancePerDateTotal = balancePerDate?.data?.balance?.totalAmount ?? 0
  const balancePercentage = balanceTotal === 0 && balancePerDateTotal === 0
    ? 0
    : balancePerDateTotal / balanceTotal * 100

  const userBalanceTotal = {
    balanceTotal,
    balancePerDate: balancePerDateTotal,
    balancePercentage
  }

  return {
    balance: userBalanceTotal,
    loading: balance.loading,
    error: balance.error
  }
}
