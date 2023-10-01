import { ObjectId } from 'bson'
import { Request, Response } from 'express'

import { Ok } from '~/libs/errorHandler'
import { friendListSchemas } from '~/models/friendList.model'

export const requestAddFriend = async (req: Request, res: Response) => {
  //@ts-ignore
  const user = req.user
  console.log(user._id)

  const acceptField = new friendListSchemas({
    type: 'wait-accept',
    user: user._id,
    friends: req.body.friends
  })
  await acceptField.save()
  return Ok(res, acceptField)
}
