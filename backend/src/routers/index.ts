import express from 'express'

import conversationRoute from './conversation.model'
import groupMessageRoute from './group.route'
import personalMessageRoute from './personal.route'
import userRoute from './user.route'

const route = express.Router()

route.use('/user', userRoute)
route.use('/conversation', conversationRoute)
route.use('/personal', personalMessageRoute)
route.use('/group', groupMessageRoute)

export default route
