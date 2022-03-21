import React from 'react'
import { Help, useHelpsQuery } from 'modules/graphql'
import { Errors, Loaders, Space, Typography } from 'modules/ui'
import { useTranslation } from 'react-i18next'
import { HelpListContainer } from './HelpListContainer'

export const HelpList: React.FC = () => {
  const { t } = useTranslation()
  const { data, loading, error } = useHelpsQuery()

  if (loading) return <Loaders />
  if (error) return <Errors />

  return (
    <Space direction='vertical' block blockItem>
      <Typography variant='h2'>{t('help.myquestions')}</Typography>

      <HelpListContainer helps={data?.helps as [Help]} />
    </Space>
  )
}

