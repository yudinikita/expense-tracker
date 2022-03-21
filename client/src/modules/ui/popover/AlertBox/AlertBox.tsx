import React from 'react'
import { AlertComponentPropsWithStyle, AlertProviderProps, AlertType, positions, transitions } from 'react-alert'
import { Icon, Space, Typography } from 'modules/ui'
import s from './AlertBox.module.scss'
import { CheckCircleTwoTone, CloseCircleTwoTone, InfoCircleTwoTone } from 'modules/assets/icons'

/**
 *  Alert banners show pressing and high-signal messages,
 *  such as system alerts. They are meant to be noticed and prompt users to take action.
 *
 *  By `react-alert`
 */
export const AlertBox: React.ComponentType<AlertComponentPropsWithStyle> = ({
  style,
  options,
  message,
  close
}) => {
  const optionsType = options.type ?? 'info'

  const alertTitle = typeof message === 'string' ? message : ''

  const icon = getIcon(optionsType)

  return (
    <div
      className={s.alert}
      onClick={close}
      title={alertTitle}
      style={style}
    >
      <Space
        className={s.container}
        direction='horizontal'
        align='center'
        size={15}
      >
        <Icon
          icon={icon}
          iconSize={29}
        />

        {renderMessage(message)}
      </Space>
    </div>
  )
}

const renderMessage = (message: React.ReactNode) => (
  typeof message === 'string'
    ? <Typography className={s.message} variant='text'>{message}</Typography>
    : message
)

const getIcon = (type: AlertType): React.ElementType => {
  switch (type) {
    case 'info':
      return InfoCircleTwoTone
    case 'success':
      return CheckCircleTwoTone
    case 'error':
      return CloseCircleTwoTone
  }
}

export const optionsAlert: Omit<AlertProviderProps, 'template'> = {
  position: positions.TOP_CENTER,
  timeout: 7000,
  offset: '10px',
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 5000
  }
}
