import { ChangeEventHandler, useContext, useState } from 'react'
import { CategoriesListItemContext } from '../../../context'
import { useValidationCategory } from '../../../../../../../hooks'
import { useAlert } from 'react-alert'
import { useUpdateCategoryMutation } from 'modules/graphql'
import { useTranslation } from 'react-i18next'

export const useEditingTemplate = () => {
  const { t } = useTranslation()
  const alert = useAlert()
  const { category, setEditing } = useContext(CategoriesListItemContext)
  const [editInput, setEditInput] = useState(category?.title)
  const { isValid, messageFailed } = useValidationCategory(editInput)

  const [updateCategory, { loading }] = useUpdateCategoryMutation({
    refetchQueries: ['categories']
  })

  const onChangeEditInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditInput(e.target.value)
  }

  const handleClickEditSave = async () => {
    if (isValid) {
      try {
        await updateCategory({
          variables: {
            id: category?.id,
            input: {
              title: editInput
            }
          }
        })
        alert.success(t('alert.category.edit.success'))
      } catch {
        alert.error(t('alert.data.notfound'))
      } finally {
        setEditing(false)
      }
    } else {
      alert.show(messageFailed)
    }
  }

  const handleClickEditCancel = () => {
    setEditInput(category?.title)
    setEditing(false)
  }

  return {
    handleClickEditSave,
    handleClickEditCancel,
    onChangeEditInput,
    editInput,
    loading
  }
}
