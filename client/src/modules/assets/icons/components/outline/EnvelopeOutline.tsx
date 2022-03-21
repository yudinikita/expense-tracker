import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const EnvelopeOutline: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 21'
    width={size || '23'}
    height={size || '21'}
    fill='none'
    {...props}
  >
    <path
      d='M1.69995 6.29998L11.5 11.9L21.2999 6.29998M3.09995 2.09998H19.8999C20.6731 2.09998 21.2999 2.72678 21.2999 3.49998V17.5C21.2999 18.2732 20.6731 18.9 19.8999 18.9H3.09995C2.32675 18.9 1.69995 18.2732 1.69995 17.5V3.49998C1.69995 2.72678 2.32675 2.09998 3.09995 2.09998Z'
      stroke='black' strokeWidth='2' />
  </svg>
)
