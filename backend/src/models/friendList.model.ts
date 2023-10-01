import { Schema, model } from 'mongoose'

export const userSchema = model(
  'FriendList',
  new Schema(
    {
      type: {
        type: String,
        enum: ['accept', 'wait-accept'],
        require: true
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ]
    },
    {
      timestamps: true
    }
  )
)
