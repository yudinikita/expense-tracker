import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { Button, Icon, Space } from 'modules/ui'
import { useTranslation } from 'react-i18next'
import { CogOutline, HomeOutline, PieChartOutline, WalletAltOutline } from 'modules/assets/icons'
import s from './Footer.module.scss'

export const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Space
      justify='evenly'
      block
      className={s.container}
    >
      {renderLinkItem(t('home.title'), HomeOutline, '/')}
      {renderLinkItem(t('transactions.title'), WalletAltOutline, '/transactions')}
      {renderLinkItem(t('analytics.title'), PieChartOutline, '/analytics')}
      {renderLinkItem(t('settings.title'), CogOutline, '/settings')}
    </Space>
  )
}

const renderLinkItem = (
  title: string,
  iconType: React.ElementType,
  path: string
) => {

  return (
    <NavLink
      to={path}
      title={title}
      className={({ isActive }) => classNames(s.link, { [s.active]: isActive })}
    >
      <Button
        variant='invisible'
        iconButton={<Icon icon={iconType} iconSize={24} />}
      />
    </NavLink>
  )
}
