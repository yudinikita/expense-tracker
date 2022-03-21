import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const AddSmallOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 21'
    width={size || '21'}
    height={size || '21'}
    fill='none'
    {...props}
  >
    <path stroke='#000' d='M10.5 5.6v9.8m-4.9-4.9h9.8' strokeWidth={2} />
  </svg>
)
