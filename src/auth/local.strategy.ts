import { AuthService } from './auth.service'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super()
  }

  async validate(username: string, password: string): Promise<any> {
    return { username, password }
    const user = await this.authService.validateUser(username, password)
    if (!user) {
      throw new HttpException(
        { message: 'authorized failed', error: 'please try again later.' },
        HttpStatus.BAD_REQUEST,
      )
    }
    return user
  }
}
