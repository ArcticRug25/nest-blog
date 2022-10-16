import { registerAs } from '@nestjs/config'

export default registerAs('app', () => {
  return {
    name: 'ArcticRug25',
  }
})
