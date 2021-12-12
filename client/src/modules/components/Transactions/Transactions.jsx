import React from 'react'
import { TransactionsContainer } from './components'
import { DateSwitcher } from '../DateSwitcher'
import { useDateSwitcher } from '../../hooks'

export const Transactions = () => {
  const { date, onChange } = useDateSwitcher()

  return (
    <div>
      <DateSwitcher style={{ marginTop: '25px' }} onChange={onChange} />
      <TransactionsContainer date={date} />
    </div>
  )
}
