import React from 'react'
import { useTransactionsForm, useUpdateTransaction } from './hooks'
import styles from './TransactionsForm.module.scss'
import { useCreateTransaction } from './hooks/useCreateTransaction'
import { Transaction } from '../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

interface Props {
  transaction?: Transaction
}

export const TransactionsForm: React.FC<Props> = ({ transaction }) => {
  const { t } = useTranslation()
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
      {t('button.create')}
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
        {t('button.save')}
      </button>
      <br />
      <button
        className='secondaryButton'
        type='button'
        disabled={updateLoading}
        name='cancel'
        onClick={handleClickCancel}
      >
        {t('button.cancel')}
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
          <label htmlFor='expense'>
            {t('analytics.balance.expense')}
          </label>
        </div>

        <div className='checkbox'>
          <input
            type='radio'
            name='createTransaction'
            id='income'
            onChange={onChange}
            checked={dataForm?.income}
          />
          <label htmlFor='income'>
            {t('analytics.balance.income')}
          </label>
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
          title={t('transactions.form.amount.hint')}
          value={dataForm?.amount}
        />
        <label
          className='mainInput__label'
          htmlFor='amount'
        >
          {t('transactions.form.amount.title')}
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
          <option disabled value='' hidden>{t('categories.select')}</option>
          {categories && categories.map(category => (
            <option
              key={category?.id}
              value={category?.id}
            >
              {category?.title}
            </option>
          ))}
          <option value='create'>{t('transactions.form.categories.create')}</option>
        </select>
        <label
          className='mainInput__label'
          htmlFor='category'
        >
          {t('transactions.form.categories.title')}
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
          {t('transactions.form.date.title')}
        </label>
      </div>

      <div className={`${styles.input} groupInput`}>
        <textarea
          className={styles.commentary + ' mainInput'}
          rows={4}
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
          {t('transactions.form.commentary.title')}
        </label>
      </div>

      {(transaction != null) ? renderBtnEdit() : renderBtnCreate()}
    </form>
  )
}
