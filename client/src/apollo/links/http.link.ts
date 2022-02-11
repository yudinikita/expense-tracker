import { HttpLink } from '@apollo/client'
import { SERVER_URI } from '../../constants'

export const httpLink = new HttpLink({ uri: SERVER_URI })
