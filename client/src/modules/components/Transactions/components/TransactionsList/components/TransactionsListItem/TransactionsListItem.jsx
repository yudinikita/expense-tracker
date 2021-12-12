import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Price, SIGN_DISPLAY } from '../../../../../Price'
import styles from './TransactionsListItem.module.scss'

export const TransactionsListItem = ({ transaction }) => {
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

TransactionsListItem.propTypes = {
  transaction: PropTypes.object,
}
