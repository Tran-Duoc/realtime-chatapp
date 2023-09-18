import { Schema, model } from 'mongoose'

export const conversationSchema = model(
  'Conversation',
  new Schema({
    type: {
      type: String,
      enum: ['personal', 'group'],
      required: true
    },
    name: String,
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  })
)
