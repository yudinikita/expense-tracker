import { getCurrentUser } from '../getCurrentUser.js'

describe('Utils/auth - current user:', () => {

  it('is defined', async () => {
    const currentUser = await getCurrentUser('')
    expect(currentUser).toBeDefined()
  })

  it('should return null', async () => {
    const currentUser = await getCurrentUser('not-valid-jwt')
    expect(currentUser).toBeNull()
  })

})
