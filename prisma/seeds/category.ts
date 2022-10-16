import { Random } from 'mockjs'
import { PrismaClient } from '@prisma/client'
import { create } from '../helper'

export function category() {
  create(10, async (prisma: PrismaClient) => {
    // await prisma.category.create({
    //   data: {
    //     title: Random.ctitle(),
    //   },
    // })
  })
}
