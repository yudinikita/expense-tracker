import React from 'react'
import { useTranslation } from 'react-i18next'
import { Errors, Loaders, Price, Space, Typography } from 'modules/ui'
import { BalancePercentage } from 'modules/components/Balance/components'
import s from './Balance.module.scss'

interface BalanceProps {
  /**
   * Current total balance of the user
   *
   * @default 0
   */
  total?: number
  /**
   * Balance of the user on a certain date
   *
   * @default 0
   */
  balancePerDate?: number
  /**
   * Percentage of balance as of the date to the current balance
   *
   * @default 0
   */
  percentage?: number
  /**
   * @default false
   */
  loading?: boolean
  /**
   * @default undefined
   */
  error?: any
}

/**
 * Component for presentation user balance on home page
 */
export const Balance: React.FC<BalanceProps> = ({
  total = 0,
  balancePerDate = 0,
  percentage = 0,
  loading = false,
  error
}) => {
  const { t } = useTranslation()

  if (loading) return <Loaders />
  if (error) return <Errors />

  return (
    <Space
      className={s.wrapper}
      direction='vertical'
      align='center'
      block
    >
      <Typography
        variant='text'
        type='secondary'
      >
        {t('user.balance.title')}
      </Typography>
      <Price
        className={s.balance}
        amount={total}
      />
      <Space
        direction='horizontal'
        size={20}
      >
        <Price
          className={s.balancePerDate}
          amount={balancePerDate}
          haveMinus={false}
          haveColor
          havePrefix
        />
        <BalancePercentage amount={percentage} />
      </Space>
    </Space>
  )
}
