import React from 'react'
import { useTranslation } from 'react-i18next'
import { Icon, Space, Typography } from 'modules/ui'
import s from './TransactionsNotFound.module.scss'

export const TransactionsNotFound: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Space
      direction='vertical'
      align='center'
      block
      blockItem
    >
      <Icon
        className={s.content}
        icon='images/animCoin.svg'
      />
      <Typography
        variant='text'
        type='secondary'
        textAlign='center'
        style={{ width: '100%' }}
      >
        {t('transactions.notfound')}
      </Typography>
    </Space>
  )
}
