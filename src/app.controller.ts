import { MyConfigService } from './my-config/my-config.service'
import * as common from '@nestjs/common'
import { AppService } from './app.service'

@common.Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly myConfig: MyConfigService) {}

  @common.Get()
  getHello(): string {
    return this.myConfig.get('app.name')
    return this.appService.getHello()
  }
}
