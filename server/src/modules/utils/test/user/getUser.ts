import { User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { UserModel } from '../../../models/index.js'
import { getHashedPassword } from '../../auth/index.js'
import { generateToken } from '../../../service/token/index.js'
import { testUserInput } from '../user/index.js'

export const getUser = async (): Promise<User> => {
  let user: User

  user = await UserModel.findOne({ email: testUserInput.email })

  const hashedPassword = await getHashedPassword(testUserInput.password)

  if (user === null) {
    user = await UserModel.create({ ...testUserInput, password: hashedPassword })
  }

  const accessToken = await generateToken({ ...user })

  return {
    id: user.id,
    email: user.email,
    isActivated: true,
    settings: user.settings,
    accessToken
  }
}
