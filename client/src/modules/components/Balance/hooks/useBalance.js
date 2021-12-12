import { useGetBalance } from '../../../hooks'

const startDate = new Date()
const endDate = new Date(startDate.getTime())

startDate.setHours(0, 0, 0, 0)
endDate.setHours(23, 59, 59, 999)

export const useBalance = () => {
  const { balance, balancePerDate, loading, error } = useGetBalance(startDate, endDate)

  const balanceTotal = balance?.totalAmount
  const balancePerDateTotal = balancePerDate?.totalAmount
  const balancePercentage = balancePerDateTotal / balanceTotal

  const userBalanceTotal = {
    balanceTotal,
    balancePerDate: balancePerDateTotal,
    balancePercentage
  }

  return {
    balance: userBalanceTotal,
    loading,
    error
  }
}
