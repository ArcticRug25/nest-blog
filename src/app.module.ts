import { MailerModule, PugAdapter } from '@nest-modules/mailer'
import { Module } from '@nestjs/common'
import { config } from 'dotenv'
import { StatusMonitorModule } from 'nest-status-monitor'
import { ConfigModule, ConfigService } from 'nestjs-config'
import path, { resolve } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { developmentConfig } from './config/development.config'
import { productionConfig } from './config/production.config'
import statusMonitorConfig from './config/status-monitor'
import { EmailModule } from './email/email.module'
import { LoginModule } from './login/login.module'
import { PModule } from './p/p.module'
import { RoleGuardModule } from './role-guard/role-guard.module'
import { UploadModule } from './upload/upload.module'
import { TasksModule } from './tasks/tasks.module'
import { ScheduleModule } from '@nestjs/schedule'
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
    RoleGuardModule,
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('email'),
    }),
    EmailModule,
    ScheduleModule.forRoot(),
    TasksModule,
  ],
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
