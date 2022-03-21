import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const QuestionCircleOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 23'
    width={size || '23'}
    height={size || '23'}
    fill='none'
    {...props}
  >
    <path
      d='M11.5 13.5999V11.5H12.2C13.3597 11.5 14.2999 10.5597 14.2999 9.39995V9.25995C14.2999 8.17747 13.4224 7.29995 12.3399 7.29995H11.5C10.3402 7.29995 9.39995 8.24015 9.39995 9.39995M10.8 15.6999H12.2M11.5 21.2999C6.08756 21.2999 1.69995 16.9123 1.69995 11.5C1.69995 6.08756 6.08756 1.69995 11.5 1.69995C16.9123 1.69995 21.2999 6.08756 21.2999 11.5C21.2999 16.9123 16.9123 21.2999 11.5 21.2999Z'
      stroke='black' strokeWidth='2' />
  </svg>
)
