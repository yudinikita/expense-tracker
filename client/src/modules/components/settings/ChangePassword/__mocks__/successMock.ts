import { MockedResponse } from '@apollo/client/testing'
import { UpdateUserPasswordDocument } from 'modules/graphql'

export const successMock: MockedResponse = {
  request: {
    query: UpdateUserPasswordDocument,
    variables: {
      input: {
        nowPassword: '123456',
        newPassword: '1234567'
      }
    }
  },
  result: {
    data: {
      updateUserPassword: {
        success: true,
        message: ''
      }
    }
  }
}
