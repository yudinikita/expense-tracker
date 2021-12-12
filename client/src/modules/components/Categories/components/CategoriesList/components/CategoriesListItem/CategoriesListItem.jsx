import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CategoriesListItemContext } from './context'
import { EditingTemplate, ViewTemplate } from './components'
import styles from './CategoriesListItem.module.scss'

export const CategoriesListItem = ({ category, openModalDelete, selectCategory }) => {
  const [isEditing, setEditing] = useState(false)

  return (
    <CategoriesListItemContext.Provider
      value={{
        category,
        setEditing,
        openModalDelete,
        selectCategory
      }}
    >
      <div className={styles.item}>
        {isEditing ? <EditingTemplate /> : <ViewTemplate />}
      </div>
    </CategoriesListItemContext.Provider>
  )
}

CategoriesListItem.propTypes = {
  category: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    __typename: PropTypes.string,
  }),
  openModalDelete: PropTypes.func,
  selectCategory: PropTypes.func,
}
