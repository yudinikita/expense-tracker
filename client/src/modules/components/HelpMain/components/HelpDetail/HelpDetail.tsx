import React from 'react'
import { MyError, MyLoader } from '../../..'
import { useHelpDetail } from './hooks'
import styles from './HelpDetail.module.scss'

export const HelpDetail = () => {
  const {
    helpDetailResponse,
    updateHelpResponse,
    getDate,
    handleSolved,
    handleUnresolved,
  } = useHelpDetail()

  const helpDetail = helpDetailResponse?.helpDetail

  if (helpDetailResponse?.loading) return <MyLoader />
  if (helpDetailResponse?.error) return <MyError error={helpDetailResponse?.error} />

  const answer = helpDetail?.answer || 'Скоро будет...'

  const renderIsAnswer = () => helpDetail?.answer ? 'Есть ответ' : 'Нет ответа'

  const renderDetail = () => helpDetail?.detail ? <div><p>{helpDetail?.detail}</p></div> : null

  const renderSolved = () => {
    if (helpDetail?.answer) {
      if (helpDetail?.solved === null) return renderSolvedBtn()
      if (helpDetail?.solved === true) return <p>Вы сообщили, что проблема решена.</p>
      if (helpDetail?.solved === true) return <p>Вы сообщили, что проблема не решена.</p>
    }
    return null
  }

  const renderSolvedBtn = () => {
    if (updateHelpResponse?.loading) return <MyLoader />
    if (updateHelpResponse?.error) return <MyError error={helpDetailResponse?.error} />

    return (
      <div>
        <br />
        <h3>Вы решили свою проблему?</h3>
        <br />
        <button
          className='mainButton'
          onClick={handleSolved}
        >
          Да, проблема решена
        </button>
        <br /><br />

        <button
          className='secondaryButton'
          onClick={handleUnresolved}
        >
          Нет, проблема осталась
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
        <p>{getDate(helpDetail?.createdAt)}</p>
      </div>
      <br />

      <h3>Ответ</h3>
      <p>{answer}</p>

      {renderSolved()}
    </div>
  )
}
