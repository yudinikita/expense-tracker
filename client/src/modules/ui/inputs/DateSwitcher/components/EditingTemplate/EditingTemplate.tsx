import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import { Dayjs } from 'dayjs'
import { LeftOutline, RightOutline } from 'modules/assets/icons'
import { Button, Icon, Typography } from 'modules/ui'
import { getMonths } from 'modules/utils'
import s from '../../DateSwitcher.module.scss'

const nowMonth = new Date().getMonth()

interface EditingTemplateProps {
  yearLabel?: string
  handleClickPrevYear?: React.MouseEventHandler<HTMLButtonElement>
  handleClickLabel?: React.MouseEventHandler<HTMLButtonElement>
  handleClickNextYear?: React.MouseEventHandler<HTMLButtonElement>
  handleClickChangeMonth?: React.MouseEventHandler<HTMLButtonElement>
  selectedMonth?: number | null
}

export const EditingTemplate: React.FC<EditingTemplateProps> = ({
  yearLabel = '',
  handleClickPrevYear = () => null,
  handleClickLabel = () => null,
  handleClickNextYear = () => null,
  handleClickChangeMonth = () => null,
  selectedMonth
}) => {
  const months = getMonths()

  const renderMonth = (dateMonth: Dayjs) => {
    const classNameMonth = classNames(s.viewContainer__button, {
      [s.viewContainer__button__outlined]: dateMonth.month() === nowMonth,
      [s.viewContainer__button__fill]: dateMonth.month() === selectedMonth,
    })

    return (
      <div
        key={uuidv4()}
        className={s.viewContainer__cell}
      >
        <button
          data-month={dateMonth.month()}
          title={dateMonth.format('MMMM')}
          className={classNameMonth}
          onClick={handleClickChangeMonth}
        >
          {dateMonth.format('MMM')}
        </button>
      </div>
    )
  }

  return (
    <>
      <div className={s.navigate}>
        <Button
          className={s.arrow}
          variant='default'
          iconButton={<Icon icon={LeftOutline} />}
          onClick={handleClickPrevYear}
        />

        <Button
          className={s.navigate__label}
          variant='default'
          onClick={handleClickLabel}
          block
        >
          <Typography
            className={s.navigate__labelText}
            variant='h4'
          >
            {yearLabel}
          </Typography>
        </Button>

        <Button
          className={s.arrow}
          variant='default'
          iconButton={<Icon icon={RightOutline} />}
          onClick={handleClickNextYear}
        />
      </div>

      <div className={s.viewContainer}>
        <div className={s.viewContainer__group}>
          {months.map(month => renderMonth(month))}
        </div>
      </div>
    </>
  )
}
