import React from 'react'
import InlineSVG from 'react-inlinesvg'
import { useViewTemplate } from './hooks'
import styles from '../../CategoriesListItem.module.scss'
import { useTranslation } from 'react-i18next'

export const ViewTemplate = () => {
  const { t } = useTranslation()

  const {
    handleClickEdit,
    handleClickDelete,
    category
  } = useViewTemplate()

  return (
    <>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{category?.title}</p>
      </div>
      <div className={styles.groupBtn}>
        <button
          onClick={handleClickEdit}
          className={`${styles.btn} ${styles.btnEdit}`}
          title={t('button.edit')}
        >
          <InlineSVG src='/images/icons/edit.svg' />
        </button>
        <button
          onClick={handleClickDelete}
          className={`${styles.btn} ${styles.btnDelete}`}
          title={t('button.remove')}
        >
          <InlineSVG src='/images/icons/bin.svg' />
        </button>
      </div>
    </>
  )
}
