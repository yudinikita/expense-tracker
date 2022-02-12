import React from 'react'
import { InnerNavigate, TransactionsForm } from '../../../components'

export const CreateTransactionPage = () => {
  return (
    <>
      <InnerNavigate title='Новая операция' />

      <TransactionsForm />
    </>
  )
}
