import React from 'react'
import { OneIconProps } from 'modules/assets/icons/types'

export const SouthKoreaFlag: React.FC<OneIconProps> = ({ size, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 512 512'
    width={size || '20'}
    height={size || '20'}
    id='flag-icons-kr'
    {...props}
  >
    <defs id='defs87'>
      <clipPath id='kr-a'>
        <path id='path84' fillOpacity='.7' d='M-95.8-.4h682.7v512H-95.8Z' />
      </clipPath>
    </defs>
    <path id='path526' fill='#fff' d='M0 0h512v512H0Z' fillRule='evenodd' strokeWidth={8.7099} />
    <g id='g540' fillRule='evenodd' transform='rotate(-56.3 367.2 -111.2) scale(9.375)'>
      <g id='b2'>
        <path id='b' d='M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z' fill='#000000' />
        <use href='#b' id='use529' width='100%' height='100%' x='0' y='44' />
      </g>
      <path id='path532' stroke='#fff' d='M0 17v10' />
      <path id='path534' fill='#cd2e3a' d='M0-12a12 12 0 0 1 0 24Z' />
      <path id='path536' fill='#0047a0' d='M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z' />
      <circle id='circle538' cx='0' cy='-6' r='6' fill='#cd2e3a' />
    </g>
    <g id='g546' fillRule='evenodd' transform='rotate(-123.7 196.5 59.5) scale(9.375)'>
      <use href='#b2' id='use542' width='100%' height='100%' x='0' y='0' />
      <path id='path544' stroke='#fff' d='M0-23.5v3M0 17v3.5m0 3v3' />
    </g>
  </svg>
)
