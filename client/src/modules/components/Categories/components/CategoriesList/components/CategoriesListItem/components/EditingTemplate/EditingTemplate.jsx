import React from 'react'
import InlineSVG from 'react-inlinesvg'
import { useEditingTemplate } from './hooks'
import styles from '../../CategoriesListItem.module.scss'

export const EditingTemplate = () => {
  const {
    handleClickEditCancel,
    handleClickEditSave,
    onChangeEditInput,
    editInput,
    loading
  } = useEditingTemplate()

  return (
    <>
      <div className={styles.titleContainer}>
        <input
          type='text'
          className={styles.titleInput}
          value={editInput}
          onChange={onChangeEditInput}
          disabled={loading}
        />
      </div>
      <div className={styles.groupBtn + ' ' + styles.groupBtnEdit}>
        <button
          onClick={handleClickEditSave}
          className={`${styles.btn} ${styles.btnEditSave}`}
          title='Сохранить'
          disabled={loading}
        >
          <InlineSVG src='/images/icons/tick.svg' />
        </button>
        <button
          onClick={handleClickEditCancel}
          className={`${styles.btn} ${styles.btnEditCancel}`}
          title='Отменить'
          disabled={loading}
        >
          <InlineSVG src='/images/icons/cross.svg' />
        </button>
      </div>
    </>
  )
}
