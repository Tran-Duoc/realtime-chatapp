import { Schema, model } from 'mongoose'

export const messageSchema = model(
  'messageSchema',
  new Schema(
    {
      conversation: { type: Schema.Types.ObjectId, ref: 'Conversation' },
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      content: String
    },
    {
      timestamps: true
    }
  )
)
