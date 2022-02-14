import React from 'react'
import { Link } from 'react-router-dom'
import InlineSVG from 'react-inlinesvg'
import { useHelpListItem } from './hooks'
import styles from './HelpListItem.module.scss'
import { Help } from '../../../../../../graphql/__generated__/graphql.gen'

type Props = {
  helpItem: Help
}

export const HelpListItem = ({ helpItem }: Props) => {
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
