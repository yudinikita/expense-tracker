import React from 'react'
import { useHomePhrase } from './hooks/useHomePhrase'

interface Props {
  style: React.CSSProperties
}

export const HomePhrase = ({ style }: Props) => {
  const { phrase } = useHomePhrase()

  return (
    <p style={style}>
      {phrase}
    </p>
  )
}
