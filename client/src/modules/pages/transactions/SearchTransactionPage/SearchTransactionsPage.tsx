import React from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { NavigationBar, TransactionsSearch } from 'modules/components'

export const SearchTransactionsPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavigationBar
        title={t('transactions.search.title')}
        backButton
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <TransactionsSearch />
    </>
  )
}
