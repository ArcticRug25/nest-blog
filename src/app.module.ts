import { productionConfig } from './config/production.config'
import { developmentConfig } from './config/development.config'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { config } from 'dotenv'
import { UploadModule } from './upload/upload.module'
import path from 'path'
config({
  path: path.join(__dirname, '../.env'),
})
console.log(process.env.NODE_ENV)
@Module({
  imports: [UploadModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'ConfigService',
      useValue: process.env.NODE_ENV === 'development' ? developmentConfig : productionConfig,
    },
  ],
})
export class AppModule {}
