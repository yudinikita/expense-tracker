import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const CheckCircleTwoTone: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 29 29'
    width={size || '21'}
    height={size || '21'}
    {...props}
  >
    <rect width='29' height='29' fill='#009E0D' rx='10' />
    <path fill='#fff' fillRule='evenodd'
          d='M4 14.5C4 8.701 8.701 4 14.5 4S25 8.701 25 14.5 20.299 25 14.5 25 4 20.299 4 14.5Zm9.9 4.495 6.047-7.558-1.094-.874-5.154 6.442-3.65-3.043-.897 1.076 4.748 3.957Z'
          clipRule='evenodd' />
  </svg>
)
