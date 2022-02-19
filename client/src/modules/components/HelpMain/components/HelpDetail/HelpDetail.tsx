import React from 'react'
import { MyError, MyLoader } from '../../..'
import { useHelpDetail } from './hooks'
import styles from './HelpDetail.module.scss'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'

export const HelpDetail = () => {
  const { t } = useTranslation()
  const {
    helpDetailResponse,
    updateHelpResponse,
    handleSolved,
    handleUnresolved
  } = useHelpDetail()

  const helpDetail = helpDetailResponse?.data?.helpDetail

  if (helpDetailResponse?.loading) return <MyLoader />
  if ((helpDetailResponse?.error) != null) return <MyError error={helpDetailResponse?.error} />

  const answer = helpDetail?.answer || t('help.comingsoon')

  const renderIsAnswer = () => helpDetail?.answer ? t('help.answer.yes') : t('help.answer.no')

  const renderDetail = () => helpDetail?.detail ? <div><p>{helpDetail?.detail}</p></div> : null

  const renderSolved = () => {
    if (helpDetail?.answer) {
      if (helpDetail?.solved === null) return renderSolvedBtn()
      if (helpDetail?.solved === true) return <p>{t('help.solved.yes')}</p>
      if (helpDetail?.solved === false) return <p>{t('help.solved.no')}</p>
    }
    return null
  }

  const renderSolvedBtn = () => {
    if (updateHelpResponse?.loading) return <MyLoader />
    if ((updateHelpResponse?.error) != null) return <MyError error={helpDetailResponse?.error} />

    return (
      <div>
        <br />
        <h3>{t('help.solved.question')}</h3>
        <br />
        <button
          className='mainButton'
          onClick={handleSolved}
        >
          {t('help.solved.answer.yes')}
        </button>
        <br /><br />

        <button
          className='secondaryButton'
          onClick={handleUnresolved}
        >
          {t('help.solved.answer.no')}
        </button>
      </div>
    )
  }

  return (
    <div>
      <h3>{helpDetail?.title}</h3>
      {renderDetail()}
      <div className={styles.innerContainer}>
        <p>{renderIsAnswer()}</p>
        <p>{dayjs(helpDetail?.createdAt).format('DD MMM YYYY')}</p>
      </div>
      <br />

      <h3>{t('help.answer.title')}</h3>
      <p>{answer}</p>

      {renderSolved()}
    </div>
  )
}
