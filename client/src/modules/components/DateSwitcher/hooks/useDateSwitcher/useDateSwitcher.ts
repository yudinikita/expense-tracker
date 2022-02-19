import { SyntheticEvent, useState } from 'react'
import dayjs from 'dayjs'
import { defaultDate, getDateConstruction } from './utils'

export const useDateSwitcher = (onChange: Function) => {
  const [date, setDate] = useState(defaultDate)
  const [isEditing, setEditing] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)

  const saveAndChangeDate = (newDate: Date) => {
    const dateConstruction = getDateConstruction(newDate)
    setDate(dateConstruction)
    onChange(dateConstruction)
  }

  const handleClickPrev = () => {
    const prevMonthDate = dayjs(date.activeDate).subtract(1, 'month').toDate()
    saveAndChangeDate(prevMonthDate)
  }

  const handleClickLabel = () => {
    setEditing(!isEditing)
    setSelectedMonth(null)
  }

  const handleClickNext = () => {
    const nextMonthDate = dayjs(date.activeDate).add(1, 'month').toDate()
    saveAndChangeDate(nextMonthDate)
  }

  const handleClickPrevYear = () => {
    const prevYearDate = dayjs(date.activeDate).subtract(1, 'year').toDate()
    saveAndChangeDate(prevYearDate)
  }

  const handleClickNextYear = () => {
    const prevYearDate = dayjs(date.activeDate).add(1, 'year').toDate()
    saveAndChangeDate(prevYearDate)
  }

  const handleClickChangeMonth = (e: SyntheticEvent) => {
    // @ts-expect-error
    const month = parseInt(e.target.dataset.month)
    const changedMonth = date.activeDate.setMonth(month)
    const newDate = new Date(changedMonth)
    setSelectedMonth(month)
    saveAndChangeDate(newDate)
  }

  const navigationLabel = dayjs(date.startDate).format('MMMM, YYYY')
  const yearLabel = dayjs(date.startDate).format('YYYY')

  return {
    navigationLabel,
    isEditing,
    handleClickPrev,
    handleClickLabel,
    handleClickNext,
    yearLabel,
    handleClickPrevYear,
    handleClickNextYear,
    handleClickChangeMonth,
    selectedMonth
  }
}
