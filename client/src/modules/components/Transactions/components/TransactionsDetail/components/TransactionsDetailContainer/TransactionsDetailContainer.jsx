import React from 'react'
import PropTypes from 'prop-types'
import { Price, SIGN_DISPLAY } from '../../../../..'
import { useTransactionsDetailContainer } from './hooks'
import styles from './TransactionsDetailContainer.module.scss'

const priceStyle = {
  fontWeight: '700',
  fontSize: '30px',
  lineHeight: '140%'
}

export const TransactionsDetailContainer = ({ transaction }) => {
  const {
    date,
    handleClickEdit,
    handleClickRemove,
    loadingRemove
  } = useTransactionsDetailContainer(transaction)

  const categoryTitle = transaction?.category?.title || 'Без категории'

  const renderCommentary = () => {
    return transaction?.commentary
      ? <p className={styles.commentary}>{transaction?.commentary}</p>
      : null
  }

  return (
    <div className={styles.container}>
      <div className={styles.textAnimate}>
        <Price
          amount={transaction?.amount}
          signDisplay={SIGN_DISPLAY.EXCEPT_ZERO}
          haveColor
          style={priceStyle}
        />

        <h2 className={styles.category}>
          {categoryTitle}
        </h2>

        <p>{date}</p>

        {renderCommentary()}
      </div>

      <div>
        <button
          className='mainButton'
          onClick={handleClickEdit}
        >
          Изменить
        </button>
        <br /><br />
        <button
          className='secondaryButton'
          onClick={handleClickRemove}
          disabled={loadingRemove}
        >
          Удалить
        </button>
      </div>
    </div>
  )
}

TransactionsDetailContainer.propTypes = {
  transaction: PropTypes.object,
}
