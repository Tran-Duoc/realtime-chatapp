import { model, Schema } from 'mongoose'

export const userSchema = model(
  'User',
  new Schema(
    {
      name: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
        default: ''
      },
      accountId: {
        type: String || Number,
        default: ''
      },
      provider: {
        type: String,
        default: ''
      },
      refresh_token: {
        type: String,
        default: ''
      }
    },
    {
      timestamps: true
    }
  )
)
