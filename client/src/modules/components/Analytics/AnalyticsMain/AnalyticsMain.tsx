import React from 'react'
import { DateSwitcher } from '../..'
import { useDateSwitcher } from '../../../hooks'
import { AnalyticsContainer, Checkbox } from './components'
import { useAnalyticsContainer } from './hooks/useAnalyticsContainer'
import styles from './AnalyticsMain.module.scss'

export const AnalyticsMain = () => {
  const { date, onChange } = useDateSwitcher()
  const { typeAnalytic, handleCheckboxClick } = useAnalyticsContainer()

  return (
    <div>
      <Checkbox handleCheckboxClick={handleCheckboxClick} />

      <DateSwitcher className={styles.calendar} onChange={onChange} />

      <AnalyticsContainer typeAnalytic={typeAnalytic} date={date} />
    </div>
  )
}
