import { useBalanceQuery } from '../../../graphql/__generated__/graphql.gen'

const startDate = new Date()
const endDate = new Date(startDate.getTime())

startDate.setHours(0, 0, 0, 0)
endDate.setHours(23, 59, 59, 999)

export const useBalance = () => {
  const balance = useBalanceQuery()

  const balancePerDate = useBalanceQuery({
    variables: {
      input: {
        filter: {
          date: {
            gte: startDate.toDateString(),
            lte: endDate.toDateString()
          }
        }
      }
    }
  })

  const balanceTotal = balance?.data?.balance?.totalAmount ?? 0
  const balancePerDateTotal = balancePerDate?.data?.balance?.totalAmount ?? 0
  const balancePercentage = balancePerDateTotal / balanceTotal

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
