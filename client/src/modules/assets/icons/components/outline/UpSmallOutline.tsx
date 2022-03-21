import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const UpSmallOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 15'
    width={size || '15'}
    height={size || '15'}
    fill='none'
    {...props}
  >
    <path stroke='#000' strokeLinecap='square' strokeWidth={2} d='m10.5 8.5-3-3-3 3' />
  </svg>
)
