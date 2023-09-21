import { AnySchema } from 'yup'
import { Request, Response, NextFunction } from 'express'
import { BadRequest } from '~/libs/errorHandler'
import { UserSchemaType } from '~/validations/userSchema'

export const Validation = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, name, password }: UserSchemaType = req.body
    await schema.validate({
      name: name,
      email: email,
      password: password
    } as UserSchemaType)

    next()
  } catch (error) {
    return BadRequest(res, error)
  }
}
