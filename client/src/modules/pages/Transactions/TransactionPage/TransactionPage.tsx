import React from 'react'
import { Link } from 'react-router-dom'
import { PageTitle, Transactions } from '../../../components'

import money from '../../../assets/animation/money.json'

export const TransactionPage = () => {
  return (
    <>
      <PageTitle title='Операции' icon={money} />
      <Link to='/transactions/search' className='linkSecond'>Поиск</Link>
      <Transactions />
    </>
  )
}
