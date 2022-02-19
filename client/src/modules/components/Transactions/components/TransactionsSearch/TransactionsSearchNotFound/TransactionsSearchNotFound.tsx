import React from 'react'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import magnifier from '../../../../../assets/animation/magnifier.json'
import { useTranslation } from 'react-i18next'

export const TransactionsSearchNotFound = () => {
  const { t } = useTranslation()

  return (
    <div style={{ width: '200px', margin: '50px auto' }}>
      <Lottie play loop animationData={magnifier} speed={1} />
      <p style={{ color: 'var(--color-gray-6)' }}>{t('transactions.search.notfound')}</p>
    </div>
  )
}
