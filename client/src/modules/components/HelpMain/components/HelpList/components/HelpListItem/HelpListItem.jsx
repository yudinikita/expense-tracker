import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import InlineSVG from 'react-inlinesvg'
import { useHelpListItem } from './hooks'
import styles from './HelpListItem.module.scss'

const propTypes = {
  helpItem: PropTypes.object,
}

export const HelpListItem = ({ helpItem }) => {
  const { getDate } = useHelpListItem()

  const renderIsSolved = () => {
    const solved = helpItem?.solved
    let iconName = 'question-circle'

    if (solved === true) iconName = 'tick-circle'
    if (solved === false) iconName = 'x-circle'

    return <div className={styles.icon}><InlineSVG src={`/images/icons/${iconName}.svg`} /></div>
  }

  const renderCreatedAt = () => {
    return getDate(helpItem?.createdAt)
  }

  const renderIsAnswer = () => {
    return helpItem?.answer ? 'Есть ответ' : 'Нет ответа'
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

HelpListItem.propTypes = propTypes
