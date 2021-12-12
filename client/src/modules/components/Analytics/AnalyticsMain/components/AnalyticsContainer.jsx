import React from 'react'
import PropTypes from 'prop-types'
import { AnalyticsBalance, AnalyticsExpense, AnalyticsIncome } from '../../..'

export const AnalyticsContainer = ({
  typeAnalytic,
  date
}) => {
  switch (typeAnalytic) {
    case 'balance':
      return (<AnalyticsBalance date={date} />)
    case 'expense':
      return (<AnalyticsExpense date={date} />)
    case 'income':
      return (<AnalyticsIncome date={date} />)
    default:
      return (<AnalyticsBalance date={date} />)
  }
}

AnalyticsContainer.propTypes = {
  typeAnalytic: PropTypes.string,
  date: PropTypes.exact({
    activeDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date)
  }),
}
