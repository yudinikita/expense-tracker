import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Icon, Link, Space } from 'modules/ui'
import { AddOutline, LogoFill } from 'modules/assets/icons'
import s from './Header.module.scss'

export const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Space
      className={s.container}
      align='center'
      justify='between'
      block
    >
      <Link href='/' route>
        <Button
          className={s.logo}
          variant='invisible'
          iconButton={<Icon icon={LogoFill} title={t('logo.title')} />}
        />
      </Link>
      <Link
        className={s.addLink}
        title={t('transactions.add')}
        href='/transactions/create'
        route
      >
        <Button
          className={s.addButton}
          iconButton={<Icon icon={AddOutline} iconSize={24} />}
          variant='invisible'
        />
      </Link>
    </Space>
  )
}
