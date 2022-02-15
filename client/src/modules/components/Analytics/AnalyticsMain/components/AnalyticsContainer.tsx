import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { AnalyticsBalance, AnalyticsExpense, AnalyticsIncome } from '../../..'

const propTypes = {
  typeAnalytic: PropTypes.string,
  date: PropTypes.exact({
    activeDate: PropTypes.instanceOf(Date).isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired
  }).isRequired
}

export const AnalyticsContainer = ({
  typeAnalytic,
  date
}: InferProps<typeof propTypes>) => {
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

AnalyticsContainer.propTypes = propTypes
