import React, { MouseEventHandler } from 'react'
import { AlertCustomOptionsWithType, positions, transitions } from 'react-alert'
import SVG from 'react-inlinesvg'
import styles from './MyAlert.module.scss'

export const optionsAlert = {
  position: positions.TOP_CENTER,
  timeout: 7000,
  offset: '15px',
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 5000
  }
}

const optionsByType = {
  info: {
    borderColor: 'var(--color-other-blue)',
    icon: 'question-circle'
  },
  error: {
    borderColor: 'var(--color-other-red)',
    icon: 'x-circle'
  },
  success: {
    borderColor: 'var(--color-other-green)',
    icon: 'tick-circle'
  }
}

interface Props {
  style: React.CSSProperties
  options: AlertCustomOptionsWithType
  message: string
  close: MouseEventHandler<HTMLDivElement>
}

export const MyAlert: React.FC<Props> = ({
  style,
  options,
  message,
  close
}) => {
  const optionsType = options.type ?? 'info'

  return (
    <div
      className={styles.alert}
      style={{
        borderColor: optionsByType[optionsType].borderColor,
        ...style
      }}
      onClick={close}
    >
      <div className={styles.container}>
        <div className={styles.icon}>
          <SVG
            src={`/images/icons/${optionsByType[optionsType].icon}.svg`}
            width='27'
            height='27'
          />
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
}
