import { Response, Request } from 'express'
import { Ok, ServerError } from '~/libs/errorHandler'

export const registerUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    console.log(req.body)
    return Ok(res, 'ok')
  } catch (error) {
    return ServerError(res, error)
  }
}
