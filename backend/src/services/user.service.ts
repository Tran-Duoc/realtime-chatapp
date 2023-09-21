import { Response } from 'express'
import { Created, NotFound, Ok, ServerError } from '~/libs/errorHandler'
import { userSchema } from '~/models/user.model'

export const exitUser = async (res: Response, _id: string) => {
  try {
    const user = find_one(res, _id)
    if (!user) {
      return NotFound(res)
    }
  } catch (error) {
    return ServerError(res, error)
  }
}

export const find = async <T extends keyof User>(res: Response, entity?: T) => {
  try {
    const user = await userSchema.find({ entity })
    return Ok(res, user)
  } catch (error) {
    return ServerError(res, error)
  }
}

export const find_one = async (res: Response, argument: string) => {
  try {
    const user = await userSchema.findOne({ argument })
    return Ok(res, user)
  } catch (error) {
    return ServerError(res, error)
  }
}
export const save = async (res: Response, data: User) => {
  try {
    const newUser = new userSchema({
      ...data
    })
    await newUser.save()
    return Created(res, data)
  } catch (error) {
    return ServerError(res, error)
  }
}
export const update = async (res: Response, id: string, data: User) => {
  try {
    await userSchema.findByIdAndUpdate({ _id: id }, data, { new: true })
    return Ok(res, data)
  } catch (error) {
    return ServerError(res, error)
  }
}
export const deleted = async (res: Response, id: string) => {
  try {
    await userSchema.findByIdAndDelete({ _id: id })
    return Ok(res, 'Remove user is successfully')
  } catch (error) {
    ServerError(res, error)
  }
}
