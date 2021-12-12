import React from 'react'
import PropTypes from 'prop-types'
import { months } from '../../../../data'
import SVG from 'react-inlinesvg'
import '../../DateSwitcher.scss'

const nowMonth = new Date().getMonth()

const propTypes = {
  yearLabel: PropTypes.string,
  handleClickPrevYear: PropTypes.func,
  handleClickLabel: PropTypes.func,
  handleClickNextYear: PropTypes.func,
  handleClickChangeMonth: PropTypes.func,
  selectedMonth: PropTypes.number,
}

export const EditingTemplate = ({
  yearLabel,
  handleClickPrevYear,
  handleClickLabel,
  handleClickNextYear,
  handleClickChangeMonth,
  selectedMonth
}) => {

  const getClassesMonthBtn = (monthNumber) => {
    const isNowMonth = getNowMonthClass(monthNumber)
    const isSelectedMonth = getNowSelectedClass(monthNumber)
    return `date-switcher__viewContainer__button ${isNowMonth} ${isSelectedMonth}`
  }

  const getNowMonthClass = (monthNumber) => {
    return monthNumber === nowMonth ? 'date-switcher__viewContainer__button-outlined' : ''
  }

  const getNowSelectedClass = (monthNumber) => {
    return monthNumber === selectedMonth ? 'date-switcher__viewContainer__button-fill' : ''
  }

  return (
    <>
      <div className={'date-switcher__navigate'}>
        <button
          className={'date-switcher__navigate__arrow date-switcher__navigate__prev'}
          onClick={handleClickPrevYear}
        >
          <SVG src='/images/icons/arrow-left.svg' />
        </button>

        <button
          className={'date-switcher__navigate__label'}
          onClick={handleClickLabel}
        >
          <span className={'date-switcher__navigate__label-text'}>
            {yearLabel}
          </span>
        </button>

        <button
          className={'date-switcher__navigate__arrow date-switcher__navigate__next'}
          onClick={handleClickNextYear}
        >
          <SVG src='/images/icons/arrow-right.svg' />
        </button>
      </div>

      <div className='date-switcher__viewContainer'>
        <div className='date-switcher__viewContainer__group'>
          {months.map(month => (
            <div
              key={month.number}
              className='date-switcher__viewContainer__cell'
            >
              <button
                data-month={`${month.number}`}
                title={month.name}
                className={getClassesMonthBtn(month.number)}
                onClick={handleClickChangeMonth}
              >
                {month.shortName}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

EditingTemplate.propTypes = propTypes
