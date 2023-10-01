import bcrypt from 'bcrypt'
import { sign, verify } from 'jsonwebtoken'

export const hashPassword = async (password: string) => {
  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  return await bcrypt.hash(password, salt)
}

export const comparePassword = async (currentPassword: string, passwordEncrypt: string) => {
  return await bcrypt.compare(currentPassword, passwordEncrypt)
}

export const SignToken = (payload: object) => {
  const secret_key = process.env.TOKEN_SECRET_KEY as string
  console.log(secret_key)
  return sign(payload, secret_key, { expiresIn: '1d' })
}

export const SignRefreshToken = (payload: object) => {
  const secret_key = process.env.TOKEN_SECRET_KEY as string
  console.log(secret_key)
  return sign(payload, secret_key)
}

export const DecodeToken = (token: string) => {
  const secret_key = process.env.TOKEN_SECRET_KEY as string
  return verify(token, secret_key)
}
