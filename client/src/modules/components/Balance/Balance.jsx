import React from 'react'
import { MyError, MyLoader, Price, SIGN_DISPLAY } from '..'
import { useBalance } from './hooks/useBalance'
import { BalancePercentage } from './components'
import styles from './Balance.module.scss'

export const Balance = () => {
  const { balance, loading, error } = useBalance()

  if (loading) return <MyLoader />
  if (error) return <MyError error={error} />

  return (
    <div className={styles.container}>
      <p className={styles.title}>Ваш баланс</p>
      <Price
        className={styles.balance}
        amount={balance.balanceTotal}
      />
      <p className={styles.balancePerDateGroup}>
        <Price
          className={styles.balancePerDate}
          amount={balance.balancePerDate}
          signDisplay={SIGN_DISPLAY.NEVER}
          haveColor
          havePrefix
          title='Сумма операций за день'
        />
        <BalancePercentage amount={balance?.balancePercentage || 0} />
      </p>
    </div>
  )
}
