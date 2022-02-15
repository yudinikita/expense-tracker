import { useState } from 'react'
import { endDateByMonth, firstDateByMonth } from '../../../utils'

const nowDate = new Date()
const firstDate = firstDateByMonth(nowDate)
const endDate = endDateByMonth(nowDate)

export interface DateSwitcherDate {
  activeDate: Date
  startDate: Date
  endDate: Date
}

export const useDateSwitcher = () => {
  const [date, setDate] = useState<DateSwitcherDate>({
    activeDate: nowDate,
    startDate: firstDate,
    endDate: endDate
  })

  const onChange = ({ activeDate, startDate, endDate }: DateSwitcherDate) => {
    setDate({ activeDate, startDate, endDate })
  }

  return {
    date,
    onChange
  }
}
