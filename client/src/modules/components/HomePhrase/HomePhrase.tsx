import React from 'react'
import { useHomePhrase } from './hooks/useHomePhrase'

interface Props {
  style: React.CSSProperties
}

export const HomePhrase: React.FC<Props> = ({ style }) => {
  const { phrase } = useHomePhrase()

  return (
    <p style={style}>
      {phrase}
    </p>
  )
}
