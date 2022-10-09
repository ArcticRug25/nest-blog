import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export function create(count = 1, callback: (prisma: PrismaClient) => void) {
  for (let i = 0; i < count; i++) {
    callback(prisma)
  }
}
