import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const CloseCircleTwoTone: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 29 29'
    width={size || '21'}
    height={size || '21'}
    {...props}
  >
    <rect width='29' height='29' fill='#FF3D00' rx='10' />
    <path fill='#fff' fillRule='evenodd'
          d='M4 14.5C4 8.701 8.701 4 14.5 4S25 8.701 25 14.5 20.299 25 14.5 25 4 20.299 4 14.5Zm14.205 4.695L14.5 15.49l-3.705 3.705-.99-.99L13.51 14.5l-3.705-3.705.99-.99L14.5 13.51l3.705-3.705.99.99L15.49 14.5l3.705 3.705-.99.99Z'
          clipRule='evenodd' />
  </svg>
)
