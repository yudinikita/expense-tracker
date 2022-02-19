import React from 'react'
import { Price, SIGN_DISPLAY } from '../../../../..'
import { useTransactionsDetailContainer } from './hooks'
import styles from './TransactionsDetailContainer.module.scss'
import { Transaction } from '../../../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

const priceStyle: React.CSSProperties = {
  fontWeight: '700',
  fontSize: '30px',
  lineHeight: '140%'
}

interface Props {
  transaction: Transaction
}

export const TransactionsDetailContainer: React.FC<Props> = ({ transaction }) => {
  const { t } = useTranslation()

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
          {t('button.edit')}
        </button>
        <br /><br />
        <button
          className='secondaryButton'
          onClick={handleClickRemove}
          disabled={loadingRemove}
        >
          {t('button.remove')}
        </button>
      </div>
    </div>
  )
}
