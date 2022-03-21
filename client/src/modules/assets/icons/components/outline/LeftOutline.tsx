import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const LeftOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 21'
    width={size || '21'}
    height={size || '21'}
    fill='none'
    {...props}
  >
    <path d='M14 19.5999L4.20001 10.4999L14 1.3999' stroke='black' strokeWidth='2' strokeLinecap='round' />
  </svg>
)
