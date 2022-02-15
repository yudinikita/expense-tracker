import React from 'react'
import ContentLoader from 'react-content-loader'

export const CardAnalyticLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={315}
      height={115}
      viewBox='0 0 315 115'
      backgroundColor='#ebebeb'
      foregroundColor='#d2d2d2'
    >
      <rect x='0' y='0' rx='10' ry='10' width='315' height='115' />
    </ContentLoader>
  )
}
