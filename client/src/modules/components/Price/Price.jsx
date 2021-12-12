import React from 'react'
import PropTypes from 'prop-types'
import { SIGN_DISPLAY } from './constants'
import { usePrice } from './hooks'
import './Price.scss'

const propTypes = {
  amount: PropTypes.number,
  haveColor: PropTypes.bool,
  havePrefix: PropTypes.bool,
  signDisplay: PropTypes.oneOf([
    SIGN_DISPLAY.AUTO,
    SIGN_DISPLAY.NEVER,
    SIGN_DISPLAY.ALWAYS,
    SIGN_DISPLAY.EXCEPT_ZERO
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
}

const defaultProps = {
  haveColor: false,
  havePrefix: false,
  signDisplay: SIGN_DISPLAY.AUTO,
  title: ''
}

export const Price = ({
  amount,
  haveColor,
  havePrefix,
  signDisplay,
  className,
  style,
  title
}) => {
  const {
    formatAmount,
    defaultStyles,
    prefix
  } = usePrice(amount, signDisplay, haveColor)

  const activeClassName = 'price ' + className

  const renderPrefix = () => (havePrefix ? <span>{prefix}</span> : null)

  return (
    <span
      className={activeClassName}
      style={{ ...defaultStyles, ...style }}
      title={title}
    >
      {renderPrefix()} <span>{formatAmount}</span>
    </span>
  )
}

Price.propTypes = propTypes

Price.defaultProps = defaultProps
