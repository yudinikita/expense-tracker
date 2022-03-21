import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthUser, useSignIn } from 'react-auth-kit'
import { useTranslation } from 'react-i18next'
import { useAlert } from 'react-alert'
import * as yup from 'yup'
import { useActivateMutation, UserActivateInput } from 'modules/graphql'
import { AUTH } from 'modules/constants'
import { useFormik } from 'formik'

const initialValues: UserActivateInput = {
  code: ''
}

export const useActivationForm = () => {
  const { t } = useTranslation()
  const auth = useAuthUser()
  const signIn = useSignIn()
  const alert = useAlert()

  const validationSchema: yup.SchemaOf<UserActivateInput> = yup.object({
    code: yup.string().min(AUTH.ACTIVATION_CODE.LENGTH).required()
  })

  const email = auth()?.['email'] ?? ''
  const activationCodeFromLink = useParams()?.['code']?.toString()

  const [activateUser] = useActivateMutation()

  useEffect(() => {
    if (activationCodeFromLink) {
      const getAuthUser = async () => {
        await authUser(activationCodeFromLink)
      }

      getAuthUser().catch(console.error)
    }
  }, [activationCodeFromLink])

  const authUser = async (code: string) => {
    const response = await activateUser({
      variables: {
        input: {
          code
        }
      }
    })

    const activateData = response?.data?.activate

    if (!activateData?.success && activateData?.message) {
      alert.error(t(activateData.message))
    }

    if (activateData?.success && activateData?.tokens && activateData?.user) {
      signIn({
        token: activateData.tokens.accessToken,
        expiresIn: activateData.tokens.expiresIn,
        tokenType: activateData.tokens.tokenType,
        authState: {
          userId: activateData.user.id,
          isActivated: activateData.user.isActivated,
          email: activateData.user.email
        }
      })
    }
  }

  const onSubmit = async (values: UserActivateInput) => {
    await authUser(values?.code)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  const invalid = {
    code: formik.touched.code && Boolean(formik.errors.code)
  }

  const errors = {
    code: invalid.code ? formik.errors.code : ''
  }

  return {
    formik,
    invalid,
    errors,
    email
  }
}
