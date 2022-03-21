import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const RightOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 21'
    width={size || '21'}
    height={size || '21'}
    fill='none'
    {...props}
  >
    <path d='M7 19.6L16.8 10.5L7 1.39996' stroke='black' strokeWidth='2' strokeLinecap='round' />
  </svg>
)
