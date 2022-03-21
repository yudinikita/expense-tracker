import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const BrushOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 23'
    width={size || '21'}
    height={size || '23'}
    fill='none'
    {...props}
  >
    <path
      d='M18.9 11.5V4.49995C18.9 2.95355 17.6464 1.69995 16.1 1.69995H4.89998C3.35358 1.69995 2.09998 2.95355 2.09998 4.49995V11.5M18.9 11.5H2.09998M18.9 11.5V14.2999C18.9 15.8463 17.6464 17.0999 16.1 17.0999H11.9V19.8999C11.9 20.6731 11.2732 21.2999 10.5 21.2999C9.72678 21.2999 9.09998 20.6731 9.09998 19.8999V17.0999H4.89998C3.35358 17.0999 2.09998 15.8463 2.09998 14.2999V11.5M7.69998 1.69995V7.99995M10.5 1.69995V5.19995'
      stroke='black' strokeWidth='2' />
  </svg>
)
