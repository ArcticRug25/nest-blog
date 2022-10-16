// import { RoleGuard } from './guard/role.guard'
import { HttpFilter } from './common/filter'
import { join } from 'path'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { Response } from './common/response'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import Validate from './common/validate/validate'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  // swagger
  const option = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('api文档')
    .setDescription('测试文档')
    .setVersion('1')
    .build()

  const document = SwaggerModule.createDocument(app, option)

  SwaggerModule.setup('/api-docs', app, document)

  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/images',
  })

  app.useGlobalInterceptors(new Response())

  app.useGlobalFilters(new HttpFilter())

  app.useGlobalPipes(new Validate())

  // app.useGlobalGuards(new RoleGuard())

  await app.listen(3000)
}
bootstrap()
