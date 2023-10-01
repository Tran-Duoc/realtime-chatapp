/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response } from 'express'

import { BadRequest, NotFound, Ok, ServerError, Unauthorize } from '~/libs/errorHandler'
import { comparePassword, DecodeToken, hashPassword, SignToken } from '~/libs/utils'
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
        const access_token = SignToken({ _id: exitUser?._id.toString(), phone: exitUser.phone })
        const refresh_token = SignToken({ _id: exitUser?._id.toString(), phone: exitUser.phone })
        res.cookie('refresh_token', refresh_token, { httpOnly: true })
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { password, ...others } = exitUser._doc

        Login(res, { user: others, access_token })
      }
    }
  } catch (error) {
    return ServerError(res, error)
  }
}

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const refresh_token = req.cookies.refresh_token
    if (!refresh_token) {
      return Unauthorize(res)
    } else {
      const decoded = DecodeToken(refresh_token)
      if (!decoded) {
        return Unauthorize(res)
      } else {
        console.log(decoded)
      }
    }
  } catch (error) {
    return ServerError(res, error)
  }
}
