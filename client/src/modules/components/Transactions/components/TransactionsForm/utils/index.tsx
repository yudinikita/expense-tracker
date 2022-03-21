import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import getSymbolFromCurrency from 'currency-symbol-map'
import { Icon } from 'modules/ui'
import { AddOutline, MinusOutline } from 'modules/assets/icons'
import s from '../TransactionsForm.module.scss'

export const getCurrencySymbol = (currency?: string) => {
  return getSymbolFromCurrency(currency ?? '')
}

export const getAmount = (amount: number, balance: string) => {
  if (balance === 'income') return amount
  return amount * -1
}

export const getAmountSign = (balance?: string) => (
  balance === 'income'
    ? <Icon className={s.amountSign} icon={AddOutline} iconSize={18} />
    : <Icon className={s.amountSign} icon={MinusOutline} iconSize={18} />
)

export const getBalanceType = (amount?: number): 'expense' | 'income' => {
  if (!amount) return 'expense'
  if (amount > 0) return 'income'
  return 'expense'
}

export const getCreatedAt = (date?: string | Date | Dayjs) => {
  const format = 'YYYY-MM-DDTHH:mm:ss'
  return date
    ? dayjs(date).format(format)
    : dayjs().format(format)
}
