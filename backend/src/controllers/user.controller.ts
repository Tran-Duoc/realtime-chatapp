import { Response, Request } from 'express'
import { BadRequest, NotFound, Ok, ServerError } from '~/libs/errorHandler'
import { comparePassword, hashPassword } from '~/libs/utils'
import { exit } from '~/services/global.service'
import { Login, Register } from '~/services/user.service'

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, phone, password } = req.body
    const hash_password = await hashPassword(password)
    const data = {
      name: name,
      phone: phone,
      password: hash_password
    }
    Register(res, data)
  } catch (error) {
    return ServerError(res, error)
  }
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { phone, password } = req.body
    const exitUser = await exit({ phone })
    if (!exitUser) {
      return BadRequest(res, 'user does not exit!!')
    } else {
      const compare_password = await comparePassword(password, exitUser.password)
      if (!compare_password) {
        return BadRequest(res, 'password invalid!!')
      } else {
        Login(res, exitUser)
      }
    }
  } catch (error) {
    return ServerError(res, error)
  }
}
