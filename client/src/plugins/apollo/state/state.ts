import { InMemoryCache } from '@apollo/client'

export const getApolloCache = async (): Promise<InMemoryCache> => {
  return new InMemoryCache()
}
