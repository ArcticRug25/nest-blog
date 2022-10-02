import { HttpFilter } from './common/filter'
import { join } from 'path'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { Response } from './common/response'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/images',
  })

  app.useGlobalInterceptors(new Response())

  app.useGlobalFilters(new HttpFilter())

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000)
}
bootstrap()
