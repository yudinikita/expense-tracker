import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Divider, Input, Space, Typography } from 'modules/ui'
import { useRegistrationForm } from './hooks'

export const RegistrationForm = () => {
  const { t } = useTranslation()

  const {
    formik,
    invalid,
    errors,
    handleLogin
  } = useRegistrationForm()

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
            autoComplete='new-password'
            validationText={errors.password}
            invalid={invalid.password}
            disabled={formik.isSubmitting}
            {...formik.getFieldProps('password')}
          />

          <Button
            type='submit'
            loading={formik.isSubmitting}
          >
            {t('button.signup')}
          </Button>
        </Space>
      </form>

      <Divider space={50} />

      <div>
        <Typography
          variant='p'
        >
          {t('other.Do you already have an account')}
        </Typography>
        <Button
          variant='outline'
          onClick={handleLogin}
          disabled={formik.isSubmitting}
        >
          {t('button.signin')}
        </Button>
      </div>
    </div>
  )
}
