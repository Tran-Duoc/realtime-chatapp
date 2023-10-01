import express from 'express'

import { requestAddFriend } from '~/controllers/personal.controller'
import { verifyToken } from '~/middlewares/author'

const route = express.Router()

route.post('/request-add-friend', verifyToken, requestAddFriend)
route.post('/resolve-request')
route.post('/reject-request')

export default route
