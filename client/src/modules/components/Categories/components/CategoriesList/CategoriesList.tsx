import React from 'react'
import { ModalDeleteContext } from '../ModalDelete/context'
import { CategoriesListItem } from './components'
import { ModalDelete } from '../ModalDelete'
import { useCategoriesList } from './hooks'
import styles from './CategoriesList.module.scss'
import { Category } from '../../../../graphql/__generated__/graphql.gen'

type Props = {
  categories: Category[]
}

export const CategoriesList: React.FC<Props> = ({ categories }) => {
  const {
    selectedCategory,
    modalIsOpen,
    selectCategory,
    openModal,
    closeModal
  } = useCategoriesList()

  return (
    <div className={styles.container}>
      <ul className='list-reset'>
        {categories.map(category => (
          <li key={category.id} className={styles.listItem}>
            <CategoriesListItem
              category={category}
              openModalDelete={openModal}
              selectCategory={selectCategory}
            />
          </li>
        ))}
        {categories?.length === 0 && <p>Категорий не найдено</p>}
      </ul>

      <ModalDeleteContext.Provider value={{
        onRequestClose: closeModal,
        selectedCategory: selectedCategory
      }}>
        <ModalDelete isOpen={modalIsOpen} />
      </ModalDeleteContext.Provider>
    </div>
  )
}
