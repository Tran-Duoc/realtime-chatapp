import express from 'express'
import { loginUser, registerUser } from '~/controllers/user.controller'
import { Validation } from '~/middlewares/validation'
import { userSchema } from '~/validations/userSchema'

const route = express.Router()

route.post('/register', Validation(userSchema), registerUser)

route.post('/login', loginUser)

export default route
