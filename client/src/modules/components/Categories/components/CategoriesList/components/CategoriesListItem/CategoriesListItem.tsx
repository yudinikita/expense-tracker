import React, { useState } from 'react'
import { CategoriesListItemContext } from './context'
import { EditingTemplate, ViewTemplate } from './components'
import styles from './CategoriesListItem.module.scss'
import { Category } from '../../../../../../graphql/__generated__/graphql.gen.js'

type Props = {
  category: Category
  openModalDelete: Function
  selectCategory: (category: Category) => void
}

export const CategoriesListItem: React.FC<Props> = ({
  category,
  openModalDelete,
  selectCategory
}) => {
  const [isEditing, setEditing] = useState(false)

  const renderTemplate = () => isEditing ? <EditingTemplate /> : <ViewTemplate />

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
        {renderTemplate()}
      </div>
    </CategoriesListItemContext.Provider>
  )
}
