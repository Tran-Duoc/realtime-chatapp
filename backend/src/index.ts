import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { ConnectDataBase } from './configs/mongoose.config'
import routes from './routers'
import cookieParser from 'cookie-parser'

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
