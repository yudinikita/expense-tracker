import React from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { Typography } from 'modules/ui'
import { BalanceContainer, HomeAnalytics, NavigationBar } from 'modules/components'
import { useWelcomePhrase } from 'modules/hooks'
import handShake from 'modules/assets/animation/handShake.json'

export const HomePage: React.FC = () => {
  const { t } = useTranslation()
  const { phrase } = useWelcomePhrase()

  const subtitle = <Typography variant='h6' type='secondary'>{phrase}</Typography>

  return (
    <>
      <NavigationBar
        title={t('home.title')}
        titleVariant='large'
        subtitle={subtitle}
        spaceBottom={NAVIGATION.GLOBAL.SPACE.BOTTOM}
        animationData={handShake}
      />

      <BalanceContainer />

      <HomeAnalytics />
    </>
  )
}
