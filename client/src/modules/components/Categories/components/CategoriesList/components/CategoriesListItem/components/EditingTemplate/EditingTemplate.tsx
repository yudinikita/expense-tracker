import React from 'react'
import InlineSVG from 'react-inlinesvg'
import { useTranslation } from 'react-i18next'
import { useEditingTemplate } from './hooks'
import s from '../../CategoriesListItem.module.scss'

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
      <div className={s.titleContainer}>
        <input
          type='text'
          className={s.titleInput}
          value={editInput}
          onChange={onChangeEditInput}
          disabled={loading}
          autoFocus
        />
      </div>
      <div className={s.groupBtn + ' ' + s.groupBtnEdit}>
        <button
          onClick={handleClickEditSave}
          className={`${s.btn} ${s.btnEditSave}`}
          title={t('button.save')}
          disabled={loading}
        >
          <InlineSVG src='/images/icons/tick.svg' />
        </button>
        <button
          onClick={handleClickEditCancel}
          className={`${s.btn} ${s.btnEditCancel}`}
          title={t('button.cancel')}
          disabled={loading}
        >
          <InlineSVG src='/images/icons/cross.svg' />
        </button>
      </div>
    </>
  )
}
