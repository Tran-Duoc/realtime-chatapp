/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express'

import { ServerError, Unauthorize } from '~/libs/errorHandler'
import { DecodeToken } from '~/libs/utils'

interface IAuthor {
  user?: any
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] || req.headers.authorization
    console.log(token)
    const decoded = DecodeToken(token as string)
    if (!decoded) {
      return Unauthorize(res)
    } else {
      //@ts-ignore
      req.user = decoded
      next()
    }
  } catch (error: any) {
    return ServerError(res, error)
  }
}
