import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const EuropeFlag: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 512 512'
    width={size || '20'}
    height={size || '20'}
    {...props}
  >
    <defs>
      <g id='europe_d'>
        <g id='europe_b'>
          <path id='europe_a' d='m0-1-.3 1 .5.1z' />
          <use href='#europe_a' transform='scale(-1 1)' />
        </g>
        <g id='c'>
          <use href='#europe_b' transform='rotate(72)' />
          <use href='#europe_b' transform='rotate(144)' />
        </g>
        <use href='#europe_c' transform='scale(-1 1)' />
      </g>
    </defs>
    <path fill='#039' d='M0 0h512v512H0z' />
    <g fill='#fc0' transform='translate(256 258.4) scale(25.28395)'>
      <use href='#europe_d' width='100%' height='100%' y='-6' />
      <use href='#europe_d' width='100%' height='100%' y='6' />
      <g id='europe_e'>
        <use href='#europe_d' width='100%' height='100%' x='-6' />
        <use href='#europe_d' width='100%' height='100%' transform='rotate(-144 -2.3 -2.1)' />
        <use href='#europe_d' width='100%' height='100%' transform='rotate(144 -2.1 -2.3)' />
        <use href='#europe_d' width='100%' height='100%' transform='rotate(72 -4.7 -2)' />
        <use href='#europe_d' width='100%' height='100%' transform='rotate(72 -5 .5)' />
      </g>
      <use href='#europe_e' width='100%' height='100%' transform='scale(-1 1)' />
    </g>
  </svg>
)
