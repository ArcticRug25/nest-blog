import { PrismaService } from './../prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}
  create(createArticleDto: CreateArticleDto) {
    console.log('createArticleDto', createArticleDto)
    return this.prisma.article.create({
      data: {
        ...createArticleDto,
        categoryId: +createArticleDto.categoryId,
      },
    })
  }

  async findAll(page = 1, row = 10) {
    const articles = await this.prisma.article.findMany({
      skip: (page - 1) * row,
      take: row,
      include: {
        category: true,
      },
    })

    const total = await this.prisma.article.count()

    return {
      meta: {
        total,
        current_page: page,
        page_row: row,
        total_page: Math.ceil(total / row),
      },
      data: articles,
    }
  }

  findOne(id: number) {
    return this.prisma.article.findFirst({
      where: { id },
    })
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: {
        id,
      },
      data: {
        ...updateArticleDto,
        categoryId: updateArticleDto.categoryId,
      },
    })
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: {
        id,
      },
    })
  }
}
