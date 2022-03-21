import React from 'react'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import { Button, Divider, Errors, Loaders, Space, Typography } from 'modules/ui'
import { useHelpDetail } from './hooks'

export const HelpDetail = () => {
  const { t } = useTranslation()
  const {
    helpDetailResponse,
    updateHelpResponse,
    handleSolved,
    handleUnresolved
  } = useHelpDetail()

  const helpDetail = helpDetailResponse?.data?.helpDetail

  if (helpDetailResponse?.loading) return <Loaders />
  if ((helpDetailResponse?.error) != null) return <Errors />

  const answer = helpDetail?.answer || t('help.comingsoon')

  const renderIsAnswer = () => helpDetail?.answer ? t('help.answer.yes') : t('help.answer.no')

  const renderDetail = () => helpDetail?.detail ? <Typography>{helpDetail?.detail}</Typography> : null

  const renderSolved = () => {
    if (helpDetail?.answer) {
      if (helpDetail?.solved === null) return renderSolvedBtn()
      if (helpDetail?.solved === true) return <Typography>{t('help.solved.yes')}</Typography>
      if (helpDetail?.solved === false) return <Typography>{t('help.solved.no')}</Typography>
    }
    return null
  }

  const renderSolvedBtn = () => {
    if (updateHelpResponse?.loading) return <Loaders />
    if ((updateHelpResponse?.error) != null) return <Errors />

    return (
      <Space direction='vertical' size={25}>
        <Typography variant='h3'>{t('help.solved.question')}</Typography>

        <Button
          variant='primary'
          onClick={handleSolved}
        >
          {t('help.solved.answer.yes')}
        </Button>

        <Button
          variant='outline'
          onClick={handleUnresolved}
        >
          {t('help.solved.answer.no')}
        </Button>
      </Space>
    )
  }

  return (
    <Space direction='vertical' block blockItem>
      <Typography variant='h3'>{helpDetail?.title}</Typography>

      {renderDetail()}

      <Space direction='horizontal' justify='between' block blockItem>
        <Typography>{renderIsAnswer()}</Typography>
        <Typography>{dayjs(helpDetail?.createdAt).format('DD MMM YYYY')}</Typography>
      </Space>

      <Divider variant='invisible' space={10} />

      <Typography variant='h3'>{t('help.answer.title')}</Typography>

      <Typography variant='text'>{answer}</Typography>

      <Divider variant='invisible' space={10} />

      {renderSolved()}
    </Space>
  )
}
