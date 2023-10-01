import { v2 as cloudinary } from 'cloudinary'
import { Request } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req: Request<ParamsDictionary>, _file: File) => {
    const folder = `realtime_chat_app/user_${(req.params as any).id}/${req.body.type}`
    return {
      folder,
      allowed_formats: ['jpg', 'png', 'jpeg', 'mp3', 'wav', 'mp4']
    }
  }
})

export const upload = multer({ storage })
