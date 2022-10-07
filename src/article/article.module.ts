import { Module } from '@nestjs/common'
import { ArticleController } from './article.controller'

@Module({
  // imports: [MyConfigModule],
  controllers: [ArticleController],
})
export class ArticleModule {}
