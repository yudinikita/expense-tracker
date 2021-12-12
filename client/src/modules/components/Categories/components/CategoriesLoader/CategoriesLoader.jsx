import React from 'react'
import ContentLoader from 'react-content-loader'

const SPEED = 2
const WIDTH = 237
const HEIGHT = 350

export const CategoriesLoader = () => {
  return (
    <ContentLoader
      speed={SPEED}
      width={WIDTH}
      height={HEIGHT}
      viewBox='0 0 237 350'
      backgroundColor='#ebebeb'
      foregroundColor='#d2d2d2'
    >
      <rect x='0' y='0' rx='10' ry='10' width='237' height='20' />
      <rect x='0' y='198' rx='10' ry='10' width='237' height='20' />
      <rect x='0' y='66' rx='10' ry='10' width='237' height='20' />
      <rect x='0' y='264' rx='10' ry='10' width='237' height='20' />
      <rect x='0' y='132' rx='10' ry='10' width='237' height='20' />
      <rect x='0' y='330' rx='10' ry='10' width='237' height='20' />
    </ContentLoader>
  )
}
