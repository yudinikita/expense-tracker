import React from 'react'
import { Help } from 'modules/graphql'
import { Space, Typography } from 'modules/ui'
import { useTranslation } from 'react-i18next'
import { HelpListItem } from './HelpListItem'

interface HelpListContainerProps {
  helps?: [Help]
}

export const HelpListContainer: React.FC<HelpListContainerProps> = ({
  helps
}) => {
  const { t } = useTranslation()

  if (helps === undefined || helps === null) return <Typography>{t('help.notfound')}</Typography>

  return (
    <Space
      direction='vertical'
      size={10}
      block
      blockItem
    >
      {helps.map((helpItem) => <HelpListItem helpItem={helpItem!} />)}
    </Space>
  )
}
