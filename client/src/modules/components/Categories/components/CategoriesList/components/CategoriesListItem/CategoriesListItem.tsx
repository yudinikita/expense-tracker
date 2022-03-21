import React, { useState } from 'react'
import { Category } from 'modules/graphql'
import { CategoriesListItemContext } from './context'
import { EditingTemplate, ViewTemplate } from './components'
import s from './CategoriesListItem.module.scss'

interface Props {
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
      <div className={s.item}>
        {renderTemplate()}
      </div>
    </CategoriesListItemContext.Provider>
  )
}
