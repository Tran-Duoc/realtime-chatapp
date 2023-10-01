import { model, Schema } from 'mongoose'

export const friendListSchemas = model(
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
