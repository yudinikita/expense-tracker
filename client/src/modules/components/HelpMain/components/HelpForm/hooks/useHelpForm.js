import { useState } from 'react'
import { useAlert } from 'react-alert'
import { useSetCreateHelp } from '../../../../../hooks'

const defaultDataForm = {
  problemTitle: '',
  problemDetail: ''
}

export const useHelpForm = () => {
  const alert = useAlert()
  const [dataForm, setDataForm] = useState(defaultDataForm)

  const { setCreateHelp, loading, error } = useSetCreateHelp()

  const onChange = (e) => {
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

  const onSubmit = async (e) => {
    e.preventDefault()
    if (dataForm?.problemTitle?.length > 1) {
      await setCreateHelp({
        variables: {
          helpInput: {
            title: dataForm?.problemTitle,
            detail: dataForm?.problemDetail,
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
