import React from 'react'
import InlineSVG from 'react-inlinesvg'
import { useEditingTemplate } from './hooks'
import styles from '../../CategoriesListItem.module.scss'
import { useTranslation } from 'react-i18next'

export const EditingTemplate = () => {
  const { t } = useTranslation()

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
          autoFocus
        />
      </div>
      <div className={styles.groupBtn + ' ' + styles.groupBtnEdit}>
        <button
          onClick={handleClickEditSave}
          className={`${styles.btn} ${styles.btnEditSave}`}
          title={t('button.save')}
          disabled={loading}
        >
          <InlineSVG src='/images/icons/tick.svg' />
        </button>
        <button
          onClick={handleClickEditCancel}
          className={`${styles.btn} ${styles.btnEditCancel}`}
          title={t('button.cancel')}
          disabled={loading}
        >
          <InlineSVG src='/images/icons/cross.svg' />
        </button>
      </div>
    </>
  )
}
