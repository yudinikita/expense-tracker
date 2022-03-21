import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button, Icon, Space } from 'modules/ui'
import {
  BrushOutline,
  EnvelopeOutline,
  GridLayoutOutline,
  LockOutline,
  PinOutline,
  QuestionCircleOutline,
  RightOutline,
  SafeOutline
} from 'modules/assets/icons'
import s from './SettingsNavigate.module.scss'

export const SettingsNavigate: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Space direction='vertical'>
      {renderLinkItem(t(`categories.title`), GridLayoutOutline, '/categories')}
      {renderLinkItem(t(`settings.email.title`), EnvelopeOutline, 'email')}
      {renderLinkItem(t(`settings.security.title`), LockOutline, 'security')}
      {renderLinkItem(t(`settings.language.title`), PinOutline, 'language')}
      {renderLinkItem(t(`settings.currency.title`), SafeOutline, 'currency')}
      {renderLinkItem(t(`settings.theme.title`), BrushOutline, 'appearance')}
      {renderLinkItem(t(`help.title`), QuestionCircleOutline, '/help')}
    </Space>
  )
}

const renderLinkItem = (
  title: string,
  icon: string | React.ElementType,
  path: string
) => {

  const before = (
    <Icon
      className={s.before}
      icon={icon}
      iconSize={24}
    />
  )

  const after = (
    <Icon
      className={s.after}
      icon={RightOutline}
      iconSize={18}
    />
  )

  return (
    <NavLink
      to={path}
      title={title}
      end
    >
      <Button
        variant='default'
        size='medium'
        textAlign='left'
        before={before}
        after={after}
      >
        {title}
      </Button>
    </NavLink>
  )
}

