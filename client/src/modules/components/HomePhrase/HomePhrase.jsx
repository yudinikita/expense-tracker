import React from 'react'
import PropTypes from 'prop-types'
import { useHomePhrase } from './hooks/useHomePhrase'

export const HomePhrase = ({ style }) => {
  const { phrase } = useHomePhrase()

  return (
    <p style={style}>
      {phrase}
    </p>
  )
}

HomePhrase.propTypes = {
  style: PropTypes.object,
  phrase: PropTypes.string,
}
