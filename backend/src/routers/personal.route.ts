import express from 'express'
const route = express.Router()

route.post('/request-add-friend')
route.post('/resolve-request')
route.post('/reject-request')

export default route
