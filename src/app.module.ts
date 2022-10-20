import { UploadModule } from './upload/upload.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { config } from 'dotenv'
import path from 'path'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { ArticleModule } from './article/article.module'
import { CategoryModule } from './category/category.module'

const configPath = path.resolve(__dirname, './config')

config({
  path: path.join(__dirname, '../.env'),
})
@Module({
  imports: [
    // ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    // StatusMonitorModule.setUp(statusMonitorConfig),
    // PModule,
    // LoginModule,
    // RoleGuardModule,
    // EmailModule,
    // ScheduleModule.forRoot(),
    // TasksModule,
    // SpiderModule,
    // GuardModule,
    // MyConfigModule.forRoot({ path: configPath }),
    ConfigModule.forRoot({ isGlobal: true }),
    UploadModule,
    AuthModule,
    PrismaModule,
    ArticleModule,
    CategoryModule,
  ],
})
export class AppModule {}
