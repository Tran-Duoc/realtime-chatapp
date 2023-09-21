import express from 'express'
import { registerUser } from '~/controllers/user.controller'
import { Validation } from '~/middlewares/validation'
import { userSchema } from '~/validations/userSchema'

const route = express.Router()

route.post('/', Validation(userSchema), registerUser)

export default route
