import React from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { NavigationBar, Transactions } from 'modules/components'
import { Link } from 'modules/ui'
import money from 'modules/assets/animation/money.json'

export const TransactionPage: React.FC = () => {
  const { t } = useTranslation()

  const subtitle = (
    <Link
      href={'/transactions/search'}
      variant='second'
      style={{ fontSize: '18px' }}
      route
    >
      {t('search')}
    </Link>
  )

  return (
    <>
      <NavigationBar
        title={t('transactions.title')}
        titleVariant='large'
        subtitle={subtitle}
        spaceBottom={NAVIGATION.GLOBAL.SPACE.BOTTOM}
        animationData={money}
      />

      <Transactions />
    </>
  )
}
