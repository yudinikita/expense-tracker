import React, { useContext } from 'react'
import { useFormDeleteReplace } from './hooks'
import { ModalDeleteContext } from '../../context'

export const FormDeleteReplace = () => {
  const { selectedCategory } = useContext(ModalDeleteContext)

  const {
    categories,
    onReplaceSelect,
    clickDeleteReplace,
    loading
  } = useFormDeleteReplace()

  return (
    <div>
      <p>Удалить категорию и заменить на:</p>

      <div className='groupInput'>
        <select
          className='mainInput'
          onChange={onReplaceSelect}
          defaultValue={''}
          disabled={loading}
        >
          <option disabled value='' hidden>Выберите категорию</option>
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
          Новая категория
        </label>
      </div>
      <br />

      <button
        className='mainButton'
        type='button'
        onClick={clickDeleteReplace}
        disabled={loading}
      >
        Заменить
      </button>
      <br /><br />
    </div>
  )
}
