import { Schema, model } from 'mongoose'

export const userSchema = model(
  'User',
  new Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true
      },
      email: {
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
      }
    },
    {
      timestamps: true
    }
  )
)
