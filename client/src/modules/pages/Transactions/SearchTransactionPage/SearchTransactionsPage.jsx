import React from 'react'
import { InnerNavigate, TransactionsSearch } from '../../../components'

export const SearchTransactionsPage = () => {
  return (
    <>
      <InnerNavigate title='Поиск операций' />
      <TransactionsSearch />
    </>
  )
}
