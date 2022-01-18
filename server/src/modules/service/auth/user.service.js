const bcrypt = require('bcrypt')
const UserModel = require('../../models/User')
const MailService = require('./mail.service')
const TokenService = require('./token.service')
const CategoryService = require('../category.service')
const UserDto = require('../../dtos/user.dto')
const { getHashedPassword, getActivationCode, getPasswordConfirmation } = require('../../utils/auth')

class UserService {

  async registration (email, password) {
    const candidate = await UserModel.findOne({ email })

    if (candidate) {
      throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
    }

    const hashedPassword = await getHashedPassword(password)

    const activationCode = await getActivationCode()

    const user = await UserModel.create({
      email,
      password: hashedPassword,
      activationCode
    })

    await MailService.sendActivationMail(email, activationCode)

    const userDto = new UserDto(user)

    const tokens = await TokenService.generateToken({ ...userDto })

    await CategoryService.createDefaultCategories(userDto.id)

    return { ...tokens, user: userDto }
  }

  async login (email, password) {
    const user = await UserModel.findOne({ email })

    if (!user) {
      throw new Error(`Пользователь с почтовым адресом ${email} не найден`)
    }

    const isPassConfirm = await getPasswordConfirmation(password, user.password)
    if (!isPassConfirm) {
      throw new Error(`Неверный пароль`)
    }

    const userDto = new UserDto(user)

    const tokens = await TokenService.generateToken({ ...userDto })

    return { ...tokens, user: userDto }
  }

  async activate (userId, activationCode) {
    const user = await UserModel.findOne({ _id: userId })

    if (user.activationCode !== activationCode) {
      throw new Error('Некорректный код активации')
    }

    user.isActivated = true

    await user.save()

    const userDto = new UserDto(user)

    const tokens = await TokenService.generateToken({ ...userDto })

    return { ...tokens, user: userDto }
  }

  async getUserSettings (userId) {
    const user = await UserModel.findOne({ _id: userId })
    return user?.settings || {}
  }

  async updateUserSettings (userId, settings) {
    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $set: { settings } },
      { returnOriginal: false }
    )
    return user?.settings || {}
  }

  async updateUserPassword (userId, userPasswordInput) {
    const { nowPassword, newPassword } = userPasswordInput

    const user = await UserModel.findOne({ _id: userId })

    const isPassEquals = await bcrypt.compare(nowPassword, user?.password)
    if (!isPassEquals) return { success: false, message: 'Текущий пароль указан не верно' }

    const hashedNewPassword = await bcrypt.hash(newPassword, await bcrypt.genSalt(10))

    await UserModel.findOneAndUpdate(
      { _id: userId },
      { $set: { password: hashedNewPassword } }
    )

    return {
      success: true,
      message: 'Новый пароль сохранен'
    }
  }

}

module.exports = new UserService()
