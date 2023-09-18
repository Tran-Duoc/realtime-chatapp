import express from 'express'
import userRoute from './user/user.route'
import conversationRoute from './conversation/conversation.model'
import personalMessageRoute from './messages/personal.route'
import groupMessageRoute from './messages/group.route'

const route = express.Router()

route.use('/user', userRoute)
route.use('/conversation', conversationRoute)
route.use('/message/personal', personalMessageRoute)
route.use('/message/group', groupMessageRoute)

export default route
