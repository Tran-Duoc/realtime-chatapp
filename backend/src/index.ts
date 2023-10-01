import 'dotenv/config'

import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import http from 'http'
import io from 'socket.io'

import { ConnectDataBase } from './configs/mongoose.config'
import routes from './routers'

const app = express()

const server = http.createServer(app)
const socket = new io.Server(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
})

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1', routes)

const port = 3001

socket.on('connect', (socket) => {
  socket.on('new user', function (data) {
    socket.emit('new user', 'he')
  })

  socket.on('disconnect', () => {})
})

ConnectDataBase()
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})
