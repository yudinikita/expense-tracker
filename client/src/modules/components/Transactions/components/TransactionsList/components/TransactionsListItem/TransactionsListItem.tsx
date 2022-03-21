import React from 'react'
import { useTranslation } from 'react-i18next'
import { Transaction } from 'modules/graphql'
import { Button, Link, Price, Space, Typography } from 'modules/ui'
import s from './TransactionsListItem.module.scss'

type TransactionPick = 'id' | 'amount' | 'commentary'

interface TransactionsListItemProps extends Pick<Transaction, TransactionPick> {
  categoryTitle?: string
}

export const TransactionsListItem: React.FC<TransactionsListItemProps> = ({
  id = '#',
  amount = 0,
  categoryTitle,
  commentary
}) => {
  const { t } = useTranslation()

  const title = categoryTitle ?? t('transactions.uncategorized')

  const price = <Price className={s.amount} amount={amount} haveColor />

  return (
    <Link
      className={s.link}
      href={`/transactions/${id}`}
      title='Операция'
      route
      block
    >
      <Button
        variant='default'
        textAlign='left'
        size='small'
        block
        after={price}
      >
        <Space
          direction='vertical'
          block
          blockItem
        >
          <Typography
            className={s.title}
            variant='h4'
          >
            {title}
          </Typography>
          {renderCommentary(commentary)}
        </Space>
      </Button>
    </Link>
  )
}

const renderCommentary = (commentary?: string | null) => (
  commentary
    ? <Typography className={s.commentary} variant='text' fontSize={16}>{commentary}</Typography>
    : null
)
