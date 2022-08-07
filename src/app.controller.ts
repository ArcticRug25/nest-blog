import * as common from '@nestjs/common'
import { AppService } from './app.service'

@common.Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @common.Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
