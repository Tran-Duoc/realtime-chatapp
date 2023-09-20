import { Response } from 'express'
import { ServerError } from '~/libs/errorHandler'

export const userControllers = {
  register: async (req: Request, res: Response) => {
    try {
      console.log(req.body)
    } catch (error) {
      return ServerError(res, error)
    }
  }
}
