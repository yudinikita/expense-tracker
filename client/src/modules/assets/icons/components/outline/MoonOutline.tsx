import React from 'react'
import { OneIconProps } from '../../types'

export const MoonOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg fill='none' viewBox='0 0 15 15' width={size || '20'} height={size || '20'} {...props}>
    <path stroke='currentColor' strokeLinejoin='round'
          d='M1.66 11.362A6.5 6.5 0 0 0 7.693.502a7 7 0 1 1-6.031 10.86z' />
  </svg>
)
