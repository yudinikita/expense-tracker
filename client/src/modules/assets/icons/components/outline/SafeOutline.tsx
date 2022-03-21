import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const SafeOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 26 25'
    width={size || '26'}
    height={size || '25'}
    fill='none'
    {...props}
  >
    <path stroke='#000' strokeWidth='2'
          d='M5 5.8v4.8m0 3.2v4.8m0 4V25m16-2.4V25m-4.8-8.8a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM3.4 1.8h19.2a1.6 1.6 0 0 1 1.6 1.6V21a1.6 1.6 0 0 1-1.6 1.6H3.4A1.6 1.6 0 0 1 1.8 21V3.4a1.6 1.6 0 0 1 1.6-1.6Z' />
  </svg>
)
