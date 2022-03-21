import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Divider, Input, Lottie, Typography } from 'modules/ui'
import { useActivationForm } from './hooks'
import s from './ActivationForm.module.scss'

import mailSend from 'modules/assets/animation/mailSend.json'

export const ActivationForm = () => {
  const { t } = useTranslation()
  const { formik, invalid, errors, email } = useActivationForm()

  return (
    <div>
      <div className={s.content}>
        <Lottie play loop animationData={mailSend} speed={0.5} />
      </div>

      <Typography
        variant='p'
        textAlign='center'
      >
        {t('other.activation_desc')}
      </Typography>

      <Typography
        variant='p'
        textAlign='center'
        type='strong'
      >
        {email}
      </Typography>

      <Divider space={[0, 15]} />

      <form onSubmit={formik.handleSubmit}>
        <Input
          label={t('other.activation_code')}
          id='activationCode'
          autoComplete='one-time-code'
          inputMode='numeric'
          autoFocus
          validationText={errors.code}
          invalid={invalid.code}
          disabled={formik.isSubmitting}
          {...formik.getFieldProps('code')}
        />

        <Divider space={10} />

        <Button
          type='submit'
          loading={formik.isSubmitting}
        >
          {t('button.send')}
        </Button>
      </form>
    </div>
  )
}
