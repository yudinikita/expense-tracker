import React from 'react'
import { Balance, HomeAnalytics, HomePhrase, PageTitle } from '../../components'

import handShake from '../../assets/animation/handShake.json'

const stylePhrase = {
  marginTop: '15px',
  marginBottom: '25px',
  color: '#666'
}

export const HomePage = () => {
  return (
    <>
      <PageTitle title='Главная' icon={handShake} />
      <HomePhrase style={stylePhrase} />
      <Balance />
      <HomeAnalytics />
    </>
  )
}
