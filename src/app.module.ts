import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { config } from 'dotenv'
import path from 'path'
config({
  path: path.join(__dirname, '../.env'),
})
console.log(process.env.NODE_ENV)
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
