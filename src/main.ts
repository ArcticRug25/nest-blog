import { ValidateExceptionFilter } from './validate-exception.filter'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { Validate } from './validate'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useGlobalPipes(new Validate())
  app.useGlobalFilters(new ValidateExceptionFilter())
  await app.listen(3000)
}
bootstrap()
