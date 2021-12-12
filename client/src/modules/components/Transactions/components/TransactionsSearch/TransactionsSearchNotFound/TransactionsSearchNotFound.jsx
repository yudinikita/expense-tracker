import React from 'react'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import magnifier from '../../../../../assets/animation/magnifier.json'

export const TransactionsSearchNotFound = () => {
  return (
    <div style={{ width: '200px', margin: '50px auto' }}>
      <Lottie play loop animationData={magnifier} speed={1} />
      <p style={{ color: 'var(--color-gray-6)' }}>Операций не найдено</p>
    </div>
  )
}
