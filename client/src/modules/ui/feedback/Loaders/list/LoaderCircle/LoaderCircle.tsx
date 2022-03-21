import React from 'react'
import s from './LoaderCircle.module.scss'

export const LoaderCircle: React.FC = () => {
  return (
    <div
      className={s.loaderContainer}
    >
      <svg viewBox='0 0 48 48' className={s.loader}>
        <circle cx='24' cy='24' r='22.5' className={s.loaderCircleBg} />
        <circle cx='24' cy='24' r='22.5' className={s.loaderCircleOver} />
      </svg>
    </div>
  )
}
