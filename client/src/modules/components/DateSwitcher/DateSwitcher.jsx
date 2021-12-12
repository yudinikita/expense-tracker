import React from 'react'
import PropTypes from 'prop-types'
import { useDateSwitcher } from './hooks'
import { EditingTemplate, ViewTemplate } from './components'
import './DateSwitcher.scss'

const propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
}

const defaultProps = {
  className: ''
}

export const DateSwitcher = ({
  onChange,
  className,
  style
}) => {
  const {
    isEditing,
    navigationLabel,
    handleClickPrev,
    handleClickLabel,
    handleClickNext,
    yearLabel,
    handleClickPrevYear,
    handleClickNextYear,
    handleClickChangeMonth,
    selectedMonth
  } = useDateSwitcher(onChange)

  return (
    <div className={`date-switcher ${className}`} style={style}>
      {isEditing
        ?
        <EditingTemplate
          yearLabel={yearLabel}
          handleClickPrevYear={handleClickPrevYear}
          handleClickLabel={handleClickLabel}
          handleClickNextYear={handleClickNextYear}
          handleClickChangeMonth={handleClickChangeMonth}
          selectedMonth={selectedMonth}
        />
        :
        <ViewTemplate
          navigationLabel={navigationLabel}
          handleClickPrev={handleClickPrev}
          handleClickLabel={handleClickLabel}
          handleClickNext={handleClickNext}
        />}
    </div>
  )
}

DateSwitcher.propTypes = propTypes

DateSwitcher.defaultProps = defaultProps
