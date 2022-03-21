import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const MinusOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 21'
    width={size || '21'}
    height={size || '21'}
    fill='none'
    {...props}
  >
    <path stroke='#000' strokeWidth='2' d='M1.4 10.5h18.2' />
  </svg>
)
