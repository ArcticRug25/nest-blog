import { MailerModule } from '@nest-modules/mailer'
import { Module } from '@nestjs/common'
import { config } from 'dotenv'
import { StatusMonitorModule } from 'nest-status-monitor'
import { ConfigModule, ConfigService } from 'nestjs-config'
import path, { resolve } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import statusMonitorConfig from './config/status-monitor'
import { EmailModule } from './email/email.module'
import { GuardModule } from './guard/guard.module'
import { LoginModule } from './login/login.module'
import { PModule } from './p/p.module'
import { SpiderModule } from './spider/spider.module'
import { TasksModule } from './tasks/tasks.module'
import { UploadModule } from './upload/upload.module'
import { MyConfigModule } from './my-config/my-config.module'
import { ArticleModule } from './article/article.module'

const configPath = path.resolve(__dirname, './config')

config({
  path: path.join(__dirname, '../.env'),
})
@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    StatusMonitorModule.setUp(statusMonitorConfig),
    UploadModule,
    PModule,
    LoginModule,
    // RoleGuardModule,
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('email'),
    }),
    EmailModule,
    // ScheduleModule.forRoot(),
    TasksModule,
    SpiderModule,
    GuardModule,
    MyConfigModule.forRoot({ path: configPath }),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
