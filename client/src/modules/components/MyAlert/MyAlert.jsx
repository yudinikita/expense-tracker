import React from 'react'
import PropTypes from 'prop-types'
import { positions, transitions } from 'react-alert'
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

export const MyAlert = ({ style, options, message, close }) => {
  return (
    <div
      className={styles.alert}
      style={{
        borderColor: optionsByType[options?.type].borderColor,
        ...style
      }}
      onClick={close}
    >
      <div className={styles.container}>
        <div className={styles.icon}>
          <SVG
            src={`/images/icons/${optionsByType[options?.type].icon}.svg`}
            width='27'
            height='27'
          />
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
}

MyAlert.propTypes = {
  style: PropTypes.object,
  options: PropTypes.object,
  message: PropTypes.string,
  close: PropTypes.func,
}

