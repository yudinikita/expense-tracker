import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const MoneyStackOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 26 26'
    width={size || '24'}
    height={size || '24'}
    fill='none'
    {...props}
  >
    <path stroke='#000' strokeWidth='2'
          d='M1 21h24M1 24.2h24M5 7.4V5h2.4m11.2 0H21v2.4M5 12.2v2.4h2.4m11.2 0H21v-2.4m-8 .8a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM3.4 1.8h19.2a1.6 1.6 0 0 1 1.6 1.6v12.8a1.6 1.6 0 0 1-1.6 1.6H3.4a1.6 1.6 0 0 1-1.6-1.6V3.4a1.6 1.6 0 0 1 1.6-1.6Z' />
  </svg>
)
