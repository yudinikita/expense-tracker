import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Balance.module.scss'

const locales = 'ru'

const optionsAmount = {
  style: 'percent',
  signDisplay: 'never',
}

const formatter = new Intl.NumberFormat(locales, optionsAmount)

export const BalancePercentage = ({ amount }) => {
  const formatAmount = formatter.format(amount)

  return (
    <span
      className={styles.balancePercent}
      title='Процент за день от баланса'
    >
      {formatAmount}
    </span>
  )
}

BalancePercentage.propTypes = {
  amount: PropTypes.number
}
