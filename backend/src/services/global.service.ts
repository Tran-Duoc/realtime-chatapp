import { Response } from 'express'
import { BadRequest, Created, NotFound, Ok, ServerError } from '~/libs/errorHandler'
import { userSchema } from '~/models/user.model'

export const exit = (argument: object) => {
  return userSchema.findOne(argument)
}

export const find = async <T extends keyof User>(res: Response, entity?: T) => {
  try {
    const user = await userSchema.find({ entity })
    return Ok(res, user)
  } catch (error) {
    return ServerError(res, error)
  }
}

export const find_one = async (res: Response, argument: object) => {
  const user = await userSchema.findOne(argument)
  return user
}
