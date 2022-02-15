import React from 'react'
import { useDateSwitcher } from './hooks'
import { EditingTemplate, ViewTemplate } from './components'
import './DateSwitcher.scss'

interface Props {
  onChange: Function
  className?: string
  style?: React.CSSProperties
}

export const DateSwitcher: React.FC<Props> = ({
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
        ? <EditingTemplate
            yearLabel={yearLabel}
            handleClickPrevYear={handleClickPrevYear}
            handleClickLabel={handleClickLabel}
            handleClickNextYear={handleClickNextYear}
            handleClickChangeMonth={handleClickChangeMonth}
            selectedMonth={selectedMonth}
          />
        : <ViewTemplate
            navigationLabel={navigationLabel}
            handleClickPrev={handleClickPrev}
            handleClickLabel={handleClickLabel}
            handleClickNext={handleClickNext}
          />}
    </div>
  )
}
