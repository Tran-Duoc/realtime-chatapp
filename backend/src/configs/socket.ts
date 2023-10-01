import http from 'http'
import io from 'socket.io'

const server = http.createServer()
const socket = new io.Server(server)

export const SocketIO = () => {
  socket.on('connection', (client) => {
    client.on('event', (data) => {})
    client.on('disconnect', () => {})
  })
}
