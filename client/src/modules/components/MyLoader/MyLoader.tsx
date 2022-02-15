import React from 'react'
import './MyLoader.scss'

export const MyLoader = () => (
  <div className='loader'>
    <svg
      className='loader__circular'
      viewBox='25 25 50 50'
    >
      <circle
        className='loader__path'
        cx='50'
        cy='50'
        r='20'
        fill='none'
        stroke='#FFCF26'
        strokeWidth='2'
        strokeLinecap='round'
        strokeDasharray='180, 200'
        strokeDashoffset='10'
      />
    </svg>
  </div>
)
