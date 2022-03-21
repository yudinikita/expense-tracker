import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Divider, Icon, Typography } from 'modules/ui'
import { useStartMain } from './hooks'
import { LogoFill } from 'modules/assets/icons'
import s from './StartMain.module.scss'

export const StartMain = () => {
  const { t } = useTranslation()
  const { handleSignUp, handleSignIn } = useStartMain()

  return (
    <div className={s.container}>
      <Icon
        className={s.logo}
        icon={LogoFill}
        iconSize={116}
      />

      <Typography
        className={s.title}
        variant='h1'
      >
        {t('app.name')}
      </Typography>

      <Typography
        className={s.text}
        variant='text'
        fontSize={16}
      >
        {t('app.desc')}
      </Typography>

      <Button
        variant='primary'
        onClick={handleSignUp}
      >
        {t('button.signup')}
      </Button>

      <Divider
        variant='invisible'
        space={[0, 15]}
      />

      <Button
        variant='invisible'
        onClick={handleSignIn}
      >
        {t('button.signin')}
      </Button>
    </div>
  )
}
