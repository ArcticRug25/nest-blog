import { MailerModule, PugAdapter } from '@nest-modules/mailer'
import { Module } from '@nestjs/common'
import { config } from 'dotenv'
import path from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { developmentConfig } from './config/development.config'
import { productionConfig } from './config/production.config'
import { EmailModule } from './email/email.module'
import { LoginModule } from './login/login.module'
import { PModule } from './p/p.module'
import { RoleGuardModule } from './role-guard/role-guard.module'
import { UploadModule } from './upload/upload.module'
config({
  path: path.join(__dirname, '../.env'),
})
console.log(process.env.NODE_ENV)
@Module({
  imports: [
    UploadModule,
    PModule,
    LoginModule,
    RoleGuardModule,
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.163.com',
          port: 25,
          ignoreTLS: true,
          secure: false,
          auth: {
            user: 'wyw82839148@163.com',
            pass: 'OUCQHNRMKQNWKXLP',
          },
        },
        defaults: {
          from: '测试-------------',
        },
        template: {
          dir: path.join(__dirname, './templates/email'),
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    EmailModule,
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
