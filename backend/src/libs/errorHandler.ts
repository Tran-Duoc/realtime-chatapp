import { Response } from 'express'

const ResponseData = <T>(res: Response, statusCode: number, data: T) => {
  return res.status(statusCode).json(data)
}

export const ServerError = <T>(res: Response, error: T) => {
  return ResponseData(res, 500, {
    success: false,
    error: error
  })
}

export const NotFound = (res: Response) => {
  return ResponseData(res, 404, {
    success: false,
    message: 'Element not found'
  })
}

export const Created = <T>(res: Response, data: T) => {
  return ResponseData(res, 201, {
    success: true,
    data: data
  })
}

export const Ok = <T>(res: Response, data: T) => {
  return ResponseData(res, 200, {
    success: true,
    data: data
  })
}

export const BadRequest = <T>(res: Response, message: T) => {
  return ResponseData(res, 400, {
    success: false,
    message: message
  })
}

export const Unauthorize = (res: Response) => {
  return ResponseData(res, 401, {
    success: false,
    message: 'unauthorize'
  })
}
