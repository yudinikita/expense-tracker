import React from 'react'
import { useCategoriesForm } from './hooks/useCategoriesForm'
import styles from './CategoriesForm.module.scss'

export const CategoriesForm = () => {
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
          Новая категория
        </label>
      </div>
      <button
        type='submit'
        disabled={loading}
        className='mainButton'
      >
        Добавить
      </button>
    </form>
  )
}
