import { ChangeEventHandler, SyntheticEvent, useState } from 'react'
import { useAlert } from 'react-alert'
import { useCreateHelpMutation } from '../../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

const defaultDataForm = {
  problemTitle: '',
  problemDetail: ''
}

export const useHelpForm = () => {
  const { t } = useTranslation()
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
      alert.success(t('alert.help.add.success'))
    } else {
      alert.show(t('alert.help.add.failed'))
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
