class UserDto {
  email
  id
  isActivated
  settings

  constructor (model: any) {
    this.email = model.email
    this.id = model._id
    this.isActivated = model.isActivated
    this.settings = model.settings
  }
}

export default UserDto
