module.exports = class UserDto {
  email
  id
  isActivated
  settings

  constructor (model) {
    this.email = model.email
    this.id = model._id
    this.isActivated = model.isActivated
    this.settings = model.settings
  }

}
