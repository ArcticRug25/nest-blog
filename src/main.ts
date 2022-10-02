import { join } from 'path'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { Response } from './common/response'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/images',
  })

  app.useGlobalInterceptors(new Response())

  await app.listen(3000)
}
bootstrap()
