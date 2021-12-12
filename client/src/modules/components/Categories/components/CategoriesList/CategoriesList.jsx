import React from 'react'
import PropTypes from 'prop-types'
import { ModalDeleteContext } from '../ModalDelete/context'
import { CategoriesListItem } from './components'
import { ModalDelete } from '../ModalDelete'
import { useCategoriesList } from './hooks'
import styles from './CategoriesList.module.scss'

export const CategoriesList = ({ categories }) => {
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

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object)
}
