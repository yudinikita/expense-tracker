import React from 'react'
import { useFormDeleteWithTransactions } from './hooks'
import { useTranslation } from 'react-i18next'
import { Button, Space, Typography } from 'modules/ui'

export const FormDeleteWithTransactions = () => {
  const { t } = useTranslation()
  const { clickDeleteWithTransactions, loading } = useFormDeleteWithTransactions()

  return (
    <Space
      direction='vertical'
      size={15}
      block
      blockItem
    >
      <Typography
        variant='text'
        fontSize={16}
      >
        {t('categories.modaldelete.desc.trans')}
      </Typography>

      <Button
        onClick={clickDeleteWithTransactions}
        disabled={loading}
      >
        {t('categories.modaldelete.btn.trans')}
      </Button>
    </Space>
  )
}
