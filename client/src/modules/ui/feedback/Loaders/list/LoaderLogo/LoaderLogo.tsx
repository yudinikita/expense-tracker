import React from 'react'
import classNames from 'classnames'
import s from './LoaderLogo.module.scss'

export const LoaderLogo: React.FC = () => {

  return (
    <div
      className={s.loaderContainer}
    >
      <svg
        className={s.loader}
        height='50'
        width='50'
        viewBox='0 0 40 40'
      >
        <use className={classNames(s.loaderPing, s.loaderPing3)} href={s.loaderBg} />
        <use className={classNames(s.loaderPing, s.loaderPing2)} href={s.loaderBg} />
        <use className={classNames(s.loaderPing, s.loaderPing1)} href={s.loaderBg} />
        <rect
          height='40'
          className={s.loaderBg}
          rx='6'
          width='40'
        />
        <path
          d='M17.307 24.064c-.032.032-.04.072-.024.12a.163.163 0 0 0 .12.048h4.776c.144 0 .216-.064.216-.192V13.48c0-.128-.072-.192-.216-.192h-2.736c-.144 0-.216.072-.216.216 0 3.008-.12 5.16-.36 6.456-.24 1.296-.76 2.664-1.56 4.104Zm-4.272 7.296c-.368 0-.688-.136-.96-.408a1.314 1.314 0 0 1-.408-.96v-4.68c0-.304.104-.56.312-.768.208-.208.464-.312.768-.312.144 0 .232-.04.264-.12.944-1.44 1.568-2.84 1.872-4.2.304-1.36.456-3.568.456-6.624v-1.92c0-.368.128-.688.384-.96.272-.272.592-.408.96-.408h8.352c.368 0 .688.136.96.408.272.272.408.592.408.96V24.04c0 .128.064.192.192.192h.552c.368 0 .688.136.96.408.272.272.408.592.408.96v4.392c0 .368-.136.688-.408.96a1.314 1.314 0 0 1-.96.408h-1.032c-.368 0-.688-.136-.96-.408a1.314 1.314 0 0 1-.408-.96v-2.256c0-.144-.064-.216-.192-.216h-8.928c-.128 0-.192.072-.192.216v2.256c0 .368-.136.688-.408.96a1.314 1.314 0 0 1-.96.408h-1.032Z'
          fill='#000'
        />
      </svg>
    </div>
  )
}
