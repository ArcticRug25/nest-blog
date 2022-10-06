import { Reflector } from '@nestjs/core'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { Request } from 'express'

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const admin = this.reflector.get<string[]>('role', context.getHandler())
    const req = context.switchToHttp().getRequest<Request>()
    console.log('经过了守卫', req.query.role)
    if (admin.includes(<string>req.query.role)) {
      return true
    } else {
      return false
    }
  }
}
