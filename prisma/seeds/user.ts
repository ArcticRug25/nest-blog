import { create } from '../helper'
import { Random } from 'mockjs'
import { PrismaClient } from '@prisma/client'

export async function user() {
  return create(30, async (prisma: PrismaClient) => {
    await prisma.user.create({
      data: {
        email: Random.email(),
        password: '123456',
        avatar: Random.image('300x300'),
      },
    })
  })
}
