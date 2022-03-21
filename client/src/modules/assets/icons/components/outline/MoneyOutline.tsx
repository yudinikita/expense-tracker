import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const MoneyOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 21'
    width={size || '23'}
    height={size || '21'}
    fill='none'
    {...props}
  >
    <path stroke='#000' strokeWidth='2'
          d='M16.4 14.7h2.1v-2.1m-2.1-6.3h2.1v2.1M6.6 6.3H4.5v2.1m0 4.2v2.1h2.1m4.9-1.4a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6ZM3.1 3.5h16.8a1.4 1.4 0 0 1 1.4 1.4v11.2a1.4 1.4 0 0 1-1.4 1.4H3.1a1.4 1.4 0 0 1-1.4-1.4V4.9a1.4 1.4 0 0 1 1.4-1.4Z' />
  </svg>
)
