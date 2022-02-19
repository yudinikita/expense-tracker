import React from 'react'
import { Balance, HomeAnalytics, HomePhrase, PageTitle } from '../../components'

import handShake from '../../assets/animation/handShake.json'
import { useTranslation } from 'react-i18next'

const stylePhrase = {
  marginTop: '15px',
  marginBottom: '25px',
  color: '#666'
}

export const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle title={t('home.title')} icon={handShake} />
      <HomePhrase style={stylePhrase} />
      <Balance />
      <HomeAnalytics />
    </>
  )
}
