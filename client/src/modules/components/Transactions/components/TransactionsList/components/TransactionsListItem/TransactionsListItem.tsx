import React from 'react'
import { Link } from 'react-router-dom'
import { Price, SIGN_DISPLAY } from '../../../../../Price'
import styles from './TransactionsListItem.module.scss'
import { Transaction } from '../../../../../../graphql/__generated__/graphql.gen'

interface Props {
  transaction: Transaction
}

export const TransactionsListItem: React.FC<Props> = ({ transaction }) => {
  const title = transaction?.category?.title || 'Без категории'
  const amount = transaction?.amount

  const renderCommentary = () => (
    transaction?.commentary
      ? <p className={styles.commentary}>{transaction?.commentary}</p>
      : null
  )

  return (
    <Link
      to={`/transactions/${transaction?.id}`}
      className={styles.link}
      title='Операция'
    >
      <div className={styles.containerTitleAmount}>
        <p className={styles.title}>{title}</p>
        <Price
          className={styles.amount}
          amount={amount}
          signDisplay={SIGN_DISPLAY.EXCEPT_ZERO}
          haveColor
        />
      </div>
      {renderCommentary()}
    </Link>
  )
}
