import { Response } from 'express'

import { BadRequest, Created, NotFound, Ok, ServerError } from '~/libs/errorHandler'
import { userSchema } from '~/models/user.model'

import { exit } from './global.service'

export const Login = async (res: Response, data: any) => {
  try {
    Ok(res, data)
  } catch (error) {
    return ServerError(res, error)
  }
}

export const Register = async (res: Response, data: User) => {
  try {
    const exitUser = await exit({ phone: data.phone })
    if (exitUser) {
      return BadRequest(res, 'user already exit ')
    } else {
      const newUser = new userSchema({
        ...data
      })
      await newUser.save()
      return Created(res, newUser)
    }
  } catch (error) {
    return ServerError(res, error)
  }
}
export const Update = async (res: Response, id: string, data: User) => {
  try {
    await userSchema.findByIdAndUpdate({ _id: id }, data, { new: true })
    return Ok(res, data)
  } catch (error) {
    return ServerError(res, error)
  }
}
export const Delete = async (res: Response, id: string) => {
  try {
    await userSchema.findByIdAndDelete({ _id: id })
    return Ok(res, 'Remove user is successfully')
  } catch (error) {
    ServerError(res, error)
  }
}
