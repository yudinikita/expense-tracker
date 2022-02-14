import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styles from '../Balance.module.scss'

const locales = 'ru'

const formatter = new Intl.NumberFormat(locales, {
  style: 'percent',
  signDisplay: 'never',
})

const propTypes = {
  amount: PropTypes.number
}

const defaultPropTypes = {
  amount: 0
}

export const BalancePercentage = ({ amount }: InferProps<typeof propTypes>) => {
  const formatAmount = formatter.format(Number(amount))

  return (
    <span
      className={styles.balancePercent}
      title='Процент за день от баланса'
    >
      {formatAmount}
    </span>
  )
}

BalancePercentage.propTypes = propTypes
BalancePercentage.defaultPropTypes = defaultPropTypes
