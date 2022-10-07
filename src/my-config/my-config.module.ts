import { DynamicModule, Global, Module } from '@nestjs/common'
import { MyConfigService } from './my-config.service'

interface IConfigOptions {
  path: string
}

@Global()
@Module({
  providers: [MyConfigService],
  exports: [MyConfigService],
})
export class MyConfigModule {
  static forRoot(options: IConfigOptions): DynamicModule {
    console.log('options', options)
    return {
      // global: true,
      module: MyConfigModule,
      providers: [{ provide: 'CONFIG_OPTIONS', useValue: options }],
      // providers: [
      //   {
      //     provide: MyConfigService,
      //     useFactory() {
      //       return new MyConfigService(options)
      //     },
      //   },
      // ],
    }
  }
}
