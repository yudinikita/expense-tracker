import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const InfoCircleTwoTone: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 29 29'
    width={size || '21'}
    height={size || '21'}
    {...props}
  >
    <rect width='29' height='29' fill='#3685B3' rx='10' />
    <path fill='#fff' fillRule='evenodd'
          d='M25 14.5C25 20.299 20.299 25 14.5 25S4 20.299 4 14.5 8.701 4 14.5 4 25 8.701 25 14.5ZM13.8 11V9.586h1.4V11h-1.4Zm1.4 2.8V18h1.4v1.4h-4.2V18h1.4v-2.8h-1.4v-1.4h2.8Z'
          clipRule='evenodd' />
  </svg>
)
