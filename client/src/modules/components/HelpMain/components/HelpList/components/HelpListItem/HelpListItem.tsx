import React from 'react'
import { Link } from 'react-router-dom'
import InlineSVG from 'react-inlinesvg'
import styles from './HelpListItem.module.scss'
import { Help } from '../../../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'

interface Props {
  helpItem: Help
}

export const HelpListItem: React.FC<Props> = ({ helpItem }) => {
  const { t } = useTranslation()

  const renderIsSolved = () => {
    const solved = helpItem?.solved
    let iconName = 'question-circle'

    if (solved === true) iconName = 'tick-circle'
    if (solved === false) iconName = 'x-circle'

    return <div className={styles.icon}><InlineSVG src={`/images/icons/${iconName}.svg`} /></div>
  }

  const renderCreatedAt = () => {
    return dayjs(helpItem?.createdAt).format('DD MMM YYYY')
  }

  const renderIsAnswer = () => {
    return helpItem?.answer ? t('help.answer.yes') : t('help.answer.no')
  }

  return (
    <Link to={helpItem?.id} className={styles.link}>
      <div className={styles.container}>
        {renderIsSolved()}
        <div className={styles.innerContainer}>
          <p className={styles.title}>{helpItem?.title}</p>
          <div className={styles.detail}>
            <span>{renderIsAnswer()}</span>
            <span>{renderCreatedAt()}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
