import React, { useEffect, useState } from 'react'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { getApolloClient } from './apollo.client'
import { Loaders } from 'modules/ui'

export const MainApolloProvider: React.FC = ({ children }) => {
  const [client, setClient] = useState<ApolloClient<any> | null>(null)

  useEffect(() => {
    getApolloClient().then((client) => {
      setClient(client)
    })
  }, [])

  if (!client) {
    return <Loaders variant='circular' />
  }

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
