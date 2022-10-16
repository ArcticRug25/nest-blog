import { Random } from 'mockjs'
import { PrismaClient } from '@prisma/client'
import { create } from '../helper'
import _ from 'lodash'

export function article() {
  create(30, async (prisma: PrismaClient) => {
    // await prisma.article.create({
    //   data: {
    //     content: Random.cparagraph(10, 50),
    //     title: Random.ctitle(),
    //     categoryId: _.random(1, 10),
    //   },
    // })
  })
}
