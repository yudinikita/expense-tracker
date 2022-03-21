import React from 'react'
import { useTranslation } from 'react-i18next'
import s from '../Balance.module.scss'

interface BalancePercentageProps {
  amount?: number
}

export const BalancePercentage: React.FC<BalancePercentageProps> = ({
  amount = 0
}) => {
  const { t } = useTranslation()
  const formatAmount = parseFloat(amount?.toFixed(2))

  return (
    <span
      className={s.balancePercent}
      title={t('user.balance.percenthint')}
    >
      {formatAmount}%
    </span>
  )
}
