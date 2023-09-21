import express from 'express'
import userRoute from './user.route'
import conversationRoute from './conversation.model'
import personalMessageRoute from './personal.route'
import groupMessageRoute from './group.route'

const route = express.Router()

route.use('/user', userRoute)
route.use('/conversation', conversationRoute)
route.use('/message/personal', personalMessageRoute)
route.use('/message/group', groupMessageRoute)

export default route
