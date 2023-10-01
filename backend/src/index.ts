import 'dotenv/config'

import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'

import { ConnectDataBase } from './configs/mongoose.config'
import routes from './routers'

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1', routes)

const port = process.env.PORT

ConnectDataBase()
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})
