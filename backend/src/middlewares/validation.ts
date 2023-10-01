import { AnySchema } from 'yup'
import { Request, Response, NextFunction } from 'express'
import { BadRequest } from '~/libs/errorHandler'
import { UserSchemaType } from '~/validations/userSchema'

export const Validation = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phone, name, password }: UserSchemaType = req.body
    await schema.validate({
      name: name,
      phone: phone,
      password: password
    } as UserSchemaType)

    next()
  } catch (error) {
    return BadRequest(res, error)
  }
}
