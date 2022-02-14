import { ChangeEventHandler, SyntheticEvent, useState } from 'react'
import { useValidationCategory } from '../../../hooks'
import { useAlert } from 'react-alert'
import { useCreateCategoryMutation } from '../../../../../graphql/__generated__/graphql.gen'

export const useCategoriesForm = () => {
  const alert = useAlert()
  const [inputCategory, setInputCategory] = useState('')
  const { isValid, messageFailed } = useValidationCategory(inputCategory)

  const [createCategory, { loading }] = useCreateCategoryMutation({
    refetchQueries: ['categories']
  })

  const onSubmitForm = async (e: SyntheticEvent) => {
    e.preventDefault()

    if (isValid) {
      try {
        await createCategory({
          variables: {
            input: {
              title: inputCategory
            }
          }
        })
        alert.success('Категория добавлена')
      } catch (e) {
        alert.error('Не удалось создать категорию')
      } finally {
        setInputCategory('')
      }
    } else {
      alert.show(messageFailed)
    }
  }

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = async (e) => {
    setInputCategory(e.target.value)
  }

  return {
    onSubmitForm,
    onChangeInput,
    loading,
    inputCategory
  }
}
