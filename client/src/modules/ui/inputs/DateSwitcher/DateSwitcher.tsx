import React from 'react'
import classNames from 'classnames'
import { EditingTemplate, ViewTemplate } from './components'
import { useDateSwitcher } from './hooks'
import s from './DateSwitcher.module.scss'
import { DateSwitcherDate } from 'modules/hooks'

interface DateSwitcherProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange?: ({ activeDate, startDate, endDate }: DateSwitcherDate) => void
}

/**
 * A simple and reusable Date switcher component
 */
export const DateSwitcher: React.FC<DateSwitcherProps> = ({
  onChange = () => null,
  className,
  ...otherProps
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

  const props = {
    className: classNames(s.wrapper, className),
    ...otherProps
  }

  return (
    <div {...props}>
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
