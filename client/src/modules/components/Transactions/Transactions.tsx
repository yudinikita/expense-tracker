import React from 'react'
import { TransactionsContainer } from './components'
import { DateSwitcher } from 'modules/ui'
import { useDateSwitcher } from 'modules/hooks'

export const Transactions = () => {
  const { date, onChange } = useDateSwitcher()

  return (
    <div>
      <DateSwitcher onChange={onChange} />
      <TransactionsContainer date={date} />
    </div>
  )
}
