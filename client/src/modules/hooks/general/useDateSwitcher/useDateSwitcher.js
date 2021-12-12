import { useState } from 'react'
import { endDateByMonth, firstDateByMonth } from '../../../utils'

const nowDate = new Date()
const firstDate = firstDateByMonth(nowDate)
const endDate = endDateByMonth(nowDate)

export const useDateSwitcher = () => {
  const [date, setDate] = useState({
    activeDate: nowDate,
    startDate: firstDate,
    endDate: endDate,
  })

  const onChange = ({ activeDate, startDate, endDate }) => {
    setDate({ activeDate, startDate, endDate })
  }

  return {
    date,
    onChange
  }
}
