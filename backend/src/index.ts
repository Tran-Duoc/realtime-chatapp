import express from 'express'

import 'dotenv/config'
import cors from 'cors'
import { ConnectDataBase } from './configs/mongoose.config'
import routes from './routers'

const app = express()

app.use(cors())
app.use(express.json())
app.use('api/v1', routes)

app.use('/', (req, res) => {
  return res.send('Hello')
})

const port = process.env.PORT

ConnectDataBase()
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})
