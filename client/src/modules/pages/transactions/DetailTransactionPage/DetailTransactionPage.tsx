import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavigationBar, TransactionsDetailContainer } from 'modules/components'
import { NAVIGATION } from 'modules/constants'

export const DetailTransactionPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavigationBar
        title={t('transactions.detail.title')}
        backButton
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <TransactionsDetailContainer />
    </>
  )
}
