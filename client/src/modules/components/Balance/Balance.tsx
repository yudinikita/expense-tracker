import React from 'react'
import { MyError, MyLoader, Price, SIGN_DISPLAY } from '..'
import { useBalance } from './hooks/useBalance'
import { BalancePercentage } from './components'
import styles from './Balance.module.scss'
import { useTranslation } from 'react-i18next'

export const Balance = () => {
  const { t } = useTranslation()
  const { balance, loading, error } = useBalance()

  if (loading) return <MyLoader />
  if (error != null) return <MyError error={error} />

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t('user.balance.title')}</p>
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
          title={t('user.balance.dayhint')}
        />
        <BalancePercentage amount={balance?.balancePercentage || 0} />
      </p>
    </div>
  )
}
