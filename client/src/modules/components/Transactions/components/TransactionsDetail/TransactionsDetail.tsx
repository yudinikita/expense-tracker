import React from 'react'
import { useTranslation } from 'react-i18next'
import { Transaction } from 'modules/graphql'
import { Button, Price, Space, Typography } from 'modules/ui'
import { useTransactionsDetail } from './hooks'
import s from './TransactionsDetail.module.scss'

type TransactionPick = 'id' | 'amount' | 'commentary' | 'createdAt'

interface TransactionsDetailProps extends Partial<Pick<Transaction, TransactionPick>> {
  categoryTitle?: string
}

export const TransactionsDetail: React.FC<TransactionsDetailProps> = ({
  id,
  amount,
  categoryTitle,
  commentary,
  createdAt
}) => {
  const { t } = useTranslation()

  const {
    date,
    handleClickEdit,
    handleClickRemove,
    loadingRemove
  } = useTransactionsDetail(id, createdAt)

  const title = categoryTitle || 'Без категории'

  return (
    <Space
      direction='vertical'
      align='center'
      size={25}
      block
    >
      <Space
        className={s.textAnimate}
        direction='vertical'
        align='center'
        size={15}
        block
      >
        <Price
          className={s.price}
          amount={amount}
          haveColor
        />

        <Typography variant='h2'>
          {title}
        </Typography>

        <Typography
          variant='text'
          type='secondary'
        >
          {date}
        </Typography>

        {renderCommentary(commentary)}
      </Space>

      <Space
        direction='vertical'
        size={20}
      >
        <Button onClick={handleClickEdit}>
          {t('button.edit')}
        </Button>
        <Button
          variant='outline'
          onClick={handleClickRemove}
          loading={loadingRemove}
        >
          {t('button.remove')}
        </Button>
      </Space>
    </Space>
  )
}

const renderCommentary = (commentary?: string | null) => (
  commentary
    ? <Typography variant='text' type='secondary' className={s.commentary}>
      {commentary}
    </Typography>
    : null
)
