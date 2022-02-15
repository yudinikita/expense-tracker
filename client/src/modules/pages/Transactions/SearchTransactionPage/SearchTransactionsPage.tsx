import React from 'react'
import { InnerNavigate, TransactionsSearch } from '../../../components'

export const SearchTransactionsPage: React.FC = () => {
  return (
    <>
      <InnerNavigate title='Поиск операций' />
      <TransactionsSearch />
    </>
  )
}
