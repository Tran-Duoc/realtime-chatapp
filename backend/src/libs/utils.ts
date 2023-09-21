import bcrypt from 'bcrypt'

export const hashPassword = async (password: string) => {
  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  return await bcrypt.hash(password, salt)
}

export const comparePassword = async (currentPassword: string, passwordEncrypt: string) => {
  return await bcrypt.compare(currentPassword, passwordEncrypt)
}
