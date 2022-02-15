import React from 'react'
import styles from './TransactionsNotFound.module.scss'
import SVG from 'react-inlinesvg'

export const TransactionsNotFound = () => {
  return (
    <div>
      <SVG src='images/animCoin.svg' className={styles.content} />
      <p className={styles.text}>Здесь нет ни одной операции</p>
    </div>
  )
}
