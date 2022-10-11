import { HdPipe } from './hd.pipe'
import { PrismaClient } from '@prisma/client'
import { Get, Controller, Param, ParseIntPipe, Post, Body } from '@nestjs/common'
import { AppService } from './app.service'
import CreateArticleDto from './dto/create.article.dto'

@Controller()
export class AppController {
  prisma: PrismaClient
  constructor(private readonly appService: AppService) {
    this.prisma = new PrismaClient()
  }

  @Post('store')
  async add(@Body(HdPipe) dto: CreateArticleDto) {
    const article = await this.prisma.article.create({
      data: {
        ...dto,
      },
    })
    return dto
  }

  // @Get(':id')
  // async getHello(@Param('id', ParseIntPipe) id: number) {
  //   const a = await this.prisma.article.findUnique({
  //     where: { id },
  //   })

  //   return a
  // }
}
