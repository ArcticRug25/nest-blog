import { MyConfigService } from './../my-config/my-config.service'
import { Controller, Get } from '@nestjs/common'

@Controller('article')
export class ArticleController {
  constructor(private readonly myConfigService: MyConfigService) {}
  @Get()
  index() {
    return 'index article => ' + this.myConfigService.get('app.name')
  }
}
