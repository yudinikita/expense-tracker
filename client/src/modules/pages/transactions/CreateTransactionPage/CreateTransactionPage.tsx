import React from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { NavigationBar, TransactionsFormCreate } from 'modules/components'

export const CreateTransactionPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavigationBar
        title={t('transactions.create')}
        backButton
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <TransactionsFormCreate />
    </>
  )
}
