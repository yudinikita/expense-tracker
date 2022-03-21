import { MockedResponse } from '@apollo/client/testing'
import { UpdateUserPasswordDocument } from 'modules/graphql'

export const failedMock: MockedResponse = {
  request: {
    query: UpdateUserPasswordDocument,
    variables: {
      input: {
        nowPassword: '123456789',
        newPassword: '123456789'
      }
    }
  },
  result: {
    data: {
      updateUserPassword: {
        success: false,
        message: ''
      }
    }
  }
}
