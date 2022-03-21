import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useSignIn } from 'react-auth-kit'
import { useAlert } from 'react-alert'
import { useTranslation } from 'react-i18next'
import { useLoginMutation, UserLoginInput } from 'modules/graphql'

const initialValues: UserLoginInput = {
  email: '',
  password: ''
}

export const useLoginForm = () => {
  const { t } = useTranslation()
  const signIn = useSignIn()
  const navigate = useNavigate()
  const alert = useAlert()

  const validationSchema: yup.SchemaOf<UserLoginInput> = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  })

  const [loginUser] = useLoginMutation()

  const onSubmit = async (values: UserLoginInput) => {
    const response = await loginUser({
      variables: {
        input: {
          ...values
        }
      }
    })

    const loginData = response?.data?.login

    if (!loginData?.success && loginData?.message) {
      alert.error(t(loginData.message))
    }

    if (loginData?.success && loginData?.tokens && loginData?.user) {
      signIn({
        token: loginData.tokens.accessToken,
        expiresIn: loginData.tokens.expiresIn,
        tokenType: loginData.tokens.tokenType,
        authState: {
          userId: loginData.user.id,
          isActivated: loginData.user.isActivated,
          email: loginData.user.email
        }
      })
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  const invalid = {
    email: formik.touched.email && Boolean(formik.errors.email),
    password: formik.touched.password && Boolean(formik.errors.password),
  }

  const errors = {
    email: invalid.email ? formik.errors.email : '',
    password: invalid.password ? formik.errors.password : '',
  }

  const handleRegister = () => navigate('/registration')

  return {
    formik,
    invalid,
    errors,
    handleRegister
  }
}
