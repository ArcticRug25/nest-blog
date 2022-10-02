import { Injectable } from '@nestjs/common'
import { CreateEmailDto } from './dto/create-email.dto'
import { UpdateEmailDto } from './dto/update-email.dto'
import { MailerService } from '@nest-modules/mailer'

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail() {
    this.mailerService.sendMail({
      to: 'panxiaowh@163.com',
      from: 'wyw82839148@163.com',
      subject: '测试测试',
      html: '<b>皓皓<b>',
      // template: '',
    })
  }

  create(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email'
  }

  findAll() {
    return `This action returns all email`
  }

  findOne(id: number) {
    return `This action returns a #${id} email`
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`
  }

  remove(id: number) {
    return `This action removes a #${id} email`
  }
}
