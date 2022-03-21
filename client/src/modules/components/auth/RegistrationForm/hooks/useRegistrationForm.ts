import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useSignIn } from 'react-auth-kit'
import { useAlert } from 'react-alert'
import { useTranslation } from 'react-i18next'
import { useRegistrationMutation, UserRegistrationInput } from 'modules/graphql'

const initialValues: UserRegistrationInput = {
  email: '',
  password: ''
}

export const useRegistrationForm = () => {
  const { t } = useTranslation()
  const signIn = useSignIn()
  const navigate = useNavigate()
  const alert = useAlert()

  const validationSchema: yup.SchemaOf<UserRegistrationInput> = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  })

  const [registrationUser] = useRegistrationMutation()

  const onSubmit = async (values: UserRegistrationInput) => {
    const res = await registrationUser({
      variables: {
        input: {
          ...values
        }
      }
    })

    const registerData = res?.data?.registration

    if (!registerData?.success && registerData?.message) {
      alert.error(t(registerData.message))
    }

    if (registerData?.success && registerData?.tokens && registerData?.user) {
      signIn({
        token: registerData.tokens.accessToken,
        expiresIn: registerData.tokens.expiresIn,
        tokenType: registerData.tokens.tokenType,
        authState: {
          userId: registerData.user.id,
          isActivated: registerData.user.isActivated,
          email: registerData.user.email
        }
      })

      navigate('/')
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

  const handleLogin = () => navigate('/login')

  return {
    formik,
    invalid,
    errors,
    handleLogin
  }
}
