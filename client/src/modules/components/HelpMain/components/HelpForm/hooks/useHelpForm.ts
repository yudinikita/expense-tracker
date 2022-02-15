import { ChangeEventHandler, SyntheticEvent, useState } from 'react'
import { useAlert } from 'react-alert'
import { useCreateHelpMutation } from '../../../../../graphql/__generated__/graphql.gen'

const defaultDataForm = {
  problemTitle: '',
  problemDetail: ''
}

export const useHelpForm = () => {
  const alert = useAlert()
  const [dataForm, setDataForm] = useState(defaultDataForm)

  const [createHelp, { loading, error }] = useCreateHelpMutation({
    refetchQueries: ['helps']
  })

  const onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    const type = e.target.id
    const value = e.target.value

    switch (type) {
      case 'problemTitle':
        setDataForm({
          ...dataForm,
          problemTitle: value
        })
        break
      case 'problemDetail':
        setDataForm({
          ...dataForm,
          problemDetail: value
        })
        break
    }
  }

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    if (dataForm?.problemTitle?.length > 1) {
      await createHelp({
        variables: {
          input: {
            title: dataForm?.problemTitle,
            detail: dataForm?.problemDetail
          }
        }
      })
      setDataForm(defaultDataForm)
      alert.success('Вопрос добавлен')
    } else {
      alert.show('Введите суть проблемы')
    }
  }

  return {
    loading,
    error,
    onSubmit,
    onChange,
    dataForm
  }
}
