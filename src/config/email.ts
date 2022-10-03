import { PugAdapter } from '@nest-modules/mailer'
import path from 'path'

export default {
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
    dir: path.join(__dirname, '../templates/email'),
    adapter: new PugAdapter(),
    options: {
      strict: true,
    },
  },
}
