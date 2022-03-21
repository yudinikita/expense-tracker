import React from 'react'
import { Typography } from 'modules/ui'

interface TransactionsDateProps {
  date?: string
}

export const TransactionsDate: React.FC<TransactionsDateProps> = ({
  date
}) => {
  return (
    date
      ? <Typography
        variant='h4'
        type='secondary'
        fontSize={16}
        style={{ margin: '15px 0 5px' }}
      >
        {date}
      </Typography>
      : null
  )
}
