import { Response, Request } from 'express'
import { BadRequest, NotFound, Ok, ServerError } from '~/libs/errorHandler'
import { hashPassword } from '~/libs/utils'
import { save } from '~/services/user.service'

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body
    const hash_password = await hashPassword(password)
    const data = {
      name: name,
      email: email,
      password: hash_password
    }
    save(res, data)
  } catch (error) {
    return ServerError(res, error)
  }
}




