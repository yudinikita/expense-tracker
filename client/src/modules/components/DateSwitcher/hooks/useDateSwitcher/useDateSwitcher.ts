import { SyntheticEvent, useState } from 'react'
import { addMonth, addYear, removeMonth, removeYear } from '../../../../utils'
import { defaultDate, getDateConstruction, getNavigationLabel, getYear } from './utils'

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
    const prevMonthDate = removeMonth(date.activeDate)
    saveAndChangeDate(prevMonthDate)
  }

  const handleClickLabel = () => {
    setEditing(!isEditing)
    setSelectedMonth(null)
  }

  const handleClickNext = () => {
    const nextMonthDate = addMonth(date.activeDate)
    saveAndChangeDate(nextMonthDate)
  }

  const handleClickPrevYear = () => {
    const prevYearDate = removeYear(date.activeDate)
    saveAndChangeDate(prevYearDate)
  }

  const handleClickNextYear = () => {
    const prevYearDate = addYear(date.activeDate)
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

  const navigationLabel = getNavigationLabel(date.startDate)
  const yearLabel = getYear(date.startDate)

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
