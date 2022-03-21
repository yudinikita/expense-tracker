import * as yup from 'yup'
import { useFormik } from 'formik'
import { UserPasswordInput, useUpdateUserPasswordMutation } from 'modules/graphql'
import { useTranslation } from 'react-i18next'
import { useAlert } from 'react-alert'

const initialValues: UserPasswordInput = {
  nowPassword: '',
  newPassword: ''
}

export const useChangePassword = () => {
  const { t } = useTranslation()
  const alert = useAlert()

  const passwordSchema = yup.string().min(6).required()

  const validationSchema: yup.SchemaOf<UserPasswordInput> = yup.object({
    nowPassword: passwordSchema,
    newPassword: passwordSchema
  })

  const [updateUserPassword] = useUpdateUserPasswordMutation()

  const onSubmit = async (values: UserPasswordInput) => {
    const response = await updateUserPassword({
      variables: {
        input: {
          ...values
        }
      }
    })

    const successResponse = response?.data?.updateUserPassword?.success

    if (successResponse) {
      alert.success(t('alert.password.update.success'))
    } else {
      alert.error(t('alert.password.update.failed'))
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  const invalid = {
    nowPassword: formik.touched.nowPassword && Boolean(formik.errors.nowPassword),
    newPassword: formik.touched.newPassword && Boolean(formik.errors.newPassword),
  }

  const errors = {
    nowPassword: invalid.nowPassword ? formik.errors.nowPassword : '',
    newPassword: invalid.newPassword ? formik.errors.newPassword : '',
  }

  return {
    formik,
    errors,
    invalid
  }
}
