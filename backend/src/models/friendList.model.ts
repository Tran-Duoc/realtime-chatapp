import { Schema, model } from 'mongoose'

export const userSchema = model(
  'FriendList',
  new Schema(
    {
      friend_list_await_accept: {
        type: Array(Schema.Types.ObjectId),
        ref: 'User'
      },
      friend_list_accept: {
        type: Array(Schema.Types.ObjectId),
        ref: 'User'
      }
    },
    {
      timestamps: true
    }
  )
)
