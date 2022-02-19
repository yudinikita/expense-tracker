import React, { useContext } from 'react'
import { useFormDeleteReplace } from './hooks'
import { ModalDeleteContext } from '../../context'
import { useTranslation } from 'react-i18next'

export const FormDeleteReplace = () => {
  const { t } = useTranslation()
  const { selectedCategory } = useContext(ModalDeleteContext)

  const {
    categories,
    onReplaceSelect,
    clickDeleteReplace,
    loading
  } = useFormDeleteReplace()

  return (
    <div>
      <p>{t('categories.modaldelete.desc.replace')}</p>

      <div className='groupInput'>
        <select
          className='mainInput'
          onChange={onReplaceSelect}
          defaultValue=''
          disabled={loading}
        >
          <option disabled value='' hidden>{t('categories.select')}</option>
          {categories
            .filter(category => category?.title !== selectedCategory?.title)
            .map(category => (
              <option
                key={category.id}
                value={category?.id}
              >
                {category?.title}
              </option>
            ))}
        </select>
        <label
          className='mainInput__label'
          htmlFor='createdAt'
        >
          {t('categories.input')}
        </label>
      </div>
      <br />

      <button
        className='mainButton'
        type='button'
        onClick={clickDeleteReplace}
        disabled={loading}
      >
        {t('categories.modaldelete.btn.replace')}
      </button>
      <br /><br />
    </div>
  )
}
