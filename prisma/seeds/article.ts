import { Random } from 'mockjs'
import { PrismaClient } from '@prisma/client'
import { create } from '../helper'

export async function article() {
  create(30, async (prisma: PrismaClient) => {
    await prisma.article.create({
      data: {
        content: Random.cparagraph(10, 50),
        title: Random.ctitle(),
        categoryId: 10,
      },
    })
  })
}
