import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'
import { useAlert } from 'react-alert'
import { CreateHelpInput, useCreateHelpMutation } from 'modules/graphql'

const initialValues: CreateHelpInput = {
  title: '',
  detail: ''
}

export const useHelpForm = () => {
  const { t } = useTranslation()
  const alert = useAlert()

  const validationSchema: yup.SchemaOf<CreateHelpInput> = yup.object({
    title: yup.string().min(6).required(),
    detail: yup.string().min(6).required(),
  })

  const [createHelp, { error }] = useCreateHelpMutation({
    refetchQueries: ['helps']
  })

  const onSubmit = async (values: CreateHelpInput) => {
    await createHelp({
      variables: {
        input: {
          ...values
        }
      }
    })

    alert.success(t('alert.help.add.success'))
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  const invalid = {
    title: formik.touched.title && Boolean(formik.errors.title),
    detail: formik.touched.detail && Boolean(formik.errors.detail),
  }

  const errors = {
    title: invalid.title ? formik.errors.title : '',
    detail: invalid.detail ? formik.errors.detail : '',
  }

  return {
    formik,
    errors,
    invalid,
    error
  }
}
