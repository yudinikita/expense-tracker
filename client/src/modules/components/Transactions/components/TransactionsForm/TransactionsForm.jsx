import React from 'react'
import PropTypes from 'prop-types'
import { useTransactionsForm, useUpdateTransaction } from './hooks'
import styles from './TransactionsForm.module.scss'
import { useCreateTransaction } from './hooks/useCreateTransaction'

const propTypes = {
  transaction: PropTypes.object,
}

export const TransactionsForm = ({
  transaction
}) => {
  const { onChange, categories, dataForm } = useTransactionsForm(transaction)
  const { handleClickCreate, createLoading } = useCreateTransaction(dataForm)
  const { handleClickUpdate, handleClickCancel, updateLoading } = useUpdateTransaction(dataForm, transaction)

  const renderBtnCreate = () => (
    <button
      className='mainButton'
      type='submit'
      disabled={createLoading}
      name='createTransaction'
      onClick={handleClickCreate}
    >
      Создать
    </button>
  )

  const renderBtnEdit = () => (
    <>
      <button
        className='mainButton'
        type='submit'
        disabled={updateLoading}
        name='updateTransaction'
        onClick={handleClickUpdate}
      >
        Сохранить
      </button>
      <br />
      <button
        className='secondaryButton'
        type='button'
        disabled={updateLoading}
        name='cancel'
        onClick={handleClickCancel}
      >
        Отменить
      </button>
    </>
  )

  return (
    <form
      className={styles.form}
      name='createTransaction'
    >
      <div className={`${styles.input} groupCheckbox`}>
        <div className='checkbox'>
          <input
            type='radio'
            name='createTransaction'
            id='expense'
            onChange={onChange}
            checked={dataForm?.expense}
          />
          <label htmlFor='expense'>Расход</label>
        </div>

        <div className='checkbox'>
          <input
            type='radio'
            name='createTransaction'
            id='income'
            onChange={onChange}
            checked={dataForm?.income}
          />
          <label htmlFor='income'>Доход</label>
        </div>
      </div>

      <div className={`${styles.input} groupInput`}>
        <input
          className='mainInput'
          type='text'
          inputMode='numeric'
          name='createTransaction'
          id='amount'
          placeholder=' '
          onChange={onChange}
          pattern='(?!0+)\d+'
          required
          title='Целое число не равное нулю'
          value={dataForm?.amount}
        />
        <label
          className='mainInput__label'
          htmlFor='amount'
        >
          Сумма
        </label>
      </div>

      <div className={`${styles.input} groupInput`}>
        <select
          className='mainInput'
          id='category'
          name='createTransaction'
          onChange={onChange}
          required
          placeholder=' '
          value={dataForm?.category}
        >
          <option disabled value='' hidden>Выберите категорию</option>
          {categories && categories.map(category => (
            <option
              key={category.id}
              value={category?.id}
            >
              {category?.title}
            </option>
          ))}
          <option value='create'>Создать категорию</option>
        </select>
        <label
          className='mainInput__label'
          htmlFor='category'
        >
          Категория
        </label>
      </div>

      <div className={`${styles.input} groupInput`}>
        <input
          className='mainInput'
          type='datetime-local'
          name='createTransaction'
          id='createdAt'
          step='1'
          onChange={onChange}
          placeholder=' '
          value={dataForm?.createdAt}
        />
        <label
          className='mainInput__label'
          htmlFor='createdAt'
        >
          Дата
        </label>
      </div>

      <div className={`${styles.input} groupInput`}>
        <textarea
          className={styles.commentary + ' mainInput'}
          rows='4'
          name='createTransaction'
          id='commentary'
          onChange={onChange}
          value={dataForm?.commentary}
          placeholder=' '
        />
        <label
          className='mainInput__label'
          htmlFor='commentary'
        >
          Комментарий
        </label>
      </div>

      {transaction ? renderBtnEdit() : renderBtnCreate()}
    </form>
  )
}

TransactionsForm.propTypes = propTypes
