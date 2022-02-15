import React from 'react'
import { InnerNavigate, TransactionsForm } from '../../../components'

export const CreateTransactionPage: React.FC = () => {
  return (
    <>
      <InnerNavigate title='Новая операция' />

      <TransactionsForm />
    </>
  )
}
