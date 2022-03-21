import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Space, Typography } from 'modules/ui'
import { useFormDeleteBase } from './hooks'

export const FormDeleteBase = () => {
  const { t } = useTranslation()
  const { clickDeleteBase, loading } = useFormDeleteBase()

  return (
    <Space
      direction='vertical'
      size={15}
      block
      blockItem
    >
      <Typography variant='text' fontSize={16}>
        {t('categories.modaldelete.desc.normal')}
      </Typography>

      <Button
        onClick={clickDeleteBase}
        loading={loading}
      >
        {t('categories.modaldelete.btn.delete')}
      </Button>
    </Space>
  )
}
