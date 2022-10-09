import { ConfigService } from '@nestjs/config'
import * as common from '@nestjs/common'
import { AppService } from './app.service'

@common.Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly configService: ConfigService) {}

  @common.Get()
  getHello(): string {
    return this.configService.get('APP')
    // return this.appService.getHello()
  }
}
