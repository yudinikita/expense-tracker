import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Divider, Input, Space, Typography } from 'modules/ui'
import { useLoginForm } from './hooks'

export const LoginForm = () => {
  const { t } = useTranslation()

  const {
    formik,
    invalid,
    errors,
    handleRegister
  } = useLoginForm()

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Space
          direction='vertical'
          size={25}
          blockItem
        >
          <Input
            label={t('settings.email.title')}
            id='email'
            type='email'
            autoComplete='email'
            inputMode='email'
            validationText={errors.email}
            invalid={invalid.email}
            disabled={formik.isSubmitting}
            {...formik.getFieldProps('email')}
          />

          <Input
            label={t('other.password')}
            id='password'
            type='password'
            autoComplete='current-password'
            validationText={errors.password}
            invalid={invalid.password}
            disabled={formik.isSubmitting}
            {...formik.getFieldProps('password')}
          />

          <Button
            type='submit'
            loading={formik.isSubmitting}
          >
            {t('button.signin')}
          </Button>
        </Space>
      </form>

      <Divider space={50} />

      <div>
        <Typography variant='p'>
          {t('other.You still do not have an account')}
        </Typography>
        <Button
          variant='outline'
          onClick={handleRegister}
          disabled={formik.isSubmitting}
        >
          {t('button.signup')}
        </Button>
      </div>
    </div>
  )
}
