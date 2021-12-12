import React from 'react'
import {
  CardAnalyticExpense,
  CardAnalyticExpenseAverage,
  CardAnalyticIncome,
  CardAnalyticIncomeAverage
} from './components'
import styles from './CardAnalyticList.module.scss'

export const CardAnalyticList = () => {
  return (
    <ul className={`${styles.list} list-reset`}>
      <li>
        <CardAnalyticExpense />
      </li>
      <li>
        <CardAnalyticIncome />
      </li>
      <li>
        <CardAnalyticExpenseAverage />
      </li>
      <li>
        <CardAnalyticIncomeAverage />
      </li>
    </ul>
  )
}
