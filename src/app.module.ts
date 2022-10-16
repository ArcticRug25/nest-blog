import { MailerModule } from '@nest-modules/mailer'
import { Module } from '@nestjs/common'
import { config } from 'dotenv'
import { StatusMonitorModule } from 'nest-status-monitor'
import path, { resolve } from 'path'
import { ArticleModule } from './article/article.module'
import { AuthModule } from './auth/auth.module'
import statusMonitorConfig from './config/status-monitor'
import { EmailModule } from './email/email.module'
import { GuardModule } from './guard/guard.module'
import { LoginModule } from './login/login.module'
import { MyConfigModule } from './my-config/my-config.module'
import { PModule } from './p/p.module'
import { SpiderModule } from './spider/spider.module'
import { TasksModule } from './tasks/tasks.module'
import { UploadModule } from './upload/upload.module'
import { PrismaModule } from './prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'

const configPath = path.resolve(__dirname, './config')

config({
  path: path.join(__dirname, '../.env'),
})
@Module({
  imports: [
    // ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    ConfigModule.forRoot({ isGlobal: true }),
    // StatusMonitorModule.setUp(statusMonitorConfig),
    // UploadModule,
    // PModule,
    // LoginModule,
    // RoleGuardModule,
    // EmailModule,
    // ScheduleModule.forRoot(),
    // TasksModule,
    // SpiderModule,
    // GuardModule,
    // MyConfigModule.forRoot({ path: configPath }),
    // ArticleModule,
    AuthModule,
    PrismaModule,
  ],
})
export class AppModule {}
