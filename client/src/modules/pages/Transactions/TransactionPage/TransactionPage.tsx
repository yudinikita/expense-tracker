import React from 'react'
import { Link } from 'react-router-dom'
import { PageTitle, Transactions } from '../../../components'

import money from '../../../assets/animation/money.json'
import { useTranslation } from 'react-i18next'

export const TransactionPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle title={t('transactions.title')} icon={money} />
      <Link to='/transactions/search' className='linkSecond'>{t('search')}</Link>
      <Transactions />
    </>
  )
}
