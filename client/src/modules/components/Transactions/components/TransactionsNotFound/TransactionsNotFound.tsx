import React from 'react'
import styles from './TransactionsNotFound.module.scss'
import SVG from 'react-inlinesvg'
import { useTranslation } from 'react-i18next'

export const TransactionsNotFound = () => {
  const { t } = useTranslation()

  return (
    <div>
      <SVG src='images/animCoin.svg' className={styles.content} />
      <p className={styles.text}>{t('transactions.notfound')}</p>
    </div>
  )
}
