import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const SpainFlag: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 512 512'
    width={size || '20'}
    height={size || '20'}
    {...props}
  >
    <path xmlns='http://www.w3.org/2000/svg' fill='#AA151B' d='M0 0h512v512H0z' />
    <path xmlns='http://www.w3.org/2000/svg' fill='#F1BF00' d='M0 128h512v256H0z' />
  </svg>
)
