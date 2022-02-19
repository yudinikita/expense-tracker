import React from 'react'
import { useCategoriesForm } from './hooks/useCategoriesForm'
import styles from './CategoriesForm.module.scss'
import { useTranslation } from 'react-i18next'

export const CategoriesForm = () => {
  const { t } = useTranslation()

  const {
    loading,
    inputCategory,
    onSubmitForm,
    onChangeInput
  } = useCategoriesForm()

  return (
    <form
      onSubmit={onSubmitForm}
      className={styles.container}
    >
      <div className={styles.input + ' groupInput'}>
        <input
          className='mainInput'
          onChange={onChangeInput}
          value={inputCategory}
          type='text'
          id='newCategory'
          placeholder=' '
          required
          disabled={loading}
        />
        <label
          htmlFor='newCategory'
          className='mainInput__label'
        >
          {t('categories.input')}
        </label>
      </div>
      <button
        type='submit'
        disabled={loading}
        className='mainButton'
      >
        {t('button.add')}
      </button>
    </form>
  )
}
