import React from 'react'
import InlineSVG from 'react-inlinesvg'
import { useViewTemplate } from './hooks'
import styles from '../../CategoriesListItem.module.scss'

export const ViewTemplate = () => {
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
          title='Изменить'
        >
          <InlineSVG src='/images/icons/edit.svg' />
        </button>
        <button
          onClick={handleClickDelete}
          className={`${styles.btn} ${styles.btnDelete}`}
          title='Удалить'
        >
          <InlineSVG src='/images/icons/bin.svg' />
        </button>
      </div>
    </>
  )
}
