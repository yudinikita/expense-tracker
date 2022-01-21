import { HttpLink } from '@apollo/client'
import { SERVER_URI } from '../../constants'

const httpLink = new HttpLink({ uri: SERVER_URI })

export default httpLink
