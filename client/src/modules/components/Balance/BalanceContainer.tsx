import React from 'react'
import { Balance } from './Balance'
import { useBalance } from 'modules/components/Balance/hooks'

export const BalanceContainer = () => {
  const { balance, loading, error } = useBalance()
  
  return (
    <Balance
      total={balance?.balanceTotal}
      balancePerDate={balance?.balancePerDate}
      percentage={balance?.balancePercentage}
      loading={loading}
      error={error}
    />
  )
}
