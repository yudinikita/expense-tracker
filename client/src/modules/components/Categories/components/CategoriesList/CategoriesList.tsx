import React from 'react'
import { useTranslation } from 'react-i18next'
import { ModalDeleteContext } from '../ModalDelete/context'
import { CategoriesListItem } from './components'
import { Space } from 'modules/ui'
import { ModalDelete } from '../ModalDelete'
import { useCategoriesList } from './hooks'
import { Category } from 'modules/graphql'
import s from './CategoriesList.module.scss'

interface Props {
  categories: Category[]
}

export const CategoriesList: React.FC<Props> = ({ categories }) => {
  const { t } = useTranslation()

  const {
    selectedCategory,
    modalIsOpen,
    selectCategory,
    openModal,
    closeModal
  } = useCategoriesList()

  return (
    <Space
      direction='vertical'
      size={0}
      block
      blockItem
    >
      <ul className='list-reset' style={{ width: '100%' }}>
        {categories.map(category => (
          <li key={category.id} className={s.listItem}>
            <CategoriesListItem
              category={category}
              openModalDelete={openModal}
              selectCategory={selectCategory}
            />
          </li>
        ))}
        {categories?.length === 0 && <p>{t('categories.not_found')}</p>}
      </ul>

      <ModalDeleteContext.Provider value={{
        onRequestClose: closeModal,
        selectedCategory: selectedCategory
      }}
      >
        <ModalDelete isOpen={modalIsOpen} />
      </ModalDeleteContext.Provider>
    </Space>
  )
}
